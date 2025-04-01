import { PetPhoto } from './PetPhoto.js';
import { PetGrowthRecord } from './PetGrowthRecord.js';
import { PetAlbumManager } from './PetAlbumManager.js';

const manager = new PetAlbumManager();

// 사진 기록 등록
await manager.addRecord(
  new PetPhoto('나비', '고양이', '2023-03-10', '/images/navy_01.jpg')
);
await manager.addRecord(
  new PetPhoto('나비', '고양이', '2023-03-10', '/images/navy_01.jpg')
); // 중복 테스트

// 성장 기록 등록
await manager.addRecord(
  new PetGrowthRecord(
    '나비',
    '고양이',
    '2023-03-10',
    '처음으로 캣타워를 올랐어요!',
    '2025-03-14'
  )
);
await manager.addRecord(
  new PetGrowthRecord(
    '나비',
    '고양이',
    '2023-03-10',
    '처음으로 캣타워를 올랐어요!',
    '2025-03-14'
  )
); // 중복 테스트
