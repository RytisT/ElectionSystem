package lt.itakademija.uploadCSV;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import java.io.IOException;
import java.sql.SQLException;
import java.util.stream.Collectors;

@RestController
public class FileUploadController {

    private final StorageService storageService;

    @Autowired
    public FileUploadController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping("/uploadForm")
    public String listUploadedFiles(Model model) throws IOException {

        model.addAttribute("files", storageService
                .loadAll()
                .map(path ->
                        MvcUriComponentsBuilder
                                .fromMethodName(FileUploadController.class, "serveFile", path.getFileName().toString())
                                .build().toString())
                .collect(Collectors.toList()));

        return "uploadForm.html";
    }

    @GetMapping("/uploadForm/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) throws IOException, SQLException {

        Resource file = storageService.loadAsResource(filename);
        return ResponseEntity
                .ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }

    @PostMapping("/uploadForm")
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file,
                                              @RequestHeader(required = false) Integer partyId,
                                              @RequestHeader(required = false) String partyCode,
                                              @RequestHeader(required = false) Integer constId,
                                              @RequestHeader(required = false) String constTitle
                                              ) throws SQLException {
        if (partyId != null) {
            storageService.store(file, partyId, partyCode, true);
        } else{
            storageService.store(file, constId, constTitle, false);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/uploadForm/party/{filename}")
    public ResponseEntity<?> handlePartyFileDelete(@PathVariable String filename){
        filename = filename + ".csv";
        System.out.println(filename);
        storageService.deleteFile(filename, true);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/uploadForm/const/{filename}")
    public ResponseEntity<?> handleConstFileDelete(@PathVariable String filename){
        filename = filename + ".csv";
        System.out.println(filename);
        storageService.deleteFile(filename, false);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity handleStorageFileNotFound(StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }

}
