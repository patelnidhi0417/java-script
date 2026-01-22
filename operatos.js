//<---------- Comparision Operators---------->
// ==  Equal to (value only, type is ignored)
// // 5 == "5"        // true
// // 5 == 6          // false

// === Strict equal (value + type)
// 5 === "5"       // false
// 5 === 5         // true

// != Not equal (value only)
// 5 != "5"        // false
// 5 != 6          // true

// !== Strict not equal (value or type)
// 5 !== "5"       // true
// 5 !== 5         // false

// > Greater than
// 10 > 5          // true
// 5 > 10          // false

// < Less than
// 5 < 10          // true
// 10 < 5          // false

// >= Greater than or equal to
// 10 >= 10        // true
// 8 >= 10         // false

// <= Less than or equal to
// 10 <= 10        // true
// 12 <= 10        // false

//<-----------assignment Operators------------>
// =
// give a value, value assignment operator
// ex. let a = 12;
// +=
// ex. a += 3; (add value into old value and save it into a)
// -=
//ex. a = 4; (subtract value into old value and save it into a)
// *=
// ex. a *= 2;
// ex. a /= 2;
// %=
// ex. a %= 2; (give remainder)

//<----------Logical Operators--------->
//&& (AND)
// ex. true && true --> true 12<13 && 14<15 --> true
// false && true --> false 12<10 && 14 <15> false
// ture && false --> false
// false && false --> false
// || (OR)
// ex. true || true --> true
// false || true --> true
// ture || false --> true
// false || false --> false
//! (NOT)
// ex. !true --> false
// !false --> true
// 112 --> false --> !!12 true

// <--------Unary Oprator---------->
// + ! typeof ++
//+
// covert string to number
// ex. +"5" --> 5
// +"Name" --> NaN
//-
// ex. -5
// !
// ex. !12 --> false
// typeof
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++ --> 12 // post ex. a++ + a => 25
// ++a --> 13 // pre ex. a++ + a 26
//--
// ex. let a = 3
// a--
// a++

// <--------Ternary Operator---------->
// ?:
// condition? true thase to print thase false thase to print thase
// 12>13? console.log("true"): console.log("false");


// typeof null --> object
// typeof [] --> object, let a = []; a instanceof Array --> true
// instanceof --> check type of reference data type // don't use
//typeof for reference data type
// typeof NaN --> number
// typeof --> premitive data type mate use karvo
// instanceof --> reference data type mate use karvo

//Example 1
let x = 10;

let y = 20;

if (x > 5 && y > 5) {
    console.log("Both are greater than 5");
}
else {
    console.log("One or both are not greater than 5");
}

//Example 2
let isAdmin = true;

let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
    console.log("Acess granted");
}
else {
    console.log("Acess Denied");
}

//Example 3
let temp = 35;

if (!(temp > 30)) {
    console.log("Hot day");
}
else {
    console.log("Pleasant day");
}

//Example 4

let a = 0;

if (a) {
    console.log("Truthy value");
}
else {
    console.log("Falsy value");
}

//Example 5 :
let score = 78;

let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";

console.log("Grade:", grade);

//Example 6 :
let points = 10;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);

//Example 7:
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);

//Example 8:
let a1 = 5;
++a1
console.log(a1);
++a1
console.log(a1);

//Example 9:
let a2 = 8;
++a2
console.log(a2);

//Example 10:
let b = 4;
let c = b++
console.log(b, c);

//Example 11:
let b1 = 4;
let c1 = ++b1
console.log(b1, c1);

//Example 12:
let m = 10;
console.log(m--)
console.log(m);

//Example 13:
let n = 5;
let result = n++ + ++n;
console.log(result);

//Example 11:
let likes = 100;
let result1=4;
function likePost()
{ 
    result1 +  likes ;
}
console.log(likePost());
console.log(likes);

//Example 12:
let count = 5;

if(count-- === 5)
    { 
        console.log("Matched"); 
    }
else
    { 
        console.log("Not Matched"); 
    }