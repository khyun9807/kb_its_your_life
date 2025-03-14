class Item {
  constructor(name, type, stock, alreadyWarned) {
    this.name = name;
    this.type = type;
    this.stock = stock;
    this.alreadyWarned = alreadyWarned;
  }
}

class InventoryManager {
  items = [];
  addItem(itemobj) {
    this.items.push(itemobj);
    console.log(
      `[add] ${itemobj.type} - ${itemobj.name} (stock: ${itemobj.stock})`
    );
  }
  updateStock(itemname, quant) {
    if (quant < 0) {
      console.log(`[update error] minus stock`);
      return;
    } else {
      let item;
      for (let i = 0; i < this.items.length; i++) {
        item = this.items[i];
        if (item.name == itemname) {
          break;
        }
      }

      item.stock = quant;
      console.log(`[update] ${item.name} stock: ${quant}`);

      if (quant < 5) {
        if (!item.alreadyWarned) {
          item.alreadyWarned = true;
          console.log(`[out of stock warning] ${item.name} stock: less than 5`);
        }
      } else {
        item.alreadyWarned = false;
      }

      item.alreadyWarned = false;
    }
  }
  _checkStock() {
    let prom = new Promise((resolve, reject) => {
      let timerID = setInterval(() => {
        for (let i = 0; i < this.items.length; i++) {
          let item = this.items[i];

          if (item.stock < 5) {
            if (!item.alreadyWarned) {
              item.alreadyWarned = true;
              console.log(`[auto warning] ${item.name}: stock less than 5`);
            }
          } else {
            item.alreadyWarned = false;
          }
        }
      }, 1000);

      setTimeout(() => {
        clearInterval(timerID);
        console.log('[stock check finish]');
      }, 5000);
    });

    return prom;
  }
  async checkStock() {
    await this._checkStock();
  }
}

const inventory = new InventoryManager();

// 아이템 등록
const item1 = new Item('고급 고양이 사료', '사료', 10);
inventory.addItem(item1);

// 재고 업데이트
inventory.updateStock('고급 고양이 사료', 4); // 5개 미만 → 경고 발생
inventory.updateStock('고급 고양이 사료', -1); // 음수 입력 → 오류 발생

// 재고 상태 검사 시작 (5초 후 종료)
inventory.checkStock();
