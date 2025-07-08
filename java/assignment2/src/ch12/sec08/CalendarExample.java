package ch12.sec08;

import java.util.Calendar;

public class CalendarExample {
    public static void main(String[] args) {
        Calendar c=Calendar.getInstance();

        System.out.println(c.get(Calendar.YEAR)
        +" "+(c.get(Calendar.MONTH)+1)
        +" "+c.get(Calendar.DAY_OF_MONTH)
        +"\n"+c.get(Calendar.DAY_OF_WEEK)
        +" "+(c.get(Calendar.AM_PM)==1?"PM":"AM")
        +"\n"+c.get(Calendar.HOUR)
        +" "+c.get(Calendar.MINUTE)
        +" "+c.get(Calendar.SECOND));
    }
}
