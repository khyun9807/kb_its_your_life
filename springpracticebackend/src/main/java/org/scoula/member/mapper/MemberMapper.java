package org.scoula.member.mapper;

import org.scoula.member.dto.ChangePasswordDTO;
import org.scoula.security.account.domain.AuthVO;
import org.scoula.security.account.domain.MemberVO;

public interface MemberMapper {
    MemberVO get(String username);
    MemberVO findByUsername(String username); // id중복체크시사용
    int insert(MemberVO member); //회원정보추가
    int insertAuth(AuthVO auth); //회원권한정보추가
    int update(MemberVO member);
    int updatePassword(ChangePasswordDTO changePasswordDTO);
}
