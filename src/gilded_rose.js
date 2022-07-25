// Item class is not to be changed
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
    for (let i = 0; i < this.items.length; i++) { // can it be changed to forEach or map?
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality -= 1;
          }
        }
      } else { // name == 'Aged Brie' or name == 'Backstage passes to a TAFKAL80ETC concert'
        if (this.items[i].quality < 50) {
          this.items[i].quality += 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality += 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality += 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn -=  1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality -= 1;
              }
            }
          } else { // name === 'Backstage passes to a TAFKAL80ETC concert'
            this.items[i].quality = 0;
          }
        } else { // name === 'Aged Brie'
          if (this.items[i].quality < 50) {
            this.items[i].quality += 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}