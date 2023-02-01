var fname = "aryan";
var sname;
sname = "jadhav";
console.log(fname, sname);
const a = 8;
// a = 10;
// We cannot change values of 'const'
const b = 5;
console.log(a + b);
{
  let name = "varun";
  console.log(name);
  // 'let' is datatype is limited for particular section
  // they are not globle varibles
}
console.log(fname);
const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);
console.warn("This is Primitive Data type");
//*******Primitive Datatype:***********//
let name1 = "aryan";
// console.log("My name is " + name);
let marks = 67;
let car = true;
let car1 = null;
let undef = undefined;
console.log("Data type of name is  " + typeof name1);
console.log("Data type of marks is  " + typeof marks);
console.log("Data type of car is  " + typeof car);
console.log("Data type of car1 is  " + typeof car1);
console.log("Data type of undef is  " + typeof undef);

console.warn("This is Reference Data type");
//Reference Datatype:
let stmarks = {
  aryan: 89,
  varun: 90,
};
console.log("Data type of stmarks is  " + typeof stmarks);

function Sum() {}
console.log("Data type of Sum is  " + typeof Sum);

let date = new Date();
console.log("Data type of Date is  " + typeof date);

/*
Data types in JS:
1) Primitive Datatype: stack, String, Numbers, Boolean, Null, 
                        Undefined, Symbol
2) Reference Datatype: Heap, Arrays, Object Literals,
                        Functions, Dates


*/
