const Vegetable = require('./vegetables')

class RootVegetable extends Vegetable {
    constructor(name, calories, isOrganic, weight, isSpicy) {
      super(name, calories, isOrganic, weight);
      this.isSpicy = isSpicy;
    }
  }

  module.exports = RootVegetable;