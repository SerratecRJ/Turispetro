package br.gov.rj.petropolis.turispetro.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="VISIT_POINT_CLASSIFICATION")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String description;
	
	@JsonIgnore
	@OneToMany(targetEntity=Partner.class, 
	           mappedBy="category",
	           cascade=CascadeType.ALL, 
	           fetch = FetchType.LAZY)
	private List<Partner> partner;
	
	public Category() {}

	public Category(String description) {
		this.description = description;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public List<Partner> getPartner() {
		return partner;
	}

	public void setPartner(List<Partner> partner) {
		this.partner = partner;
	}
	
}
