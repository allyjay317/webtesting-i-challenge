const enhancer = require('./enhancer.js');
// test away!

const item = {
  name: 'Narsil',
  durability: 50,
  enhancement: 0
}

describe('enhancer', () => {
  describe('repair()', () => {
    it('should repair the item it is handed', () => {
      const repaired = enhancer.repair(item)
      expect(repaired.durability).toBe(100)
    });
    it('should return null when called without an item', () => {
      const repaired = enhancer.repair()
      expect(repaired).toBeFalsy()
    });
    it('should not return the same item it was given', () => {
      const repaired = enhancer.repair(item)
      expect(item).not.toBe(repaired)
    });
  });

  describe('success()', () => {
    it('should increase enhancement level by one', () => {
      const success = enhancer.success(item)
      expect(success.enhancement).toBe(1)
    });
    it('should not increase enhancement level past 20', () => {
      const test = {
        ...item,
        enhancement: 20
      }
      const success = enhancer.success(test)
      expect(success.enhancement).toBe(20)
    });
    it('should not change durability of item', () => {
      const test = {
        ...item,
        enhancement: 10
      }
      const success = enhancer.success(test)
      expect(success.durability).toBe(50)
    });
  });

  describe('fail()', () => {
    it('should not decrease the durability level past 0', () => {
      const test = {
        ...item,
        durability: 0
      }
      const failure = enhancer.fail(test)
      expect(failure.durability).toBe(0)
    })
    it('should decrease durability by 5 when enhancement level is less than 15', () => {
      const test = {
        ...item,
        enhancement: 10
      }
      const failure = enhancer.fail(test)
      expect(failure.durability).toBe(45)
    });
    it('should decrease durability by 10 when enhancement level is equal to, or more than 15', () => {
      const test = {
        ...item,
        enhancement: 15
      }
      const failure = enhancer.fail(test)
      expect(failure.durability).toBe(40)
    });
    it('should decrease enhancement level if current level is greater than 16', () => {
      const test = {
        ...item,
        enhancement: 16
      }
      const failure = enhancer.fail(test)
      expect(failure.enhancement).toBe(15)
    });
  });

});
