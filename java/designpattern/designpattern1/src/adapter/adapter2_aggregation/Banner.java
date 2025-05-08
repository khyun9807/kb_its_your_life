package adapter.adapter2_aggregation;
//제공된, 바꾸지 못하는, 하지만 활용해야 하는,
//클라 인터페이스와 다른
public class Banner {
    private String string;

    public Banner(String string) {
        this.string = string;
    }

    public void showWithParen() {
        System.out.println("(" + string + ")");
    }

    public void showWithAster() {
        System.out.println("*" + string + "*");
    }
}
