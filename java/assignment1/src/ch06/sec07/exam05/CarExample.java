package ch06.sec07.exam05;

public class CarExample {
    public static void main(String[] args) {
        Car c1=new Car("coupe","blue",200);
        Car c2=new Car("coupe","red",300);
        Car c3=new Car("coupe","yellow",400);
        Car c4=new Car("cap","green",500);

        System.out.println("c1.company "+c1.company);

        System.out.println("c2.company "+c2.company);
        System.out.println("c2.model "+c2.model);

        System.out.println("c3.company "+c3.company);
        System.out.println("c3.model "+c3.model);
        System.out.println("c3.color "+c3.color);

        System.out.println("c4.company "+c4.company);
        System.out.println("c4.model "+c4.model);
        System.out.println("c4.color "+c4.color);
        System.out.println("c4.maxSpeed "+c4.maxSpeed);
    }
}
