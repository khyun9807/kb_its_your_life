package ch11.sec02.exam01;

public class ExceptionHandlingExample1 {
    public static void printLength(String data){
        int result=data.length();
        System.out.println("character count : "+result);
    }

    public static void main(String[] args) {
        System.out.println("start");
        try{
            printLength("This is a test");
            printLength(null);
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        System.out.println("end");
    }
}
