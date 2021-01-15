package br.gov.rj.petropolis.turispetro.model.dto;

import java.util.Date;

import br.gov.rj.petropolis.turispetro.model.Client;

public class ClientDTO {

	private Integer id;

	private String login;

	private String password;

	private Date registerDate;

	private Date lastEditDate;

	private String userType;

	public ClientDTO() {

	}

	public ClientDTO(Integer id, String login, String password, String userType) {
		super();
		this.id = id;
		this.login = login;
		this.password = password;
		this.userType = userType;
	}
	
	public ClientDTO(Client client) {
		super();
		this.id = client.getId();
		this.login = client.getLogin();
		this.password = client.getPassword();
		this.userType = client.getUserType();
		this.registerDate = client.getRegisterDate();
		this.lastEditDate = client.getLastEditDate();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public Date getRegisterDate() {
		return registerDate;
	}

	public Date getLastEditDate() {
		return lastEditDate;
	}

}
