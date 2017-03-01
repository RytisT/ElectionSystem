package lt.itakademija.uploadCSV;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;
import java.sql.*;

@Service
public class FileSystemStorageService implements StorageService {



    private String url = "jdbc:h2:./data/db;";
    private String user = "sa";
    private String pass = "";

    private final Path rootLocation;

    @Autowired
    public FileSystemStorageService(StorageProperties properties) {
        this.rootLocation = Paths.get(properties.getLocation());
    }

    @Override
    public void store(MultipartFile file, Integer partyId, String partyCode) throws SQLException {
        try {
            if (file.isEmpty()) {
                throw new StorageException("Sąrašas tuščias " + file.getOriginalFilename());
            }
            String newFileName = partyCode + ".csv";
            Files.copy(file.getInputStream(), this.rootLocation.resolve(newFileName));
            new toDB().CSVtoH2( newFileName, "CANDIDATES", partyId);
        } catch (IOException e) {
            throw new StorageException("Nepavyko ikelti sąrašo " + file.getOriginalFilename(), e);
        }
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            return Files.walk(this.rootLocation, 1)
                    .filter(path -> !path.equals(this.rootLocation))
                    .map(path -> this.rootLocation.relativize(path));
        } catch (IOException e) {
            throw new StorageException("Nepavyko nuskaityti failo", e);
        }

    }

    @Override
    public Path load(String filename) {
        return rootLocation.resolve(filename);
    }

    @Override
    public Resource loadAsResource(String filename) {
        try {
            Path file = load(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new StorageFileNotFoundException("Neimanoma nuskaityti failo: " + filename);

            }
        } catch (MalformedURLException e) {
            throw new StorageFileNotFoundException("Neimanoma nuskaityti failo:: " + filename, e);
        }
    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(rootLocation.toFile());
    }

    @Override
    public void deleteFile(String fileName) {
        try {
            Connection conn = DriverManager.getConnection(url, user, pass);
            PreparedStatement removeFileName = conn.prepareStatement(
                    "UPDATE PARTIES SET candidates_file= NULL WHERE candidates_file='" + fileName + "';"
            );

            removeFileName.executeUpdate();
            conn.close();

        } catch (SQLException e) {
        e.printStackTrace();
        }

        try {
            Files.delete(load(fileName));

        } catch (IOException em ) {
            em.printStackTrace();
        }
    }

    @Override
    public void init() {
        try {
            Files.createDirectory(rootLocation);
        } catch (IOException e) {
            throw new StorageException("Nepavyko idėti failo", e);
        }
    }
}
