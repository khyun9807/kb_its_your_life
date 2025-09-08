package org.scoula.jdbc_ex.test;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.scoula.jdbc_ex.common.JDBCUtil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionTest {

    @Test
    @DisplayName("jdbc_ex DB에 접속")
    public void testConnection()
            throws SQLException,ClassNotFoundException
    {
        Class.forName("com.mysql.cj.jdbc.Driver");
        String url = "jdbc:mysql://localhost:3306/jdbc_ex";
        String id="scoula";
        String password="1234";

        Connection conn = DriverManager.getConnection(url, id, password);

        System.out.println("db connect success");

        conn.close();
    }

    @Test
    @DisplayName("jdbc_ex 접속. 자동 닫기")
    public void testConnection2() throws SQLException{
        try(Connection conn=JDBCUtil.getConnection()){
            System.out.println("db connect success");
        }
    }
}
