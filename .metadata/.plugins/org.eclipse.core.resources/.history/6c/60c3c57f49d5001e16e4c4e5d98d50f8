package com.chronic.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class WeeklyAnalysis {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String username;
	private String sugar;
	private long hba1c;
	private long bmi;
	private long pefr;
	private Date date;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getSugar() {
		return sugar;
	}
	public void setSugar(String sugar) {
		this.sugar = sugar;
	}
	public long getHba1c() {
		return hba1c;
	}
	public void setHba1c(long hba1c) {
		this.hba1c = hba1c;
	}
	public long getBmi() {
		return bmi;
	}
	public void setBmi(long bmi) {
		this.bmi = bmi;
	}
	public long getPefr() {
		return pefr;
	}
	public void setPefr(long pefr) {
		this.pefr = pefr;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "WeeklyAnalysis [id=" + id + ", username=" + username + ", sugar=" + sugar + ", hba1c=" + hba1c
				+ ", bmi=" + bmi + ", pefr=" + pefr + ", date=" + date + "]";
	}
	public WeeklyAnalysis(long id, String username, String sugar, long hba1c, long bmi, long pefr, Date date) {
		super();
		this.id = id;
		this.username = username;
		this.sugar = sugar;
		this.hba1c = hba1c;
		this.bmi = bmi;
		this.pefr = pefr;
		this.date = date;
	}
	public WeeklyAnalysis() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
