package org.scoula.jdbc_ex.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class JDBCUtil {
    static Connection conn = null;

    static{
        try{
            Properties props = new Properties();
            props.load(
              JDBCUtil.class.getResourceAsStream("/application.properties")
            );

            String driver=props.getProperty("driver");
            String url=props.getProperty("url");
            String id=props.getProperty("id");
            String password=props.getProperty("password");

            Class.forName(driver);

            conn=DriverManager.getConnection(url,id,password);
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
