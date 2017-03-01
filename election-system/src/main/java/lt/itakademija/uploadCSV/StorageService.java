package lt.itakademija.uploadCSV;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.sql.SQLException;
import java.util.stream.Stream;

public interface StorageService {

    void init();

    void store(MultipartFile file, Integer partyId, String partyCode, boolean partyCandidate) throws SQLException;

    Stream<Path> loadAll();

    Path load(String filename);

    Resource loadAsResource(String filename) throws IOException, SQLException;

    void deleteAll();

    void deleteFile(String fileName, boolean partyCandidate);

}
