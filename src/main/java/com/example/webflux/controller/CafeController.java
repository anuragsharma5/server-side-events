package com.example.webflux.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.webflux.beverages.TeaEvent;
import com.example.webflux.service.TeaService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class CafeController {

	@Autowired
	private TeaService teaService;
	
	@RequestMapping("/teaEvents/{id}")
	Mono<TeaEvent> getTeaEventByID(@PathVariable long id){
		return teaService.getTeaEventByID(id);
	}
	
	@GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE, value="/teaEvents")
	Flux<TeaEvent> getTeaEvents(){
		return teaService.getTeaEvents();
	}
	
}
