package br.gov.rj.petropolis.turispetro.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="TOURIST_PARTNER")
public class BookMarks {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="TOURIST_ID", referencedColumnName = "id")
	private Tourist tourist;
	
	@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="PARTNER_ID", referencedColumnName = "id")
	private Partner partner;
	
	private Integer grade;
	
	private Boolean bookMark;
	
	@Column(name="REGISTER_DATE")
	private Date registerDate;

	public BookMarks() {}
	
	public BookMarks(Tourist tourist, Partner partner, Integer grade, Boolean bookMark) {
		this.tourist = tourist;
		this.partner = partner;
		this.grade = grade;
		this.bookMark = bookMark;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Tourist getTourist() {
		return tourist;
	}

	public void setTourist(Tourist tourist) {
		this.tourist = tourist;
	}

	public Partner getPartner() {
		return partner;
	}

	public void setPartner(Partner partner) {
		this.partner = partner;
	}

	public Integer getGrade() {
		return grade;
	}

	public void setGrade(Integer grade) {
		this.grade = grade;
	}

	public Boolean getBookMark() {
		return bookMark;
	}

	public void setBookMark(Boolean bookMark) {
		this.bookMark = bookMark;
	}

	public Date getRegisterDate() {
		return registerDate;
	}

	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}
}
