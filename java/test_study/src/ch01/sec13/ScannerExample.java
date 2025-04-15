package ch01.sec13;

import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        while(true){
            System.out.print("입력 : ");
            String data=sc.nextLine();

            if(data.equals("exit")){
                break;
            }

            System.out.println("출력 : "+data);

        }
    }
}
