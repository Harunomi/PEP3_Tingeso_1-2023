package com.tingeso.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PreguntaServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PreguntaServiceApplication.class, args);
	}

}
