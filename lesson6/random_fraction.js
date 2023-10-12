//б. числа разбивки дробные с 2 знаками после запятой

let initialNumber = 283; 
let numberOfParts = 9; 
let total = initialNumber;
let parts = [];

if (Number.isInteger(numberOfParts) && numberOfParts > 0) {
  for (let i = 1; i < numberOfParts; i++) {
    let random = Math.random() * (total - (numberOfParts - i));
    parts.push(random.toFixed(2)); 
    total = (total - random).toFixed(2); 
  }

  parts.push(total);

 console.log(numberOfParts + ' random numbers from the number ' + initialNumber + ': ' + parts);

} else {
  console.log('The the split number must be integer and greater than 0');
}