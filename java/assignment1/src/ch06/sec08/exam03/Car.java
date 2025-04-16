package ch06.sec08.exam03;

public class Car {
    int gas;


    public void setGas(int gas) {
        this.gas = gas;
    }

    boolean isLeftGas(){
        boolean result=this.gas>0;
        if(result){
            System.out.println("Car gas is left ");
        }
        else{
            System.out.println("Car gas is 0 ");
        }
        return result;
    }

    void run(){
        System.out.println("Car is running");
        while(gas>=0){
            if(isLeftGas()){
                System.out.println("run left gas : "+gas);
            }
            else{
                System.out.println("stop left gas : "+gas);
            }

            gas--;
        }
        System.out.println("Car is hungry");
    }

}
