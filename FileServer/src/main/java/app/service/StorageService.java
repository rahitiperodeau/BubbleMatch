package app.service;

import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Paths;
import app.exception.StorageException;
import app.model.FileModel;
import app.model.FileRepository;
import app.model.TournamentFile;
import app.model.TournamentFileRepository;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.http.HttpHeaders;
import java.nio.file.Files;
import java.nio.file.Path;

import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
public class StorageService {

    @Value("${upload.path}") // defined on src/main/ressources/application.properties
    private String localPath; // file Server rootPath 
    
    @Autowired
    private FileRepository fileRepository;
    
    @Autowired
    private TournamentFileRepository tournamentFileRepository;

    /**
     * 
     * Method used to upload a file on the server
     * 
     * @param file
     * @param tournamentId used to define in which folder will be stock the file
     * 
     * 
     */
    public void uploadFile(MultipartFile file,Integer tournamentId) {

        if (file.isEmpty()) {
            throw new StorageException("Failed to store empty file");
        }

        try {
        	// get back info from the file sent
            String fileName = file.getOriginalFilename();
            String contentType = file.getContentType();
            
            //create an input stream
            InputStream is = file.getInputStream();
            
            //define where the file will be stock
            String filePath = localPath + tournamentId.toString() +'/' +fileName;
            new File(localPath + tournamentId.toString() +'/').mkdir();
            Files.copy(is, Paths.get(filePath),
                    StandardCopyOption.REPLACE_EXISTING);
            
            // now we update DB
            FileModel myFile =new FileModel(fileName,contentType,localPath + tournamentId.toString() +'/' +fileName);
            fileRepository.save(myFile);
            
            //Don't forget to update also the second table
            TournamentFile myTournamentFile = new TournamentFile(tournamentId,fileRepository.findByFilePath(filePath).getId());
            tournamentFileRepository.save(myTournamentFile);
        } catch (IOException e) {

            String msg = String.format("Failed to store file", file.getName());

            throw new StorageException(msg, e);
        }

    }
    
    /**
     * 
     * @param fileId
     * @param tournamentId
     * @return
     */
    public ResponseEntity<Resource> downloadFileFromLocal(Integer fileId,Integer tournamentId) {
    	
    	FileModel myFile = fileRepository.findById(fileId).get();
    	
    	myFile.addCount(); 								// we increment the download number 
    	fileRepository.save(myFile); 					// update
    	Path path = Paths.get(localPath + tournamentId +"/" + myFile.getFileName());
    	Resource resource = null;
    	String contentType = myFile.getContentType();
    	try {
    		resource = new UrlResource(path.toUri());
    		
    	} catch (MalformedURLException e) {
    		e.printStackTrace();
    	}
    	return ResponseEntity.ok()
    		
    			.contentType(MediaType.parseMediaType(contentType))
    			.header(org.springframework.http.HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
    			.body(resource);
    }
    
    
    
    
    public void deleteFile(Integer fileId,Integer tournamentId) {
    	try{
    		FileModel fileToDelete = fileRepository.findById(fileId).get();
    		try {
    			Files.delete(Paths.get(localPath +tournamentId +"/"+ fileToDelete.getFileName()));
    			fileRepository.delete(fileToDelete);
    			tournamentFileRepository.delete(tournamentFileRepository.findByFileId(fileId));
    		}catch (IOException ioException) {
    			String msg = String.format("error during deleting task :");
    			throw new StorageException(msg, ioException);
    		}

    	}catch(NoSuchElementException e) {
    		System.out.println("No file detected with this id");
    	}
    	
    }
    
    /**
     * 
     * @return all FileModel 
     */
    public Iterable<FileModel> getFiles(){
    	
    	return fileRepository.findAll();
    }

    /**
     * 
     * @param tournamentId
     * @return all file associated with the tournamentId
     */
	public List<FileModel> getTournamentFiles(Integer tournamentId) {
		List<TournamentFile> tournamentFiles = tournamentFileRepository.findByTournamentId(tournamentId);
		
		List<Integer> myIds =new ArrayList<Integer>();
		for(Iterator<TournamentFile> it=tournamentFiles.iterator(); it.hasNext();) {
			myIds.add(it.next().getFileId());
		}
		return (List<FileModel>) fileRepository.findAllById(myIds);
		
	}
}