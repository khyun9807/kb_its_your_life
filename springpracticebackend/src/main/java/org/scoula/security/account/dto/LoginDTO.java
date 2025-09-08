package org.scoula.security.account.dto;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;

import javax.servlet.http.HttpServletRequest;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginDTO {

    private String username;
    private String password;

    /**
     * ✅ HttpServletRequest에서 JSON 본문을 파싱하여 LoginDTO로 변환
     * @param request 클라이언트의 로그인 요청 (JSON)
     * @return LoginDTO 객체
     */
    public static LoginDTO of(HttpServletRequest request) {
        ObjectMapper om = new ObjectMapper();

        try {
            // 요청 바디에서 username, password를 파싱하여 LoginDTO로 매핑
            return om.readValue(request.getInputStream(), LoginDTO.class);
        } catch (Exception e) {
            e.printStackTrace();
            // 파싱 실패 시 예외 던짐 (Spring Security 인증 실패 처리에 사용됨)
            throw new BadCredentialsException("username 또는 password가 없습니다.");
        }
    }
}