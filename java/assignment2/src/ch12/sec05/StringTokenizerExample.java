package ch12.sec05;

import java.util.StringTokenizer;

public class StringTokenizerExample {
    public static void main(String[] args) {
        String data1="honggildong&leesoohong,parkyeonsoo";

        String data2="honggildong/leesoohong/parkyeonsoo";

        StringTokenizer st=new StringTokenizer(data2,"/");

        String[] arr=data1.split("&|,");

        for(String token:arr){
            System.out.println(token);
        }
        System.out.println();

        while(st.hasMoreTokens()){
            System.out.println(st.nextToken());
        }

    }
}
