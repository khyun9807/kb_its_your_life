package ch11.sec04;

public class MyResource implements AutoCloseable {
    private String name;

    public MyResource(String name) {
        this.name = name;
        System.out.println("MyResource : "+name+" open");
    }

    public String read1() {
        System.out.println("MyResource : " + name + " read1");
        return "100";
    }

    public String read2() {
        System.out.println("MyResource : " + name + " read2");
        return "abc";
    }

    @Override
    public void close() throws Exception {
        System.out.println("MyResource : " + name + " closed");
    }
}
