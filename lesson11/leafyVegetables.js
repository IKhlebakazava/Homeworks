const Vegetable = require('./vegetables')

class LeafyVegetable extends Vegetable {
    constructor(name, calories, isOrganic, weight, color) {
      super(name, calories, isOrganic, weight);
      this.color = color;
    }
  }

  module.exports = LeafyVegetable;