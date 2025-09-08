package ch15.sec03.exam03;
import java.util.*;
public class HashSetExample {
    public static void main(String[] args) {

        Set<String> set = new HashSet<String>();

        set.add("Java");
        set.add("JDBC");
        set.add("JSP");
        set.add("Spring");
// Iterator 패턴으로 순회하며 각 요소를 출력하세요.
        Iterator<String> iterator = set.iterator();
        while(iterator.hasNext()) {
            String element = iterator.next();
            System.out.println(element);
        }
        System.out.println();
// 향상된 for 문으로 순회하며 각 요소를 출력하세요.
        for(String element : set) {
            System.out.println(element);
        }
    }
}