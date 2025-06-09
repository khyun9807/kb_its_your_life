package org.test_armstrong.jdbc_ex_practice.dao;

import org.test_armstrong.jdbc_ex_practice.vo.UserVO;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public interface UserDao {
    int create(UserVO user) throws SQLException;

    List<UserVO> getAll() throws SQLException;

    Optional<UserVO> getById(String id) throws SQLException;

    int update(UserVO user) throws SQLException;

    int delete(String id) throws SQLException;
}
