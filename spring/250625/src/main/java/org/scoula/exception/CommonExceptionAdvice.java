package org.scoula.exception;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.NoHandlerFoundException;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice//@Controller의 자식. 역할 분별. 모든 컨트롤러에 적용됨
@Log4j2//로깅를 위한
public class CommonExceptionAdvice {
    //컨트롤러들에서 에러가 발생했을 때 작동하는 컨트롤러.

    //범용적인 예외 발생시 해당 메서드가 맡음
    @ExceptionHandler(Exception.class)
    public String except(Exception e, Model model) {
        log.error("Exception,,,,,"+e.getMessage());

        model.addAttribute("exception", e);

        log.error(model);

        // 경로/error_page.jsp로 포워딩
        return "error_page";//다른 컨트롤러의 반환과 의미가 같음
    }

    //특정(지금은 nohandlerfound 404) 예외 발생시 해당 메서드가 맡음
    @ExceptionHandler(NoHandlerFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)//404상대로 응답 놰라
    public String handle404(NoHandlerFoundException ex, Model model, HttpServletRequest request) {
        log.error(ex);
        //저장
        model.addAttribute("uri",request.getRequestURI());

        return "custom_404";// 경로/custom_404.jsp로 포워딩
    }
}
