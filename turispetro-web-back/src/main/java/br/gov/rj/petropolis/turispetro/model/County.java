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
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class County {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String county;
	
	private String state;
	
	@Column(name="REGISTER_DATE")
	private Date registerDate;
	
	@OneToMany(targetEntity=Partner.class, 
	           mappedBy="county",
	           cascade=CascadeType.ALL, 
	           fetch = FetchType.LAZY)
	private List<Partner> partner;

	public County() {}
	
	public County(String county,String state) {
		this.county = county;
		this.state = state;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCounty() {
		return county;
	}

	public void setCounty(String county) {
		this.county = county;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public List<Partner> getPartner() {
		return partner;
	}

	public void setPartner(List<Partner> partner) {
		this.partner = partner;
	}	
}
