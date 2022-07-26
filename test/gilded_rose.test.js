const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  describe("Existing Items after 1 day", () => {
    it("calculates Aged Brie correctly", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(1);
    });
    it("calculates +5 Dexterity Vest correctly", () => {
      const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
    });
    it("calculates Elixir of the Mongoose correctly", () => {
      const gildedRose = new Shop([new Item("Elixir of the Mongoose", 5, 7)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(6);
    });
    it("calculates Sulfuras, Hand of Ragnaros (case 1) correctly", () => {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);
    });
    it("calculates Sulfuras, Hand of Ragnaros (case 2) correctly", () => {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(80);
    });
    it("calculates Backstage passes to a TAFKAL80ETC concert (case 1) correctly", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21);
    });
    it("calculates Backstage passes to a TAFKAL80ETC concert (case 2) correctly", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(50);
    });
    it("calculates Backstage passes to a TAFKAL80ETC concert (case 3) correctly", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(50);
    });
  });
});