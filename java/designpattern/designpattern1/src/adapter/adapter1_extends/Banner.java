package adapter.adapter1_extends;
//source, provide. 이용하고자 하는 코드
//수정할 수 없는 라이브러리 코드
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
