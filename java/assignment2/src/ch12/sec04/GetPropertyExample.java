package ch12.sec04;

import java.util.Properties;
import java.util.Set;

public class GetPropertyExample {
    public static void main(String[] args) {
        System.out.println(System.getProperty("os.name"));
        System.out.println(System.getProperty("user.name"));
        System.out.println(System.getProperty("user.home"));

        System.out.println("--------------------------");

        Properties prop = System.getProperties();
        Set keys=prop.keySet();

        for(Object key:keys){
            System.out.printf("%s : %s\n",(String)key,System.getProperty((String)key));
        }
    }
}
