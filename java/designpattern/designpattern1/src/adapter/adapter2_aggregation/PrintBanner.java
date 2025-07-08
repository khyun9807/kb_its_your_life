package adapter.adapter2_aggregation;

public class PrintBanner extends Print {

    //Banner를 상속 대신에 멤버로 소유. 위임을 위해서
    private Banner banner;

    public PrintBanner(Banner banner) {
        this.banner = banner;
    }

    public PrintBanner(String string) {
        this.banner = new Banner(string);
    }

    @Override
    public void printWeak() {
        banner.showWithParen();
    }

    @Override
    public void printString() {
        banner.showWithParen();
    }
}
