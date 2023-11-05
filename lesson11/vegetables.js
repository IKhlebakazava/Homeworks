class Vegetable {
    constructor(name, calories, isOrganic, weight) {
      this.name = name;
      this.calories = calories;
      this.isOrganic = isOrganic;
      this.weight = weight;
    }
  }

  class LeafyVegetable extends Vegetable {
    constructor(name, calories, isOrganic, weight) {
      super(name, calories, isOrganic, weight);
    }
  }

  class RootVegetable extends Vegetable {
    constructor(name, calories, isOrganic, weight) {
      super(name, calories, isOrganic, weight);
    }
  }

  class FruitVegetable extends Vegetable {
    constructor(name, calories, isOrganic, weight) {
      super(name, calories, isOrganic, weight);
    }
  }

class VegetableFactory {
  createVegetable(type, name, calories, isOrganic, weight) {
    if (type === 'Leafy') {
      return new LeafyVegetable(name, calories, isOrganic, weight);
    } 
    if (type === 'Root') {
      return new RootVegetable(name, calories, isOrganic, weight);
    } 
    if (type === 'Fruit') {
      return new FruitVegetable(name, calories, isOrganic, weight);
    }
  }
}

module.exports = {
  Vegetable,
  LeafyVegetable,
  RootVegetable,
  FruitVegetable,
  VegetableFactory,
};
