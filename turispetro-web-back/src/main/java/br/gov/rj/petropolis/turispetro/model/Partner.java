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
@Table(name = "PARTNER")
public class Partner {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "CORPORATE_NAME")
	private String corporateName;

	@Column(name = "COMPANY_NAME")
	private String companyName;

	private String latitude;

	private String longitude;

	private String url;

	private String nrle;

	private String street;

	@Column(name = "STREET_NUMBER")
	private Integer streetNumber;

	private String phone;

	private String whatsapp;

	private Integer capability;

	private Double average;

	private String featured_photo;

	@Column(name = "REGISTER_DATE")
	private Date registerDate;

	@OneToMany(targetEntity = BookMarks.class, mappedBy = "partner", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<BookMarks> bookMarks;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "VISIT_CLASS_ID", referencedColumnName = "id")
	private Category category;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "COUNTY_ID", referencedColumnName = "id")
	private County county;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id", referencedColumnName = "user_id")
	private Client user;

	public Partner() {
	}

	public Partner(String corporateName, String companyName, String latitude, String longitude, String url, String nrle,
			String street, Integer streetNumber, String phone, String whatsapp, Integer capability, String featured_photo,
			Category category, County county, Client user) {
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
		this.featured_photo = featured_photo;
		this.category = category;
		this.county = county;
		this.user = user;
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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public County getCounty() {
		return county;
	}

	public void setCounty(County county) {
		this.county = county;
	}

	public Client getUser() {
		return user;
	}

	public void setUser(Client user) {
		this.user = user;
	}

	public String getFeatured_photo() {
		return featured_photo;
	}

	public void setFeatured_photo(String featured_photo) {
		this.featured_photo = featured_photo;
	}

}
