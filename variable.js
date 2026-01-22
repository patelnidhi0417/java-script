//var , let and const --- variable three
//var(ES5)
var a="temp";
var _123="hello";
var $123="hello";
b = 24;//never use

//let
let temp="abc";

//const
const temp_const="hello world!!"

//declarations and initialization
var d; //declare
var d=12; //declare and initialize for first time
//var add value into window
//var is function scoped
//var can be redeclared and reassigned
d = 24; //reassign
var d="hello"; //redeclare
// temp_const="hello";

//scope (globel,block,functional)

//use of var variable (console using) (block scope run)
var r = 23; //globel scope
{
    var r = 25; //block scope
    console.log("block scope " + r);
}
function abc() {
    var r = 30; //functional scope
    console.log("functional scope " + r);
}
abc();
console.log(r);

//use of let variable (console using) (globel scope run)
let e = 23; //globel scope
{
    let e = 25; //block scope
    console.log("block scope " + e);
}
function abc() {
    let e = 30; //functional scope
    console.log("functional scope " + e);
}
abc();
console.log(e);

//temporal dead zone(TDZ)
//TDZ not working on var
console.log(temp_b);
var temp_b = 14;//on var there is no TDZ

// console.log(j);
// let j = 17;

//hoisting imapact
//hoisting --> when your create a variable into js that brreak into two part first is declare part that go to up and there initialization part that go down
vartemp_d = 14;
//var temp_d = undefined; --> that go to up
//temp_d = 14 ; --> that go to down (means stuck into line 66)
//if you use console.log before initialization that give you undefined;
let temp_d_let = 24;
// let variable not use before initialization
//if you use console.log before initialization that give you error;
//hoisting Impace on var, let, cont
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist -->error
*/

//example 1
// console.log(nm);
// let nm = "Nidhi";

//example 2
console.log(n);
var n= "username";

//example 3
var x = 1;
{
var x= 2;
}
console.log(x);

//example 4
let f = 10;
{
let f = 20;
console.log("Inside:", f);
}
console.log("Outside:", f);

//example 5
const person = {name: "demo"};
console.log
person.name= "user";
// person = {};