package org.test_armstrong.jdbc_ex_practice.test;

import org.junit.jupiter.api.*;
import org.test_armstrong.jdbc_ex_practice.common.JDBCUtil;

import java.sql.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CrudTest {
    Connection conn= null;

    @BeforeEach
    void init(){
        conn=JDBCUtil.getConnection();
    }

    @AfterEach
    void finish(){
        JDBCUtil.close();
        conn=null;
    }

    @Test
    @DisplayName("new value inserted")
    @Order(1)
    public void insertUser() throws SQLException {
        String sql="insert into users values(?,?,?,?)";

        try(PreparedStatement pstmt=conn.prepareStatement(sql)){
            pstmt.setString(1,"test_arm");
            pstmt.setString(2,"test_arm3");
            pstmt.setString(3,"닐");
            pstmt.setString(4,"USER");

            int count=pstmt.executeUpdate();
            Assertions.assertEquals(1, count);
        }
    }

    @Test
    @DisplayName("selects tested~!")
    @Order(2)
    public void selectUser()  throws SQLException {
        String sql="select * from users where id=?";
        try(PreparedStatement pstmt=conn.prepareStatement(sql)){
            pstmt.setString(1,"test_arm");
            try(ResultSet rs=pstmt.executeQuery()){
                if (rs.next()){
                    System.out.println(rs.getString("name"));
                }
            }
        }

        String sql2="select * from users";
        try(Statement stmt=conn.createStatement();
        ResultSet rs=stmt.executeQuery(sql2)){
            while (rs.next()){
                System.out.println(rs.getString("name"));
            }
        }
    }

    @Test
    @DisplayName("update testtt!")
    @Order(3)
    public void updateUser() throws SQLException {
        String sql="update users set name=?,role=? where id=?";
        try(PreparedStatement pstmt=conn.prepareStatement(sql)){
            pstmt.setString(3,"test_arm");
            pstmt.setString(1,"armstrong3");
            pstmt.setString(2,"SUPERMAN");

            int count=pstmt.executeUpdate();
            Assertions.assertEquals(1, count);
        }
    }


}
