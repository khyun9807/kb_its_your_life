package ch11.sec03.exam01;

public class ExceptionHandlingExample {
    public static void main(String[] args) {
        String[] array={"100","100"};
        try{
            for(int i=0;i<=array.length;i++){
                int value=Integer.parseInt(array[i]);
                System.out.println("array["+i+"] : "+value);
            }
        }
        catch(NullPointerException e){
            System.out.println(e.getMessage());
        }
        catch(ArrayIndexOutOfBoundsException e){
            System.out.println(e.getMessage());
        }
        catch(NumberFormatException e){
            System.out.println(e.getMessage());
        }

    }
}
