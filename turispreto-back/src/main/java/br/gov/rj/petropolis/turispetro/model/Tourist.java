package br.gov.rj.petropolis.turispetro.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class Tourist {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String name;

	private String ir;

	private String genre;

	@Column(name = "STAY_TIME")
	private Integer stayTime;

	@Column(name = "VISIT_REASON")
	private String visitReason;

	private String transportation;

	@Column(name = "WAS_ACCOMPANIED")
	private String wasAccompanied;

	@Column(name = "ACCOMPANYING_NUMBER")
	private Integer accompanyingNumber;

	private String accommodation;

	private String email;

	@Column(name = "REGISTER_DATE")
	private Date registerDate;

	@OneToMany(targetEntity = BookMarks.class, mappedBy = "tourist", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<BookMarks> bookMarks;

	@ManyToOne
	@JoinColumn(name = "USER_REG", referencedColumnName = "id")
	private Client user;

	@ManyToOne
	@JoinColumn(name = "VISIT_COUNTY", referencedColumnName = "id")
	private County visitCounty;

	@ManyToOne
	@JoinColumn(name = "ORIGIN_COUNTY", referencedColumnName = "id")
	private County originCounty;
	
	public Tourist() {}

	public Tourist(String name, String ir, String genre, Integer integer, String visitReason, String transportation,
			String string, Integer accompanyingNumber, String string2, String email, County savedUser,
			County visitCounty, Client originCounty2) {
		this.name = name;
		this.ir = ir;
		this.genre = genre;
		this.stayTime = integer;
		this.visitReason = visitReason;
		this.transportation = transportation;
		this.wasAccompanied = string;
		this.accompanyingNumber = accompanyingNumber;
		this.accommodation = string2;
		this.email = email;
		this.user = originCounty2;
		this.visitCounty = visitCounty;
		this.originCounty = savedUser;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIr() {
		return ir;
	}

	public void setIr(String ir) {
		this.ir = ir;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public Integer getStayTime() {
		return stayTime;
	}

	public void setStayTime(Integer staytime) {
		this.stayTime = staytime;
	}

	public String getVisitReason() {
		return visitReason;
	}

	public void setVisitReason(String visitReason) {
		this.visitReason = visitReason;
	}

	public String getTransportation() {
		return transportation;
	}

	public void setTransportation(String transportation) {
		this.transportation = transportation;
	}

	public String isWasAccompanied() {
		return wasAccompanied;
	}

	public void setWasAccompanied(String wasAccompanied) {
		this.wasAccompanied = wasAccompanied;
	}

	public Integer getAccompanyingNumber() {
		return accompanyingNumber;
	}

	public void setAccompanyingNumber(Integer accompanyingNumber) {
		this.accompanyingNumber = accompanyingNumber;
	}

	public String isAccommodation() {
		return accommodation;
	}

	public void setAccommodation(String accommodation) {
		this.accommodation = accommodation;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getRegisterDate() {
		return registerDate;
	}

	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}

	public List<BookMarks> getBookMarks() {
		return bookMarks;
	}

	public void setBookMarks(List<BookMarks> bookMarks) {
		this.bookMarks = bookMarks;
	}

	public Client getUser() {
		return user;
	}

	public void setUser(Client user) {
		this.user = user;
	}

	public County getVisitCounty() {
		return visitCounty;
	}

	public void setVisitCounty(County visitCounty) {
		this.visitCounty = visitCounty;
	}

	public County getOriginCounty() {
		return originCounty;
	}

	public void setOriginCounty(County originCounty) {
		this.originCounty = originCounty;
	}
}
