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
    this.items.map((item) =>  {
      switch(item.name) {
        case "Aged Brie":
          item = this.#changeQualityAgedBrie(item);
          item.sellIn -=  1;
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          item = this.#changeQualityBackstagePasses(item);
          item.sellIn -=  1;
          break;
        case "Sulfuras, Hand of Ragnaros":
          break;
        case "Conjured Mana Cake":
          item = this.#changeConjuredItem(item);
          break;
        default:
          item = this.#changeDefaultItem(item);
          break;
      }
    })
    return this.items;
  }

  // private functions
  #changeQualityAgedBrie(item) {
    item.quality += 1;
    if (item.sellIn <= 0) {item.quality += 1}
    if (item.quality > 50) { item.quality = 50;}
    return item;
  }
  #changeQualityBackstagePasses(item) {
    item.quality += 1;
    if (item.sellIn < 11) { // 1 extra if sellIn < 11
      item.quality += 1;
    }
    if (item.sellIn < 6) { // 1 more extra if sellIn < 6
      item.quality += 1;
    }
    if (item.quality > 50) {item.quality = 50; } // set maximum quality to be 50
    if (item.sellIn < 0) {item.quality = 0; } // if sellIn < 0, quality = 0
    return item;
  }
  #changeConjuredItem(item) {
    item.quality -= 2
    if (item.sellIn < 0) { item.quality -= 2; }
    if (item.quality < 0) { item.quality = 0; }
    item.sellIn -=  1;
    return item;
  }
  #changeDefaultItem(item) {
    item.quality -= 1
    if (item.sellIn < 0) { item.quality -= 1; }
    if (item.quality < 0) { item.quality = 0; }
    item.sellIn -=  1;
    return item
  }
}

module.exports = {
  Item,
  Shop
}