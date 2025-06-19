package org.scoula.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import java.awt.*;

@EnableWebMvc
@ComponentScan(basePackages = {
        //controller들이 있는 패키지 경로 나열
        //"org.scoula.controller",//컨트롤러 모여있음
        //"org.scoula.exception"//exception 대응 컨트롤러
        "org.scoula.weather.controller"
})
public class ServletConfig implements WebMvcConfigurer {
    //dispatcher servlet == front controller
    //

    @Override//resources 요청 시 처리
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/resources/**")
                .addResourceLocations("/resources/");
    }

    @Override//jsp view resolver 설정.
    public void configureViewResolvers(ViewResolverRegistry registry) {
        //jsp 엔진 사용
        InternalResourceViewResolver bean=new InternalResourceViewResolver();
        
        //jsp 엔진 결정
        bean.setViewClass(JstlView.class);
        bean.setPrefix("/WEB-INF/views/");
        bean.setSuffix(".jsp");
        
        //jsp로 가게끔
        registry.viewResolver(bean);
    }

    @Bean//http body에다가 binary데이터를 넣을때 필요함
    public MultipartResolver multipartResolver() {
        StandardServletMultipartResolver multipartResolver=new StandardServletMultipartResolver();
        return multipartResolver;
    }
}
