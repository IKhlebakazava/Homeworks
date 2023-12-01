// 1. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется 
// сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

function checkNumbers(string = '123456') {

    const sumFirstThree = Number(string[0]) + Number(string[1]) + Number(string[2]);
    const sumLastThree = Number(string[3]) + Number(string[4]) + Number(string[5]);
  
    return sumFirstThree === sumLastThree ? 'да' : 'нет';
 }

console.log(checkNumbers('111111'))


// 2. Дано число n=1000 (может быть любое исло). Делите его на 2 столько раз, пока результат 
// деления не станет меньше 50 (может быть любое число). Какое число получится? 
// Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), 
// и запишите его в переменную num.

function divisionBy2(number = 5795) {
    
    let n = number;
    let num = 0;

    while (n >= 50) {
        n = n / 2;
        num++;
      }

      return { result: n, iterations: num };
}

console.log(divisionBy2(1000))
  

// 3. Дан массив arr. Найдите среднее арифметическое его элементов. 
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
  
function average(arr) {

    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return sum / arr.length;
}

console.log(average([12, 15, 20, 25, 59, 79]))


// 4. Напишите функцию, которая вставит данные в массив с заданного места в массиве. 
// Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

function insertDataIntoArray(arr, data, index) {
    return [...arr.slice(0, index), ...data, ...arr.slice(index)];
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const dataToInsert = ['a', 'b', 'c'];
  const newIndex = 3;
  
  const modifiedArray = insertDataIntoArray(originalArray, dataToInsert, newIndex);
  
console.log(modifiedArray);
  
  
// 5. Напишите функцию, которая вставит данные в массив в заданные несколько мест в массиве. 
// Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
  
function insertDifferentData(arr, data, indexes) {
    indexes.forEach((index, i) => {
      arr.splice(index + i, 0, ...data[i]);
    });
  }
  
  const originalArr = [1, 2, 3, 4, 5];
  const insertData = [['a', 'b'], ['c'], ['e']];
  const indexesToInsert = [1, 5, 7];
  
  insertDifferentData(originalArr, insertData, indexesToInsert);
  
  console.log(originalArr);


// 6. Дан массив [3, 4, 1, 2, 7. 30. 50]. Отсортируйте его.
  
function sortingAscending(arr) {
    arr.sort((a, b) => a - b);
  return arr;
  }
  
function sortingDescending(arr) {
    arr.sort((a, b) => b - a);
  return arr;
  }

console.log("sort ascending: " + sortingAscending([3, 4, 1, 2, 7, 30, 50]));
console.log("sort descending: " + sortingDescending([3, 4, 1, 2, 7, 30, 50]));