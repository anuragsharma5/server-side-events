package com.example.webflux.beverages;

import java.util.Date;

public class TeaEvent {

	private long id;
	private Date when;
	
	public TeaEvent(long id, Date when) {
		super();
		this.id = id;
		this.when = when;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Date getWhen() {
		return when;
	}
	public void setWhen(Date when) {
		this.when = when;
	}
}
