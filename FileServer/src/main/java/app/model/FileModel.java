package app.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



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
	

	public String getFileName() {
		return fileName;
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
