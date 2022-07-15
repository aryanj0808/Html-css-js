let date = new Date();
console.log(date, typeof date);

console.warn("Changing Datatype");
//Converting datatype to string;

date = String(new Date());
console.log(date, typeof date);

//Type of Coercion
let num1 = Number("23");
let num2 = 34;
console.log(num1 + num2);
