package ch06.sec06.exam01;

public class Car {
    String model;
    boolean start;
    int speed;

    public static void main(String[] args) {
        Car car = new Car();
        System.out.println(car.model);
        System.out.println(car.speed);
        System.out.println(car.start);
    }
}
