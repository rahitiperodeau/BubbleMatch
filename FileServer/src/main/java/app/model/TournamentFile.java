package app.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 * @author seraphin andrieux
 * Class which represents a tournament file ; used to do joint between the folder and the file
 * Without the folder which depends on the tournament id, we will replace each file which have the same name (guess 
 * what could happen if we called a file rules.txt ... 
 *
 */
@Entity
@Table(name = "tournament_files")
public class TournamentFile {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private Integer tournamentId;
	private Integer fileId;
	
	public TournamentFile() {
		
	}
	
	public TournamentFile(Integer tournamentId, Integer fileId) {
		this.setFileId(fileId);
		this.setTournamentId(tournamentId);
	}
	
	public Integer getTournamentId() {
		return tournamentId;
	}
	public void setTournamentId(Integer tournamentId) {
		this.tournamentId = tournamentId;
	}
	public Integer getFileId() {
		return fileId;
	}
	public void setFileId(Integer fileId) {
		this.fileId = fileId;
	}
	
}
