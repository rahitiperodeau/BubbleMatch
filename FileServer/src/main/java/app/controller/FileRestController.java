package app.controller;


import app.model.FileModel;
import app.service.StorageService;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin
@RestController
public class FileRestController {

    @Autowired
    private StorageService storageService;

    
    /**
     * 
     * @param file contains the file sent by the client
     * @param folderId will create the folder if it doesn't exist
     * @return a string return statement 
     * TODO dynamise the return statement
     */
    @RequestMapping(method=RequestMethod.POST,value = "/doUpload",consumes = {"multipart/form-data"}) 
    public String upload(@RequestParam MultipartFile file,@RequestParam Integer folderId) {
  
        storageService.uploadFile(file,folderId);
        return "success";
    }
    
    /**
     * 
     * @return all the filesModel stocked in the DB (usefull to debug)
     */
    @RequestMapping("/filesInfo")
    private List<FileModel> getFiles() {
        return (List<FileModel>)storageService.getFiles();
 
    }
    
    /**
     * 
     * @param folderId here the folder id is related whith the tournamentId
     * @return all fileModel uploaded for a tournamentId
     */
    @RequestMapping("/files/{folderId}")
    private List<FileModel> getTournamentFiles(@PathVariable Integer folderId) {
    	
        return (List<FileModel>)storageService.getTournamentFiles(folderId);
 
    }
    
    /**
     * 
     * @param fileId contain the fileId
     * @param tournamentId contain the folderId 
     */
    @RequestMapping(method=RequestMethod.DELETE,value="/deleteFile/{fileId}/{tournamentId}")
    private void deleteFile(@PathVariable Integer fileId,@PathVariable("tournamentId") Integer tournamentId) {

         storageService.deleteFile(fileId,tournamentId);;
       
    }
    
    
    /**
     * 
     * @param fileId 
     * @param tournamentId
     * @return the file stocked on the server
     * @throws IOException
     */
    @RequestMapping("/downloadFile/{fileId}")
    public ResponseEntity<?> downloadFile(@PathVariable("fileId") Integer fileId) throws IOException 
    {	
    	System.out.println("je download");
    	return storageService.downloadFileFromLocal(fileId);
        
    }

    
}

