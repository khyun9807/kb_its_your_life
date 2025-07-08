package ch11.sec04;

public class TryWithResourceExample {
    public static void main(String[] args) {

        MyResource res = new MyResource("A");
        MyResource res1 = new MyResource("B");
        MyResource res2 = new MyResource("C");
        MyResource res3 = new MyResource("D");

        try(res;res1;res2;res3){
            String data = res.read1();
            int value = Integer.parseInt(data);

            System.out.println();

            String data3 = res3.read2();
            int value3 = Integer.parseInt(data3);
            System.out.println();

            String data1 = res1.read1();
            String data2 = res2.read1();
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }

    }
}
