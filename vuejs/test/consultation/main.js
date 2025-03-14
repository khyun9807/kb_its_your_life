// main.js
import { Customer } from './Customer.js';
import { ConsultationManager } from './ConsultationManager.js';

// 상담 매니저 인스턴스 생성
const manager = new ConsultationManager();

// 상담 등록 예시
manager.registerConsultation(new Customer('홍길동', '010-1234-5678', '고양이'));
manager.registerConsultation(new Customer('이몽룡', '123-4567-8901', '강아지')); // 잘못된 번호
manager.registerConsultation(new Customer('홍길동', '010-1234-5678', '고양이')); // 중복 등록

// 5초 후 상담 기록 자동 종료
manager.autoEndConsultation();
