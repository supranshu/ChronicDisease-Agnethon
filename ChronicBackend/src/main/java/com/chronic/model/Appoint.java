package com.chronic.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Appoint {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String docName;
	private String username;
	private Date date;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getDocName() {
		return docName;
	}
	public void setDocName(String docName) {
		this.docName = docName;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Appoint(long id, String docName, String username, Date date) {
		super();
		this.id = id;
		this.docName = docName;
		this.username = username;
		this.date = date;
	}
	public Appoint() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
