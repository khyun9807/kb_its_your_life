package org.test_armstrong.jdbc_ex_practice.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserVO {
    private String id;
    private String pw;
    private String name;e
    private String role;
}
