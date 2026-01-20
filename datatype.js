//data type:
//two data type
//1. primitive data type
// copy --> real value
let a =12;
let b= a; //a-->12
a = a+3;
//types:stringhh,number,boolean,null,undefined,symbol,bigint

// 2.non-primitive data type(reference data type)
//copy --> give reference of parent
let temp_a=[1,2,3];
let temp_b=temp_a;
temp_b.pop(); //remove value
//types: arrays[], objects{}, function() 

//<-------primitive data type------->
//types:stringhh,number,boolean,null,undefined,symbol,bigint
//string:

//''- single quotes
//" "-double quotes
//` `-backticks
let d = "name";
d = 'username';
d = `firstnamne`;

//number:
let e =12;
e =12.25;

//boolean:
let f = true;
f = false;

//null
let g = null;

//undefined
//you don't give a value, by default value
let h;

//symbol:
//unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1==u2
let obj ={uid:1, name:"test", email:"test@test.com"};
let u3 = Symbol("uid")
obj[u3] - "001"

//bigint:
// cheak range of number, Number. Max_SAFE_INTEGER
let number = 9007199254740991;
number = number + 6;
let num2 = 900719925470991n;
num2 +3n

// <--------non-primitive data type(reference data type)----->
//types: arrays[], objects{}, function() 
let temp_array = ["name","age","mobile_no"];
let obj1 = {name:"test", age: 9, mobile_no:123456789}
function name(params) {}

//dynamic typing
let temp_d ="name";
temp_d = 123;
temp_d = {};
//javascript --> typescript

// typeof quirks
// typeof 12
// check type of variable use -> ex. typeof NaN, typeof null, 1+ "1", 1== "1", 1 === "1"
// why typeof NaN --> number
// NaN is a failed number oprations that why that type is number
// ex. "hello" 5- NaN T

// type coeration
// "5" + 1
// "5" - 1