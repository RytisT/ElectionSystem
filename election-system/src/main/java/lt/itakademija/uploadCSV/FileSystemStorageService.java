package lt.itakademija.uploadCSV;

import lt.itakademija.database.controllers.CandidatesController;
import lt.itakademija.database.models.Candidates;
import lt.itakademija.database.models.Constituency;
import lt.itakademija.database.models.Parties;
import lt.itakademija.database.services.CandidatesService;
import lt.itakademija.database.services.ConstituencyService;
import lt.itakademija.database.services.PartiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.stream.Stream;

@Service
public class FileSystemStorageService implements StorageService {


    @Autowired
    CandidatesService service;

    @Autowired
    PartiesService partiesService;

    @Autowired
    ConstituencyService constituencyService;

    private String url = "jdbc:h2:./data/db;";
    private String user = "sa";
    private String pass = "";
    private int name,last_name,date_of_birth,description,personal_id,party_list_seat;

    private final Path rootLocation;

    @Autowired
    public FileSystemStorageService(StorageProperties properties) {
        this.rootLocation = Paths.get(properties.getLocation());
    }

    public void CSVtoH2(String fileName, Integer id, boolean partyCandidate) throws IOException, SQLException, ParseException {
        String fileUrl = "./upload/" + fileName;
        BufferedReader read = new BufferedReader(new FileReader(fileUrl));

        String ln;
        String firstLine = read.readLine();
        String[] fieldNames = firstLine.split(",");


        for (int i = 0; i < fieldNames.length; i++) {
            if ("name".equals(fieldNames[i])) name = i;
            if ("last_name".equals(fieldNames[i])) last_name = i;
            if ("date_of_birth".equals(fieldNames[i])) date_of_birth = i;
            if ("description".equals(fieldNames[i])) description = i;
            if ("personal_id".equals(fieldNames[i])) personal_id = i;
            if ("party_list_seat".equals(fieldNames[i])) party_list_seat = i;
        }
            if(partyCandidate){

        while ((ln = read.readLine()) != null) {
            Candidates candidate = new Candidates();
            String[] line = ln.split(",");
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Date inputDate = dateFormat.parse(line[date_of_birth]);
            if (service.checkIfExist(line[personal_id]) == null) {
                candidate.setParty_id(id);
                candidate.setName(line[name]);
                candidate.setLast_name(line[last_name]);
                candidate.setDate_of_birth(inputDate);
                candidate.setDescription(line[description]);
                candidate.setPersonal_id(line[personal_id]);
                candidate.setParty_list_seat(Integer.parseInt(line[party_list_seat]));

                service.saveOrUpdate(candidate);
            } else {
                candidate = service.checkIfExist(line[personal_id]);

                candidate.setParty_id(id);
                candidate.setName(line[name]);
                candidate.setLast_name(line[last_name]);
                candidate.setDate_of_birth(inputDate);
                candidate.setDescription(line[description]);
                candidate.setParty_list_seat(Integer.parseInt(line[party_list_seat]));

                service.saveOrUpdate(candidate);
            }
            }
                Parties party = partiesService.findById(id);
                party.setCandidates_file(fileName);
                partiesService.saveOrUpdate(party);
        } else {
                while ((ln = read.readLine()) != null) {
                    Candidates candidate = new Candidates();
                    String[] line = ln.split(",");
                    DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                    Date inputDate = dateFormat.parse(line[date_of_birth]);
                    if (service.checkIfExist(line[personal_id]) == null) {
                        candidate.setConstituency_id(id);
                        candidate.setName(line[name]);
                        candidate.setLast_name(line[last_name]);
                        candidate.setDate_of_birth(inputDate);
                        candidate.setDescription(line[description]);
                        candidate.setPersonal_id(line[personal_id]);
                        service.saveOrUpdate(candidate);
                    } else {
                        candidate = service.checkIfExist(line[personal_id]);

                        candidate.setConstituency_id(id);
                        candidate.setName(line[name]);
                        candidate.setLast_name(line[last_name]);
                        candidate.setDate_of_birth(inputDate);
                        candidate.setDescription(line[description]);

                        service.saveOrUpdate(candidate);
                    }
                }

                Constituency constituency = constituencyService.findById(id);
                constituency.setCandidates_file(fileName);
                constituencyService.saveOrUpdate(constituency);
            }
    }

    @Override
    public void store(MultipartFile file, Integer id, String fileName, boolean partyCandidate) throws SQLException {
        try {
            if (file.isEmpty()) {
                throw new StorageException("Sąrašas tuščias " + file.getOriginalFilename());
            }
            String newFileName = fileName + ".csv";
            Files.copy(file.getInputStream(), this.rootLocation.resolve(newFileName));
            CSVtoH2(newFileName, id, partyCandidate);
        } catch (IOException e) {
            throw new StorageException("Nepavyko ikelti sąrašo " + file.getOriginalFilename(), e);
        } catch (ParseException e) {
            e.printStackTrace();
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
    public void deleteFile(String fileName, boolean partyCandidate) {
        if (partyCandidate) {
            Parties party = partiesService.findByFileName(fileName);
            party.setCandidates_file(null);
            partiesService.saveOrUpdate(party);
        } else {
            Constituency constituency = constituencyService.findByFileName(fileName);
            constituency.setCandidates_file(null);
            constituencyService.saveOrUpdate(constituency);
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
