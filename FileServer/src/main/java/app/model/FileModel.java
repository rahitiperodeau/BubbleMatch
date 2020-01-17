package app.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 * @author seraphin Andrieux
 * Model which represents a file uploaded on the server
 *
 */

@Entity
@Table(name = "files")
public class FileModel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String fileName;
	private Integer countDownloaded;
	private Date uploadedDate;
	private Date lastDownloadedDate;
	private String contentType;
	private String filePath;
	
	
	
	public FileModel() {
		this.setCountDownloaded(0);
		this.setUploadedDate(new Date());
		this.setLastDownloadedDate(new Date());
	}
	
	public FileModel(String fileName) {
		this.setFileName(fileName);
		this.setCountDownloaded(0);
		this.setUploadedDate(new Date());
		this.setLastDownloadedDate(new Date());
	}
	

	public FileModel(String fileName, String contentType) {
		this.setFileName(fileName);
		this.setCountDownloaded(0);
		this.setUploadedDate(new Date());
		this.setLastDownloadedDate(new Date());
		this.setContentType(contentType);
	}
	
	public FileModel(String fileName, String contentType, String filePath) {
		this.setFileName(fileName);
		this.setCountDownloaded(0);
		this.setUploadedDate(new Date());
		this.setLastDownloadedDate(new Date());
		this.setContentType(contentType);
		this.setFilePath(filePath);
	}

	public String getFileName() {
		return fileName;
	}
	
	public Integer getId() {
		return id;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public Integer getCountDownloaded() {
		return countDownloaded;
	}

	public void setCountDownloaded(Integer countDownloaded) {
		this.countDownloaded = countDownloaded;
	}

	public Date getUploadedDate() {
		return uploadedDate;
	}

	public void setUploadedDate(Date uploadedDate) {
		this.uploadedDate = uploadedDate;
	}

	public Date getLastDownloadedDate() {
		return lastDownloadedDate;
	}

	public void setLastDownloadedDate(Date lastDownloadedDate) {
		this.lastDownloadedDate = lastDownloadedDate;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public void addCount() {
		this.countDownloaded += 1;
		
	}

	@Override
    public String toString() {
        return "File {" +
                " id='" 				+ id 		+ '\'' +
                ", fileName=" 			+ fileName 	+ '\'' +
                ", countDownloaded=" 	+ countDownloaded 	+ '\'' +
                ", uploadedDate=" 		+ uploadedDate 	+ '\'' +
                ", lastDownloadedDate=" + lastDownloadedDate 	+ 

                '}';
    }

	
	
}
