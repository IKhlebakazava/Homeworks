const VegetableFactory = require('./vegetableFactory')

class Salad {
    constructor() {
      this.vegetables = [];
    }

    addVegetable(vegetable) {
        this.vegetables.push(vegetable);
    }

    calculateCalories() {
        let totalCalories = 0;
        for (const vegetable of this.vegetables) {
            totalCalories += vegetable.calories;
        }
        return totalCalories;
    }

  sortVegetablesByOrganic() {
    this.vegetables.sort((a, b) => {
        return a.isOrganic === b.isOrganic ? 0 : a.isOrganic ? -1 : 1;
    });
  }

  findVegetablesInRange(minWeight, maxWeight) {
    return this.vegetables.filter((vegetable) => vegetable.weight >= minWeight
    && vegetable.weight <= maxWeight);
  }
}

const factory = new VegetableFactory();
const spinach = factory.createVegetable('Leafy', 'Spinach', 25, true, 100, 'green', null, null);
const cabbage = factory.createVegetable('Leafy', 'Cabbage', 50, false, 80, 'green', null, null);
const onion = factory.createVegetable('Root', 'Onion', 150, true, 250, null, true, null);
const carrot = factory.createVegetable('Root', 'Carrot', 300, false, 110, null, false, null);
const tomato = factory.createVegetable('Fruit', 'Tomato', 150, false, 500, null, null, false);
const cucumber = factory.createVegetable('Fruit', 'Cucumber', 200, false, 200, null, null, false);
const avocado = factory.createVegetable('Fruit', 'Avocado', 100, true, 1000, null, null, true);

const salad = new Salad();
salad.addVegetable(spinach);
salad.addVegetable(cabbage);
salad.addVegetable(onion);
salad.addVegetable(carrot);
salad.addVegetable(tomato);
salad.addVegetable(cucumber);
salad.addVegetable(avocado);


const totalCalories = salad.calculateCalories();
console.log(`Calorie content of salad: ${totalCalories} kcal`);


salad.sortVegetablesByOrganic();
console.log('Vegetables in salad, sorted by organic-inorganic:');
console.log(salad.vegetables);


const minWeight = 200;
const maxWeight = 1000;
const vegetablesInRange = salad.findVegetablesInRange(minWeight, maxWeight);
console.log(`Vegetables in salad with weight from ${minWeight} to ${maxWeight}:`);
console.log(vegetablesInRange);