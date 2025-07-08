package ch12.sec04;

public class MeasureRunTimeExample {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        long sum=0;
        for(int i=1;i<=1000000;i++) {
            sum+=i;
        }
        long endTime = System.nanoTime();
        long totalTime = endTime - startTime;
        System.out.println("sum: " + sum);
        System.out.println("totalTime: " + totalTime);
    }
}
