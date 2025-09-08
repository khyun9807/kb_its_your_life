package org.scoula.security.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JwtProcessor {

    // JWT 유효 시간: 5분 (단위: 밀리초)
    private static final long TOKEN_VALID_MILLISECOND = 1000L * 60 * 5;

    // 비밀 키 문자열 (운영 시 더 복잡하고 충분히 길게 설정해야 안전)
    private String secretKey = "충분히 긴 임의의(랜덤한) 비밀키 문자열 배정 ";

    // 서명용 키 객체 생성 (HS256 알고리즘 사용)
    private Key key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));


    /**
     * ✅ JWT 토큰 생성
     * @param subject 토큰에 담을 사용자 식별값 (ex: username)
     * @return 서명된 JWT 문자열
     */
    public String generateToken(String subject) {
        return Jwts.builder()
                .setSubject(subject) // 사용자 정보 (주체)
                .setIssuedAt(new Date()) // 발급 시간
                .setExpiration(new Date(System.currentTimeMillis() + TOKEN_VALID_MILLISECOND)) // 만료 시간
                .signWith(key) // 서명용 키로 서명
                .compact(); // 최종 토큰 문자열 생성
    }


    /**
     * ✅ 토큰에서 사용자 이름(subject) 추출
     * @param token JWT 문자열
     * @return subject (ex: username)
     * @throws ExpiredJwtException 만료된 토큰
     * @throws UnsupportedJwtException 지원하지 않는 형식
     * @throws MalformedJwtException 손상된 토큰
     * @throws SignatureException 서명 불일치
     * @throws IllegalArgumentException 기타 파싱 오류
     */
    public String getUsername(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }


    /**
     * ✅ 토큰 유효성 검증 (형식 및 만료 여부 확인)
     * @param token JWT 문자열
     * @return 유효하면 true, 예외 발생 시 false 처리하면 됨
     */
    public boolean validateToken(String token) {
        Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token); // 여기서 예외가 발생하면 catch로 처리 가능

        return true; // 여기까지 왔으면 유효한 토큰
    }
}