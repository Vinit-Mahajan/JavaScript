// const : we cannot change
// let : to solve the problem of var keyword
// var : not to use var (issues in block scope and functional scope) 

const id = 11;
let name = "vinit"
var email = "vinit@google.com"
city = "jalgaon"
let state;

// id = 123
console.log(id);

name = "abhay"
email = "abhay@google.com"
city = "amravati"

console.table([name, email, city, state])