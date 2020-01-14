package app.controller;


import app.exception.StorageException;
import app.model.FileModel;
import app.service.StorageService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class RestController {

    @Autowired
    private StorageService storageService;

    @RequestMapping(value = "/doUpload", method = RequestMethod.POST,
            consumes = {"multipart/form-data"})
    public String upload(@RequestParam MultipartFile file) {
    	System.out.println("je recois un fichier");
        storageService.uploadFile(file);

        return "redirect:/success.html";
    }
    
    @RequestMapping("/filesInfo")
    private List<FileModel> getFiles() {
    	System.out.println("j'affiche mes fichiers");
        return (List<FileModel>)storageService.getFiles();

       
    }

    @ExceptionHandler(StorageException.class)
    public String handleStorageFileNotFound(StorageException e) {

        return "redirect:/failure.html";
    }
}

