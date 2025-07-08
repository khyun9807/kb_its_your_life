package org.scoula.config;

import org.scoula.domain.Parrot;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProjectConfig1 {

    @Bean
    Parrot parrot(){
        Parrot p = new Parrot();
        p.setName("Parrot1");
        return p;
    };

    @Bean
    String hello(){
        return "Hello";
    }

    @Bean
    Integer ten(){
        return 10;
    }
}
