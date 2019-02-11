package com.example.webflux.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.webflux.claims.ClaimEvent;
import com.example.webflux.service.ClaimsProcessingService;

import reactor.core.publisher.Flux;
@RestController
public class ClaimsController {
	@Autowired
	private ClaimsProcessingService claimsService;
	
	@GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE, value="/updateClaimStatus")
	Flux<ClaimEvent> getClaimsEvents(){
		return claimsService.getClaimsEvents();
	}
}
