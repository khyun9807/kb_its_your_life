package org.scoula.security.filter;

import lombok.extern.log4j.Log4j2;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;

@Log4j2
@Component
public class JwtUsernamePasswordAuthenticationFilter
extends UsernamePasswordAuthenticationFilter {

}
