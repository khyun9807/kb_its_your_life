package org.scoula.app;

import org.scoula.config.ProjectConfig1;
import org.scoula.domain.Parrot;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main2 {
    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(ProjectConfig1.class);

        Parrot p1=context.getBean(Parrot.class);

        System.out.println(p1.getName());

        Parrot p2=context.getBean(Parrot.class);

        System.out.println(p2.getName());

        System.out.println(p1.toString());
        System.out.println(p2.toString());
    }
}
