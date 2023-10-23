//сложение различных типов(string+boolean, string+number, number+boolean)
let a = 'string';
let b = true;
let c = 15;

console.log(a+b);
console.log(a+c);
console.log(c+b);

//умножение различных типов(string * boolean, string * number, number * boolean)
a = '5';
b = false;
c = 1

console.log(a*b);
console.log(a*c);
console.log(c*b);

//деление различных типов(string/boolean, string/number, number/Boolean)
a = '10';
b = true;
c = 5;

console.log(a/b);
console.log(a/c);
console.log(c/b);

//явное преобразование(number, string, boolean)
a = '12345';
a = parseInt(a);
console.log(typeof a);


b = false;
b = b.toString();
console.log(typeof b);


c = 5;
c = Boolean(c);
console.log(typeof c);