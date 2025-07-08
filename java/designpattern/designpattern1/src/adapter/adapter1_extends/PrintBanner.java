package adapter.adapter1_extends;

//주인공 어댑터 등장
//클라 인터페이스를 구현하며
//제공된 소스를 상속 받는
//고런 형식~
public class PrintBanner extends Banner implements Print {
    //alt+insert
    public PrintBanner(String string) {
        super(string);
    }


    @Override
    public void printWeak() {
        showWithParen();
    }

    @Override
    public void printStrong() {
        showWithAster();
    }
}
