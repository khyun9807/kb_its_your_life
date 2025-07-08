package ch12.sec08;

import java.util.Date;
import java.text.SimpleDateFormat;

public class DateExample {
    public static void main(String[] args) {
        Date date = new Date();

        SimpleDateFormat sdf=new SimpleDateFormat("yyyy/MM/dd hh:mm:ss");
        System.out.println(date);
        System.out.println(sdf.format(date));
    }
}
