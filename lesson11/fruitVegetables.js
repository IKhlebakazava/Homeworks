const Vegetable = require('./vegetables')

class FruitVegetable extends Vegetable {
    constructor(name, calories, isOrganic, weight, isFruit) {
      super(name, calories, isOrganic, weight);
      this.isFruit = isFruit;
    }
  }

  module.exports = FruitVegetable;