// Can't touch this! 👺  💣
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}


class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() { // needs substantial refactoring
    this.items.forEach((item) =>  {
      if (item.name != "Aged Brie" && item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality -= 1;
          }
        }
      } 
      if (item.name == "Aged Brie") { // name == 'Aged Brie' or name == 'Backstage passes to a TAFKAL80ETC concert'
        if (item.quality < 50) {
          item.quality += 1;
        }
      }
      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        item.quality += 1;
        if (item.sellIn < 11) {
          item.quality += 1;
          if (item.quality > 50) { item.quality = 50 }
        }
        if (item.sellIn < 6) {
          item.quality += 1;
          if (item.quality > 50) {item.quality = 50}
        }
      }
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.sellIn -=  1;
      }
      if (item.sellIn < 0) {
        if (item.name === "Aged Brie") {
          if (item.quality < 50) {
            item.quality += 1;
          }
        } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          item.quality = 0;
        } else {
          if (item.quality > 0) {
            if (item.name != "Sulfuras, Hand of Ragnaros") {
              item.quality -= 1;
            }
          }
        }
      }
    })
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}