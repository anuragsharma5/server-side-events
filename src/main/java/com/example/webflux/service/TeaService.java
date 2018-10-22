package com.example.webflux.service;

import java.time.Duration;
import java.time.LocalDate;
import java.util.Calendar;
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
	
	private static int status = 0;

	public Mono<TeaEvent> getTeaEventByID(@PathVariable long id){
		return Mono.just(new TeaEvent("Here is your tea","100%", new Date()));
	}
	
	public Flux<TeaEvent> getTeaEvents(){
		Flux<TeaEvent> teaPrepareEventFlux = Flux
				.fromStream(Stream.generate(() -> new TeaEvent("Your Tea is getting ready at this moment",TeaService.getStatus(), new Date()))
						.limit(9));
		
		Flux<Long> durationFlux = Flux.interval(Duration.ofSeconds(2));
		
		Calendar cal = Calendar.getInstance();
		cal.setTimeInMillis(System.currentTimeMillis()+20000);
		
		Flux<TeaEvent> finalFlux = Flux.zip(teaPrepareEventFlux, durationFlux)
				.map(Tuple2::getT1).concatWith(Mono.just(new TeaEvent("Here is your tea","100%", cal.getTime())));
		
		TeaService.resetStatus();
				
		return finalFlux;
	}
	
	public static String getStatus() {
		return String.valueOf(status += 10);
	}
	
	public static void resetStatus() {
		status = 0;
	}
}
