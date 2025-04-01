import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getMembersRoutine() {
  let targetPath = path.join(__dirname, 'logs', 'memberRoutine.txt');
  let data = fs.readFileSync(targetPath, 'utf-8');

  let ret = [];

  let members = data.split('\n');
  for (let member of members) {
    let mem_data = member.split(':');
    if (mem_data.length < 2) continue;

    let mem_name = mem_data[0].trim();
    let mem_part = mem_data[1].trim();

    ret.push({ name: mem_name, part: mem_part });
  }

  return ret;
}

function getRecommend(memObj) {
  if (memObj.part == '상체') {
    switch (parseInt(Math.random() * 10) % 3) {
      case 0:
        return 'bench 3set';
        break;
      case 1:
        return 'shoulder press 3set';
        break;
      case 2:
        return 'push ups 50';
        break;
    }
  } else {
    switch (parseInt(Math.random() * 10) % 3) {
      case 0:
        return 'squat 5set';
        break;
      case 1:
        return 'lunge 3set';
        break;
      case 2:
        return 'leg press 4set';
        break;
    }
  }
}

function isRecommendDup(memObj) {
  let targetPath = path.join(__dirname, 'logs', 'routine.txt');
  if (fs.existsSync(targetPath)) {
    let data = fs.readFileSync(targetPath, 'utf-8');
    if (data.includes(memObj.name)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function printRecommend(memObj, recommend) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(`${memObj.name}, rec:${recommend}`);
      res();
    }, 1000);
  });
}

function saveRecommend(memObj, recommend) {
  let data = `${memObj.name}(${memObj.part}): ${recommend}\n`;
  let targetPath = path.join(__dirname, 'logs', 'routine.txt');
  if (!fs.existsSync(targetPath)) {
    fs.writeFileSync(targetPath, data, 'utf-8');
  } else {
    fs.appendFileSync(targetPath, data, 'utf-8');
  }
}

async function run() {
  let members = getMembersRoutine();
  console.log(members);
  for (let member of members) {
    console.log('recommending' + member.name);

    if (isRecommendDup(member)) {
      console.log('already recommended', member.name);
    } else {
      let rec = getRecommend(member);
      await printRecommend(member, rec);
      saveRecommend(member, rec);
      console.log(member.name, 'recommend save: ', rec);
    }
  }
}

run();
