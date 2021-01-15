package br.gov.rj.petropolis.turispetro.model.dto;

import java.util.Date;

import br.gov.rj.petropolis.turispetro.model.Client;

public class TouristDTO {

	private String name;

	private String ir;

	private String genre;

	private Integer stayTime;

	private String visitReason;

	private String transportation;

	private String wasAccompanied;

	private Integer accompanyingNumber;

	private String accommodation;

	private String email;

	private Client user;

	private Date registerDate;

	private Integer visitCountyId;
	
	private Integer originCountyId;

	public TouristDTO() {
	}

	public TouristDTO(String name, String ir, String genre, Integer stayTime, String visitReason, String transportation,
			String wasAccompanied, Integer accompanyingNumber, String accommodation, String email, Client user,
			Integer visitCountyId, Integer originCountyId) {
		super();
		this.name = name;
		this.ir = ir;
		this.genre = genre;
		this.stayTime = stayTime;
		this.visitReason = visitReason;
		this.transportation = transportation;
		this.wasAccompanied = wasAccompanied;
		this.accompanyingNumber = accompanyingNumber;
		this.accommodation = accommodation;
		this.email = email;
		this.user = user;
		this.visitCountyId= visitCountyId;
		this.originCountyId= originCountyId; 
	}

	public String getName() {
		return name;
	}

	public String getIr() {
		return ir;
	}

	public String getGenre() {
		return genre;
	}

	public Integer getStayTime() {
		return stayTime;
	}

	public String getVisitReason() {
		return visitReason;
	}

	public String getTransportation() {
		return transportation;
	}

	public String getWasAccompanied() {
		return wasAccompanied;
	}

	public Integer getAccompanyingNumber() {
		return accompanyingNumber;
	}

	public String getAccommodation() {
		return accommodation;
	}

	public String getEmail() {
		return email;
	}

	public Client getUser() {
		return user;
	}

	public Date getRegisterDate() {
		return registerDate;
	}

	public Integer getVisitCountyId() {
		return visitCountyId;
	}

	public Integer getOriginCountyId() {
		return originCountyId;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setIr(String ir) {
		this.ir = ir;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public void setStayTime(Integer stayTime) {
		this.stayTime = stayTime;
	}

	public void setVisitReason(String visitReason) {
		this.visitReason = visitReason;
	}

	public void setTransportation(String transportation) {
		this.transportation = transportation;
	}

	public void setWasAccompanied(String wasAccompanied) {
		this.wasAccompanied = wasAccompanied;
	}

	public void setAccompanyingNumber(Integer accompanyingNumber) {
		this.accompanyingNumber = accompanyingNumber;
	}

	public void setAccommodation(String accommodation) {
		this.accommodation = accommodation;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setUser(Client user) {
		this.user = user;
	}

	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}

	public void setVisitCountyId(Integer visitCountyId) {
		this.visitCountyId = visitCountyId;
	}

	public void setOriginCountyId(Integer originCountyId) {
		this.originCountyId = originCountyId;
	}

}