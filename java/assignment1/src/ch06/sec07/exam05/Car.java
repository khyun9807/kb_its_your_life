package ch06.sec07.exam05;

public class Car {
    String company="hyundai";
    String model;
    String color;
    int maxSpeed;

    Car(String model){
        this.model=model;
    }

    Car(String model,String color){
        this(model);
        this.color=color;
    }

    Car(String model,String color,int maxSpeed){
        this(model,color);
        this.maxSpeed=maxSpeed;
    }
}
