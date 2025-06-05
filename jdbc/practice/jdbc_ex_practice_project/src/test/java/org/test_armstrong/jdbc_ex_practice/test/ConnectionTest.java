package org.test_armstrong.jdbc_ex_practice.test;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.test_armstrong.jdbc_ex_practice.common.JDBCUtil;

import java.sql.Connection;
import java.sql.SQLException;

public class ConnectionTest {

    @Test
    @DisplayName("jdbc_ex_practice에 접속. jdbcutil 이용")
    public void testConnection() throws SQLException {
        try(Connection conn= JDBCUtil.getConnection()){

        }
    }

}
