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

    @RequestMapping(method=RequestMethod.POST,value = "/doUpload",
            consumes = {"multipart/form-data"})
    public String upload(@RequestParam MultipartFile file,@RequestParam Integer folderId) {
    	System.out.println("je recois un fichier");
        storageService.uploadFile(file,folderId);

        return "redirect:/success.html";
    }
    
    @RequestMapping("/filesInfo")
    private List<FileModel> getFiles() {
    	System.out.println("j'affiche mes fichiers");
        return (List<FileModel>)storageService.getFiles();
 
    }
    
    @RequestMapping("/files/{tournamentId}")
    private List<FileModel> getTournamentFiles(@PathVariable Integer tournamentId) {
    	System.out.println("j'affiche mes fichiers");
        return (List<FileModel>)storageService.getTournamentFiles(tournamentId);
 
    }
    
    @RequestMapping(method=RequestMethod.DELETE,value="/deleteFile/{fileId}")
    private void deleteFile(@PathVariable Integer fileId) {
    	System.out.println("je supprime le fichier : " + fileId);
         storageService.deleteFile(fileId);;
       
    }
    
    
    
    @RequestMapping("/downloadFile/{fileId}/{tournamentId}")
    public ResponseEntity<?> downloadFile(@PathVariable("fileId") Integer fileId,@PathVariable("tournamentId") Integer tournamentId) throws IOException 
    {	
    	System.out.println("je download");
    	return storageService.downloadFileFromLocal(fileId,tournamentId);
        
    }

    
}

