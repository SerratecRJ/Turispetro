package br.gov.rj.petropolis.turispetro.model.dto;

import java.util.Date;

import br.gov.rj.petropolis.turispetro.model.Client;

public class ClientDTO {

	private Integer user_id;

	private String login;

	private String password;

	private Date registerDate;

	private Date lastEditDate;

	private Integer userType;

	public ClientDTO() {

	}

	public ClientDTO(Integer user_id, String login, String password, Integer userType) {
		this.user_id = user_id;
		this.login = login;
		this.password = password;
		this.userType = userType;
	}
	
	public ClientDTO(Client client) {
		this.user_id = client.getUser_id();
		this.login = client.getLogin();
		this.password = client.getPassword();
		this.userType = client.getUserType();
		this.registerDate = client.getRegisterDate();
		this.lastEditDate = client.getLastEditDate();
	}

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getUserType() {
		return userType;
	}

	public void setUserType(Integer userType) {
		this.userType = userType;
	}

	public Date getRegisterDate() {
		return registerDate;
	}

	public Date getLastEditDate() {
		return lastEditDate;
	}

}
