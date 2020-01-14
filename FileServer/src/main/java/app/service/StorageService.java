package app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import app.exception.StorageException;
import app.model.FileModel;
import app.model.FileRepository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class StorageService {

    @Value("${upload.path}")
    private String path;
    
    @Autowired
    private FileRepository fileRepository;

    public void uploadFile(MultipartFile file) {

        if (file.isEmpty()) {
            throw new StorageException("Failed to store empty file");
        }

        try {
            var fileName = file.getOriginalFilename();
            System.out.println(fileName);
            System.out.println(Paths.get(path + fileName));
            var is = file.getInputStream();
            
            Files.copy(is, Paths.get(path + fileName),
                    StandardCopyOption.REPLACE_EXISTING);
            FileModel myFile =new FileModel(fileName);
            fileRepository.save(myFile);
        } catch (IOException e) {

            var msg = String.format("Failed to store file", file.getName());

            throw new StorageException(msg, e);
        }

    }
    
    public void deleteFile(Integer fileId) {
    	try{
    		FileModel fileToDelete = fileRepository.findById(fileId).get();
    		try {
    			Files.delete(Paths.get(path + fileToDelete.getFileName()));
    			fileRepository.delete(fileToDelete);
    		}catch (IOException ioException) {
    			var msg = String.format("error during deleting task :");
    			throw new StorageException(msg, ioException);
    		}

    	}catch(NoSuchElementException e) {
    		System.out.println("No file detected with this id");
    	}
    	
    }
    
    public Iterable<FileModel> getFiles(){
    	
    	return fileRepository.findAll();
    }
}