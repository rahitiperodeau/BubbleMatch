package app.tournamentModel;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "matchs")
public class Match {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int matchId;
	
	private String tournament_code;
	private int teamId1;
	private int teamId2;
	private int result;
	private int step;
	
	public Match(int teamId1, int teamId2, int score,int step) {
		super();
		this.teamId1 = teamId1;
		this.teamId2 = teamId2;
		this.result = 0;
		this.step = step;
		this.tournament_code = "";
	}
	
	public Match() {
		super();
		this.result = 0;
	}
	public String getTournament_code() {
		return tournament_code;
	}
	public void setTournament_code(String tournament_code) {
		this.tournament_code = tournament_code;
	}
	public int getTeamId1() {
		return teamId1;
	}
	public void setTeamId1(int teamId1) {
		this.teamId1 = teamId1;
	}
	public int getTeamId2() {
		return teamId2;
	}
	public void setTeamId2(int teamId2) {
		this.teamId2 = teamId2;
	}
	public int getResult() {
		return result;
	}
	public void setResult(int result) {
		this.result = result;
	}
	public int getMatchId() {
		return matchId;
	}
	
	
	
	public int getStep() {
		return step;
	}

	public void setStep(int step) {
		this.step = step;
	}
	
	
//	public void resultMatch(int id) {
//			this.setResult(this.result +1);
//		
//	}


	@Override
	public String toString() {
		return "Match [match_id=" + matchId + ", tournament_code=" + tournament_code + ", team_id1=" + teamId1
				+ ", team_id2=" + teamId2 + ", result=" + result + "]";
	}
	
	
	
}
