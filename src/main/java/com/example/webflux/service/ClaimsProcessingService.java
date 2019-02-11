package com.example.webflux.service;

import java.time.Duration;
import java.util.Calendar;
import java.util.Date;
import java.util.stream.Stream;

import org.springframework.stereotype.Service;

import com.example.webflux.claims.ClaimEvent;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

@Service
public class ClaimsProcessingService {
	
	private static int ind = 0;
	private static String[] statuses = {"Submission", "Review", "Adjudication", "Finalization", "Disbursement"};

	public Flux<ClaimEvent> getClaimsEvents(){
		Flux<ClaimEvent> claimProcessEventFlux = Flux
				.fromStream(Stream.generate(() -> new ClaimEvent("Your Claim is getting processed at this moment",ClaimsProcessingService.getStatus(), new Date()))
						.limit(statuses.length));
		
		Flux<Long> durationFlux = Flux.interval(Duration.ofSeconds(2));
		
		Calendar cal = Calendar.getInstance();
		cal.setTimeInMillis(System.currentTimeMillis()+20000);
		
		Flux<ClaimEvent> finalFlux = Flux.zip(claimProcessEventFlux, durationFlux)
				.map(Tuple2::getT1);
		
		ClaimsProcessingService.resetStatus();
				
		return finalFlux;
	}
	
	public static String getStatus() {
		String status = statuses[ind];
		ind += 1;
		return status;
	}
	
	public static void resetStatus() {
		ind = 0;
	}
}
