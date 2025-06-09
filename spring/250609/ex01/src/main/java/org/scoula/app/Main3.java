package org.scoula.app;

import org.scoula.config.ProjectConfig1;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main3 {
    public static void main(String[] args) {
        var context=new AnnotationConfigApplicationContext(ProjectConfig1.class);

        String s1=context.getBean(String.class);

        String s2=context.getBean("hello", String.class);

        System.out.println(s1);
        System.out.println(s2);
    }
}
