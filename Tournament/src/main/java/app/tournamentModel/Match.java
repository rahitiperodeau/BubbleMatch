package app.tournamentModel;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Match {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int match_id;
	
	private String tournament_code;
	private int team_id1;
	private int team_id2;
	private int result;
	public Match(int team_id1, int team_id2) {
		super();
		this.team_id1 = team_id1;
		this.team_id2 = team_id2;
		this.result = 0;
	}
	public String getTournament_code() {
		return tournament_code;
	}
	public void setTournament_code(String tournament_code) {
		this.tournament_code = tournament_code;
	}
	public int getTeam_id1() {
		return team_id1;
	}
	public void setTeam_id1(int team_id1) {
		this.team_id1 = team_id1;
	}
	public int getTeam_id2() {
		return team_id2;
	}
	public void setTeam_id2(int team_id2) {
		this.team_id2 = team_id2;
	}
	public int getResult() {
		return result;
	}
	public void setResult(int result) {
		this.result = result;
	}
	public int getMatch_id() {
		return match_id;
	}
	
	
	@Override
	public String toString() {
		return "Match [match_id=" + match_id + ", tournament_code=" + tournament_code + ", team_id1=" + team_id1
				+ ", team_id2=" + team_id2 + ", result=" + result + "]";
	}
	
	
	
}
