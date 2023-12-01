const RootVegetable = require('./rootVegetables')
const LeafyVegetable = require('./leafyVegetables')
const FruitVegetable = require('./fruitVegetables')

class VegetableFactory {
    createVegetable(type, name, calories, isOrganic, weight, color, isSpicy,isFruit) {
      if (type === 'Leafy') {
        return new LeafyVegetable(name, calories, isOrganic, weight, color);
      } 
      if (type === 'Root') {
        return new RootVegetable(name, calories, isOrganic, weight, isSpicy);
      } 
      if (type === 'Fruit') {
        return new FruitVegetable(name, calories, isOrganic, weight, isFruit);
      }
    }
  }

  module.exports = VegetableFactory