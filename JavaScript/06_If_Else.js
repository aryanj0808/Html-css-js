const age = 18;

if (age == 19) {
  console.log("The age is 19");
} else {
  console.log("The age is not 19");
}

console.log(age == 35 ? "The age is 35" : "The age is not 35");

switch (age) {
  case 1:
    console.log("The age is 1");
    break;
  case 12:
    console.log("The age is 12");
    break;
  case 18:
    console.log("The age is 18");
    break;
  case 51:
    console.log("The age is 51");
    break;
  default:
    console.log("Does not exit");
    break;
}
