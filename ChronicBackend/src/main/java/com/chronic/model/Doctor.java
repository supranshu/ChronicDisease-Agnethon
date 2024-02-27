package com.chronic.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Doctor {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long doctorId;
	private String clinicName;
	private String phoneNo;
	private String speciality;
	private String email;
	private String city;
	private String state;
	private String country;
	private String certification;
	public long getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(long doctorId) {
		this.doctorId = doctorId;
	}
	public String getClinicName() {
		return clinicName;
	}
	public void setClinicName(String clinicName) {
		this.clinicName = clinicName;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getCertification() {
		return certification;
	}
	public void setCertification(String certification) {
		this.certification = certification;
	}
	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", clinicName=" + clinicName + ", phoneNo=" + phoneNo + ", speciality="
				+ speciality + ", email=" + email + ", city=" + city + ", state=" + state + ", country=" + country
				+ ", certification=" + certification + "]";
	}
	public Doctor(long doctorId, String clinicName, String phoneNo, String speciality, String email, String city,
			String state, String country, String certification) {
		super();
		this.doctorId = doctorId;
		this.clinicName = clinicName;
		this.phoneNo = phoneNo;
		this.speciality = speciality;
		this.email = email;
		this.city = city;
		this.state = state;
		this.country = country;
		this.certification = certification;
	}
	public Doctor() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

}
