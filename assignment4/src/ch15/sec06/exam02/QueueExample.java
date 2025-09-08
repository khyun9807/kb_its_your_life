package ch15.sec06.exam02;

import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<Message> messageQueue = new LinkedList<>();

        messageQueue.offer(new Message("sendMail","honggildong"));
        messageQueue.offer(new Message("sendSMS","sinyongkwon"));
        messageQueue.offer(new Message("sendKaKaotalk","kimjava"));

        while(!messageQueue.isEmpty()) {
            Message message = messageQueue.poll();

            switch(message.command){
                case "sendMail":
                    System.out.println("sendMail to "+message.to);
                    break;
                    case "sendSMS":
                        System.out.println("sendSMS to "+message.to);
                        break;
                        case "sendKaKaotalk":
                            System.out.println("sendKaKaotalk to "+message.to);
                            break;
            }
        }
    }
}
