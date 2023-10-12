let numberOfFridays13 = 0;
const today = new Date(Date.now());

for (let year = 2000; year <= today.getFullYear(); year++) {
  for (let month =0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5 && date <= today) {  
        
        numberOfFridays13++;
    }
  }
}

console.log('Number of Fridays 13: ' + numberOfFridays13);