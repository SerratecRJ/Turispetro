package br.gov.rj.petropolis.turispetro.model.dto;

import java.io.Serializable;
import java.util.Date;

import br.gov.rj.petropolis.turispetro.model.Partner;

public class PartnerDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String corporateName;
	private String companyName;
	private String latitude;
	private String longitude;
	private String url;
	private String nrle;
	private String street;
	private Integer streetNumber;
	private String phone;
	private String whatsapp;
	private Integer capability;
	private Double average;
	private String featured_photo;
	private Date registerDate;
	private Integer category_id;
	private Integer county_id;
	private Integer user_id;

	public PartnerDTO() {
	}
	
	public PartnerDTO(Partner entity) {
		this.id = entity.getId();
		this.corporateName = entity.getCorporateName();
		this.companyName = entity.getCompanyName();
		this.latitude = entity.getLatitude();
		this.longitude = entity.getLongitude();
		this.url = entity.getUrl();
		this.nrle = entity.getNrle();
		this.street = entity.getStreet();
		this.streetNumber = entity.getStreetNumber();
		this.phone = entity.getPhone();
		this.whatsapp = entity.getWhatsapp();
		this.capability = entity.getCapability();
		this.average = entity.getAverage();
		this.featured_photo = entity.getFeatured_photo();
		this.registerDate = entity.getRegisterDate();
		this.category_id = entity.getCategory().getId();
		this.county_id = entity.getCounty().getId();
		this.user_id = entity.getUser().getUser_id();
	}

	public PartnerDTO(Integer id, String corporateName, String companyName, String latitude, String longitude,
			String url, String nrle, String street, Integer streetNumber, String phone, String whatsapp,
			Integer capability, Double average, String featured_photo, Date registerDate, Integer category_id,
			Integer county_id, Integer user_id) {
		super();
		this.id = id;
		this.corporateName = corporateName;
		this.companyName = companyName;
		this.latitude = latitude;
		this.longitude = longitude;
		this.url = url;
		this.nrle = nrle;
		this.street = street;
		this.streetNumber = streetNumber;
		this.phone = phone;
		this.whatsapp = whatsapp;
		this.capability = capability;
		this.average = average;
		this.featured_photo = featured_photo;
		this.registerDate = registerDate;
		this.category_id = category_id;
		this.county_id = county_id;
		this.user_id = user_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCorporateName() {
		return corporateName;
	}

	public void setCorporateName(String corporateName) {
		this.corporateName = corporateName;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getNrle() {
		return nrle;
	}

	public void setNrle(String nrle) {
		this.nrle = nrle;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public Integer getStreetNumber() {
		return streetNumber;
	}

	public void setStreetNumber(Integer streetNumber) {
		this.streetNumber = streetNumber;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getWhatsapp() {
		return whatsapp;
	}

	public void setWhatsapp(String whatsapp) {
		this.whatsapp = whatsapp;
	}

	public Integer getCapability() {
		return capability;
	}

	public void setCapability(Integer capability) {
		this.capability = capability;
	}

	public Double getAverage() {
		return average;
	}

	public void setAverage(Double average) {
		this.average = average;
	}

	public String getFeatured_photo() {
		return featured_photo;
	}

	public void setFeatured_photo(String featured_photo) {
		this.featured_photo = featured_photo;
	}

	public Date getRegisterDate() {
		return registerDate;
	}

	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}

	public Integer getCategory_id() {
		return category_id;
	}

	public void setCategory_id(Integer category_id) {
		this.category_id = category_id;
	}

	public Integer getCounty_id() {
		return county_id;
	}

	public void setCounty_id(Integer county_id) {
		this.county_id = county_id;
	}

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

			
}
