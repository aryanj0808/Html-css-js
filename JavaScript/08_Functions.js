let name0 = "Aryan";
let name1 = "Harry";
let name2 = "assax";
// console.log(`Happy Birthday ${name} `);
// console.log(`Happy Birthday ${name1} `);

function greeting(name) {
  console.log(`Happy Birthday ${name} `);
}

greeting(name0);
greeting(name1);
greeting(name2);

arr = ["fruits", "veges", "meals"];

arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});
