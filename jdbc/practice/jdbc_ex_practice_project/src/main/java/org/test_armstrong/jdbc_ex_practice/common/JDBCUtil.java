package org.test_armstrong.jdbc_ex_practice.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class JDBCUtil {
    static Connection conn=null;

    static {
        try{
            Properties properties = new Properties();
            properties.load(JDBCUtil.class.getResourceAsStream("/application.properties"));

            String driver=properties.getProperty("driver");
            String url=properties.getProperty("url");
            String id=properties.getProperty("id");
            String password=properties.getProperty("password");

            Class.forName(driver);

            conn= DriverManager.getConnection(url,id,password);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    public static Connection getConnection(){
        return conn;
    }

    public static void close(){
        try{
            if(conn!=null){
                conn.close();
                conn=null;
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
