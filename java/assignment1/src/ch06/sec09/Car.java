package ch06.sec09;

public class Car {
    String model;
    int speed;

    public Car(String model) {
        this.model = model;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    void run(){
        System.out.println(model+" is running "+getSpeed()+" km/h");
    }
}