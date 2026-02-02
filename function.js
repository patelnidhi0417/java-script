//function
//what --> function is a block of code that performs a specific task.
//whay ---> to avoid code repetition and to make code modular and reusable.
//how ---> function keyword, name, parameters, body return, statment

//type of functions:
//function name(params){} --> function declaration
function abc(){}
//let fnc= function(){} --> arrow function --> fat arrow function 
let func1 = () => {}

function temp_cart(){
    console.log("adding producat")
}
temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");

//parameters vs argument
//parameters are the names listed in the function defination (params --> () ni andr lakheli values)
//argument are the real values passed to the function <argument --> function call karti () ni andar lakheli values)
function fullname(name){
    console.log(`My Name is: ${name}`)
}
fullname("riddhi");
fullname("mansi");
fullname("jinal");


function fullname1(name,surname){
    console.log(`Name:${name}  surname: ${surname}`)
}
fullname1("riddhi","jikadra");
fullname1("mansi","maradiya");
fullname1("jinal","gohil");

function cart2 (producat, price) { // product params
console.log(`Adding ${producat} at ${price}`)
}
cart2("Laptop", 50000); // laptop -- args
cart2("Mac Book", 250000);
cart2("S25 ultra", 69000);

//convert into arrow function
//let fuc = () => {}
let fullname2 =(name,surname) => {
    console.log(`arrow function -- Name:${name}  surname: ${surname}`);
}
fullname2(" mansi","maradiya");

//convert into function expression
//let fuc= function(){}
const fullname3 =function fullname1(name,surname){
    console.log(`function expression -- Name:${name}  surname: ${surname}`)
}
fullname3("jinal","gohil");

//defualt,rest paremeters in function
//defualt
function abcd(b=10,price=0){
    console.log(b,price)
}
abcd(15);
//use case -- fees / flipkart ->platform fee

//reset 
//jyare function ma multiple argument pass krva to vafhare params banava pade chhe mate te na karvu pade to mate rest parameter use kariye chhiye (rest ---> ... jo function na parameter ni andar lakhvama aave chee)

function def(a,b,c,d,e,f,g,){
    console.log(a,b,c,d,e,f,g)
}
def(1,2,3,4,5,6,7);

function def1(...name){
    console.log(name);
}
def1("mansi","jinal","riddhi");

function def1(a,...name){
    console.log(a,name);
}
def1("mansi","jinal","riddhi");
//early return -->function mathi n=bhar nikalva mate
function score1 (value) {
if (value > 90) return "Value is less than 90";
else if (value < 80) return "Value is less than 80";
else if (value < 70) return "Value is less than 70";
else if (value < 60) return "Value is less than 60";
else return "Value is more than 90";
}
let result = score1(80);
console.log(result);
//first class function and their types:
//function can be treated as variables
//let temp_a = function(){} -first class function
const cart3 = function (producat, price) { // product params
console.log(`Adding ${producat} at ${price}`);
};

cart3("function expression -s25",45000);
//function can be passed as arguments to other functions
function temp_b(fnc){
fnc();
}
temp_b(function fnc2(){
    console.log("First Class Function");
});

//function can be return from other functions
function abcd(){
    return function(){
        console.log("function return other function")
    };
}
//abcd();
abcd()();//call a function that return other function

//higher order function(HOF)
//function that taker another function as an an argument or returns a function as a result (eva function je return kare ek function athva acept kare ek function params ma)
//function abcd(val){(val);} --> abcd(function(){console.log("hello")})
//function abcd(val){} --> higher order function 
function abcd(val) {
    val(); // call the function passed as argument
}
abcd(function() {
    console.log("Hello from argument function");
});
//function abcd(){return function(){}}}abcd()()--> higher order
function abcd() {
    return function() {
        console.log("Hello from returned function");
    };
}
abcd()();

//pure vs impure function
//pure function ---> function je same input par same output aapse ane koi bahar ne modify na kare (pure function ---> je function bahar na state ne modify na kare) 
let a = 10;
function abcd_pure() {
    console.log("hello");
}

// impure function ---> function je same input par different output aapse athava bahar na state ne modify kare (impure function --> je function bhara na state ne modify kare)
function abcd_impure() {
    a++;
    console.log(a);
}

//closure function
//function je potana parent function na varaables ne access kari shake(return thava valo function use karshe parent function na koi variable) (function within function)
function outer() {
    let count = 0;
    function inner(){
        count++;//accessing outre(parent) function variable
        console.log(count);
    }
    return inner;
}
let fnc = outer();
fnc();

//lexical scope --> nested function can access variables declared in their outer scope
function outer1() {
    let outer_var ="outer function variable";
    function inner1() {
        let inner_var = "inner function variable";
        console.log(outer_var);//outer function call
        function most_inner(){
            console.log(inner_var);
            console.log(outer_var);
            let most_inner_var = "most_inner variable function";
            function abc() {
                console.log(most_inner_var);
                console.log(inner_var);
                console.log(outer_var);
            }
            abc();
        }
        most_inner();
    }
    inner1();
}
outer1();

//example lexical scope
function mansi() {
    let mansi_var = "mansi";
    function riddhi() {
        let riddhi_var = "riddhi";
        console.log(mansi_var);
        function jinal() {
            console.log(riddhi_var);
        }
        jinal();
    }
    riddhi();
}
mansi();

//IIFE - Immediately Invoked function expression
(function () {}) ();//function je declare karata j call thai jaye

(function () {
    console.log("this is IIFE function")
}())

//hoisting function
abcde();

function abcde() {
    console.log("this is hoisting function");
}

// hoistedfunction1();
// let hoistedfunction1 = function () {
//     console.log("hoisted function express called");
// }

// hoistedfunction2();
// let hoistedfunction2 = () => {
//     console.log("hoisted arrow function called");
// }

//ex 3
let add = (a, b) => {
    console.log(a,b);
}
add(14,17);

//ex 7
function number(...numbers){
    console.log(numbers);
}
number(1, 2, 3, 4, 5)

//ex 8
function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++)
    {
        total += scores[i];
    }
    return total;
}
function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val)
    {
        total = total + val;
    });
    return total;
}
calculateTotal(10, 20 ,30 ,40 ,50)
let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)

//ex 9
checkAge(17);
function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}

// Example 12
let a1 = function () {
  console.log("Hello");
};
a1();

// Example 13
function abcd(val) {
  val();
}

abcd(function () {
  console.log("Hello");
});

// Example 15
[1, 2, 3].map(function (x) {
  return x * 2;
});

// Example 16 (Impure Function)
let total = 5;

function num(num) {
  total += num;
}

num(3);

// Example 17 (Pure Function)
function numPure(total, num) {
  return total + num;
}

numPure(5, 3);

// Example 18 (Closure)
function outer1() {
  let x = 10;
  return function () {
    console.log(x);
  };
}

// Example 19 (Closure Counter)
function outer2() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer2();
counter();
counter();

// Example 20 (IIFE)
(function () {
  console.log("Initialized");
})();

// Example 21 (IIFE with data privacy)
let fun = (function () {
  let score = 0;

  return {
    getScore: function () {
      console.log(score);
    },
    setScore: function (val) {
      score = val;
    }
  };
})();

fun.getScore();
fun.setScore(10);
fun.getScore();

// Example 22 (Function Expression Hoisting Error)
// temp_var(); // TypeError

var temp_var = function () {
  console.log("Hello");
};

// Example 23 (Function Declaration Hoisting)
temp_var2();

function temp_var2() {
  console.log("Hello");
}

