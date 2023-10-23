//Сделайте 3 промиса, в каждом из которых расположена функция setTimeout 
//со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, 
//второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки первого 
//сработавшего промиса и выведите результат его работы на экран

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1) + 1);
}

function getPromiseWithRandom() {
    return new Promise((res) => {
        const timeout = getRandom(1, 5);
        setTimeout(() => {
            res(timeout)
        }, timeout * 1000)
    })
}

const prom1 = getPromiseWithRandom(1);
const prom3 = getPromiseWithRandom(2);
const prom2 = getPromiseWithRandom(3);

Promise.race([prom1, prom2, prom3])
.then(data => console.log(data))

//Сделайте функцию getNum, которая возвращает промис, который с задержкой 
//в 3 секунды выведет случайное число от 1 до 5. Создайте async функцию, которая 
//с помощью await будет дожидаться результата getNum, затем возводить его в квадрат
//и выводить на экран

function getNum(delay, min, max){
    return new Promise((res) => {
        const randomNum = getRandom(min, max);
        setTimeout(() => {
            res(randomNum)
        }, delay)
    })
}

async function waitGetNum(){
    const result = await getNum(3000, 1, 5)
    const squaredResult = result * result;
    
    console.log(squaredResult)
}

waitGetNum()


//Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды 
//выведет случайное число от 1 до 5. Используйте также функцию getNum, чобы вернуть промис,
// который с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, 
//которая с помощью await будет дожидаться результата getNum, затем будет дожидаться
// результата getNum, а затем найдет сумму полученных чисел и выводит на экран


async function sumNumbers() {
    const result1 = await getNum(3000, 1, 5);
    console.log(result1);

    const result2 = await getNum(5000, 6, 10);
    console.log(result2);

    console.log(result1 + result2);
}

sumNumbers();