//  Stack : Primitive types
//  Heap : Non-Primitive types

let a = 2;
let b = a;

console.log("a :", a);
console.log("b :", b);

b = 99;

console.log("a :", a);
console.log("b :", b);


let obj1 = {
    name : "vinit",
    age : 24
}
console.log(obj1.name , " : " , obj1.age);

let obj2 = obj1;
console.log(obj2.name , " : " , obj2.age);

obj2.name = "vaibhav"
obj2.age = 29
console.log(obj1.name , " : " , obj1.age);
console.log(obj2.name , " : " , obj2.age);



