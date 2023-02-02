const map=new Map();

map.set(1,'Aryan');
map.set(2,'Prassana');
map.set(3,'Vaibhav');

console.log(map.get(1));
console.log(map.get(3));
console.log(map.get(2));


console.log(map.size);


map.delete(2);

console.warn(map.get(2));
console.log(map.size);

