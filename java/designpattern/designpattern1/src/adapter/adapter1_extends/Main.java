package adapter.adapter1_extends;

public class Main {
    public static void main(String[] args) {
        print(new PrintBanner("armstrong"));
    }

    public static void print(Print p) {
        p.printStrong();
        p.printWeak();
    }
}
