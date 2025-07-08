package ch06.sec07.exam03;

public class Korean {

        String nation= "korea";;
        String name;
        String ssn;

        public Korean(String name, String ssn) {

            this.name = name;
            this.ssn = ssn;
        }

    public static void main(String[] args) {
        Korean k1=new Korean("park","01212-123123");

        System.out.println(k1.nation);
        System.out.println(k1.name);
        System.out.println(k1.ssn);
    }

}
