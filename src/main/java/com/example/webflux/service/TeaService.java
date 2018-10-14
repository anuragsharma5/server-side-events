package com.example.webflux.service;

import java.time.Duration;
import java.util.Date;
import java.util.stream.Stream;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.webflux.beverages.TeaEvent;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

@Service
public class TeaService {

	public Mono<TeaEvent> getTeaEventByID(@PathVariable long id){
		return Mono.just(new TeaEvent(id, new Date()));
	}
	
	public Flux<TeaEvent> getTeaEvents(){
		Flux<TeaEvent> teaEventFlux = Flux.fromStream(Stream.generate(() -> new TeaEvent(System.currentTimeMillis(), new Date())));

		Flux<Long> durationFlux = Flux.interval(Duration.ofSeconds(1));

		return Flux.zip(teaEventFlux, durationFlux).map(Tuple2::getT1);
	}
}
