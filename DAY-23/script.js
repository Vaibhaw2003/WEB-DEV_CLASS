/*
const greet= () => {
    console.log("Hello, welcome to Day 23!");
} 

greet(); */

/*
const add = (a, b) => {
    return a + b;
}
console.log("Sum of 5 and 3 is: " + add(5, 3));
*/

/*
const square = (num) =>{
    return num * num;
}
console.log("Square of 4 is: " + square(4));

*/

/*
---------------callback function----------

function ab(name, callback){
    console.log("my name is vaibhaw singh");
    callback();
}

function sayBye(){
    console.log("goodbye! ");
}

ab(name ,sayBye);

*/

// ----------setTimeout function----------------
/*
console .log("start");

setTimeout(() =>{
    console.log("after 2 sec callback");
},2000);
console.log("end")


setTimeout(function(){
    console.log("done ");
}, 3000);


*/

/*
const num = [ 1,2,3,4,5]
const squares = num.map(n=> n*2);
console.log(squares.length +" " + squares);
*/

/*

function square(x){
    return x*x;
}

const numb = [2,4,6];
//const squared = numb.map(square);
//console.log(squared);


const value = numb.map(square);
console.log(value);


--------------FILTER------------

const number = [1,2,3,4,5,6,7,8];
const evens = number.filter(n=> n%2==0);
console.log(evens);


const fruits = ["apple", "mango", "banana", "kiwi", "pie"];

const filtered = fruits.filter((item,index, array) =>{  
    console.log(item,index,array.length);
return item.length>3;
}
);

console.log(filtered);



const fruits = ["apple", "mango", "banana", "kiwi", "pie"];

const filtered = fruits.filter(n=>n.startsWith("p"));
console.log(filtered);

*/



