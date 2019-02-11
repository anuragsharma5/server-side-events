package com.example.webflux.claims;

import java.util.Date;

public class ClaimEvent {

	private String message;
	private String status;
	private Date when;
	
	public ClaimEvent(String message, String status, Date when) {
		super();
		this.message = message;
		this.status = status;
		this.when = when;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getWhen() {
		return when;
	}
	public void setWhen(Date when) {
		this.when = when;
	}
	
}
