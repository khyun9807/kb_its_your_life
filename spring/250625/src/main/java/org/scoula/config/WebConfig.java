package org.scoula.config;

import lombok.extern.slf4j.Slf4j;
import org.scoula.security.config.SecurityConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import javax.servlet.Filter;
import javax.servlet.MultipartConfigElement;
import javax.servlet.ServletRegistration;

@Slf4j
@Configuration
public class WebConfig extends AbstractAnnotationConfigDispatcherServletInitializer {
    //web.xml 대체. 톰캣에게 앱에 대해서 알리는 역할.
    //앱 관련 설정. 필터링. 캐릭터셋 적용.

    final String LOCATION="c:/upload/";//파일 업로드시 서버의 저장위치
    final long MAX_FILE_SIZE = 10L * 1024 * 1024;//한 파일 최대 크기
    final long MAX_REQUEST_SIZE = 20L * 1024 * 1024;//한 요청 최대 크기
    final int FINAL_SIZE_THRESHOLD = 1024 * 1024 * 5;//메모리를 사용할지, 임시파일을 사용할지 기준.

    @Override//rootconfig class 정보 갖고오기
    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{RootConfig.class, SecurityConfig.class};
    }

    @Override//servletconfig class 정보 갖고오기
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{ServletConfig.class};
    }

    @Override//dispatch servlet이 담당할 url 매핑 패턴 지정
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }
    
    //post body 문자 인코딩 필더 설정
    protected Filter[] getServletFilters(){
        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();

        //utf-8로 설정
        characterEncodingFilter.setEncoding("UTF-8");
        characterEncodingFilter.setForceEncoding(true);

        return new Filter[]{characterEncodingFilter};
    }

    @Override//서블릿 설정
    protected void customizeRegistration(ServletRegistration.Dynamic registration){
        //nohandlerfound 404 예외 발생시 예외 던지게끔 설정.
        registration.setInitParameter("throwExceptionIfNoHandlerFound", "true");

        //바이너리 데이터를 맡을 multipart설정
        MultipartConfigElement multipartConfig=new MultipartConfigElement(
                LOCATION,
                MAX_FILE_SIZE,
                MAX_REQUEST_SIZE,
                FINAL_SIZE_THRESHOLD
        );

        registration.setMultipartConfig(multipartConfig);
    }
}
