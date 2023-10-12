// a. изначальное число целое, числа разбивки - целые

let initialNumber = 100;
let numberOfParts = 3;
let total = initialNumber;
let parts = [];

if (Number.isInteger(initialNumber) && Number.isInteger(numberOfParts) && numberOfParts > 0) {
  for (let i = 1; i < numberOfParts; i++) {
    let random = Math.floor(Math.random() * (total - (numberOfParts - i)) + 1);
    parts.push(random);
    total -= random;
  }

  parts.push(total);
  //console.log(parts);
  console.log(numberOfParts + ' random numbers from the number ' + initialNumber + ': ' + parts)
} else {
  console.log('The original number and the split number must be integers and the split number must be greater than 0');
}