package com.levels.fyi.dataprocessing;

import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;

import javax.script.ScriptException;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;

@SpringBootApplication
public class DataprocessingApplication implements CommandLineRunner {

    @Autowired
    private HttpCall httpCall;

	public static void main(String[] args) {
		SpringApplication.run(DataprocessingApplication.class, args);
	}


    @Override
    public void run(String... args) throws Exception {
        httpCall.starter();
    }
}
