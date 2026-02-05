<h1>Example of var, let and const</h1>
<h2>1. var</h2>
<p><code>var</code> keyword JavaScript ma old way chhe variable declare karvano.</p>
<ul>
  <li><code>var</code> can be <b>redeclared</b> and <b>reassigned</b></li>
  <li><code>var</code> is <b>function scoped</b></li>
  <li>Block scope follow nathi karto</li>
</ul>
<pre>
var a = "temp";
var _123 = "Hello";
var $123 = "hello";
b = 24; // never recommended (auto global)
</pre>
<h2>2. let</h2>
<p><code>let</code> ES6 ma introduce thayu chhe.</p>
<ul>
  <li><code>let</code> can be <b>reassigned</b> but <b>not redeclared</b></li>
  <li><code>let</code> is <b>block scoped</b></li>
</ul>
<pre>
let temp = "abc";
</pre>
<h2>3. const</h2>
<p><code>const</code> variable ni value change kari sakay nahi.</p>
<ul>
  <li>Must be initialized at declaration time</li>
  <li>Block scoped</li>
</ul>
<pre>
const temp_const = "Hello World!!";
</pre>
<h2>Declaration and Initialization</h2>
<pre>
var d;        // declaration
var d = 12;   // declaration + initialization
d = 24;       // reassigned
d = "hello";  // reassigned again
</pre>
<h2>Scope in JavaScript</h2>
<p>JavaScript ma mainly 3 scope hoy chhe:</p>
<ul>
  <li>Global Scope</li>
  <li>Block Scope</li>
  <li>Function Scope</li>
</ul>
<h3>var Scope Example</h3>
<pre>
var f = 23;
{
  var f = 43;
  console.log(f); // 43
}
console.log(f); // 43
</pre>
<h3>let Scope Example</h3>
<pre>
let e = 23;
{
  let e = 43;
  console.log(e); // 43
}
console.log(e); // 23
</pre>
<h2>Temporal Dead Zone (TDZ)</h2>
<p>
  TDZ <code>let</code> ane <code>const</code> par lagu pade chhe,
  <code>var</code> par nahi.
</p>
<pre>
console.log(temp_b);
var temp_b = 24; // undefined (no TDZ)
</pre>
<pre>
// console.log(j);
// let j = 12; // ReferenceError (TDZ)
</pre>
<h2>Hoisting</h2>
<p>
  Hoisting ma declaration upar jai chhe pan initialization niche j rahe chhe.
</p>
<ul>
  <li><b>var</b> → hoisted as <code>undefined</code></li>
  <li><b>let</b> → hoisted but TDZ error</li>
  <li><b>const</b> → hoisted but TDZ error</li>
</ul>
<pre>
var temp_d = 12;
</pre>
<div>
  <h3>Example 1:</h3>
  <p>console.log(nm);</p>
  <p>let nm = "name";</p>
  <p>Answer or Error:Error </p>
  <p>Why:we print console before intilization & use let keyword for declare variable .</p>
</div>
<div>
  <h3>Example 2:</h3>
  <p>console.log(b);</p>
  <p>var b= "username"; </p>
  <p>Answer or Error:Answer(undefinded)</p>
  <p>Why:When we print console before intilization & use var keyword for declare variable .</p>
</div>
<div>
  <h3>Example 3:</h3>
  <p>var x = 1 </p>
  <p>{
    var x = 2
    }
  </p>
  <p>consol.log(x) ;</p>
  <p>Answer or Error:Answer(2)</p>
  <p>Why:When we use var than in console print block scope.</p>
</div>
<h3>Example 4:</h3>
<p>let a 10; </p>
<p>{
  let a = 20;
  console.log("Inside:", a);</p>
}<p>
  console.log("Outside:", a);
</p>
<p>Answer or Error:Answer(Inside: 20 Outside: 10) </p>
<p>Why:In console first print block scope after print global scope. </p>
</div>
<h1>JavaScript Data Types</h1>
<p>JavaScript ma mainly <b>2 types na data types</b> hoy chhe:</p>
<ul>
  <li><b>Primitive Data Types</b></li>
  <li><b>Non-Primitive (Reference) Data Types</b></li>
</ul>
<hr>
<h2>1. Primitive Data Types</h2>
<p>
  Primitive data types ma <b>actual value copy</b> thay chhe.
  Ek variable change karva thi bijo variable effect thato nathi.
</p>
<pre><code>
let a = 12;
let b = a;   // copy value
a = a + 3;
</code></pre>
<h3>Primitive Data Types List</h3>
<ul>
  <li>String</li>
  <li>Number</li>
  <li>Boolean</li>
  <li>Null</li>
  <li>Undefined</li>
  <li>Symbol</li>
  <li>BigInt</li>
</ul>
<h3>String</h3>
<p>String 3 rite lakhay chhe:</p>
<pre><code>
let d = "name";
d = 'username';
d = `firstname`;
</code></pre>
<h3>Number</h3>
<pre><code>
let e = 12;
e = 12.25;
</code></pre>
<h3>Boolean</h3>
<pre><code>
let f = true;
f = false;
</code></pre>
<h3>Null</h3>
<p>Null ma value manually aapvi pade chhe.</p>
<pre><code>
let g = null;
</code></pre>
<h3>Undefined</h3>
<p>Undefined default value hoy chhe, value assign na kari hoy.</p>
<pre><code>
let h;
</code></pre>
<h3>Symbol</h3>
<p>Symbol unique ane immutable value hoy chhe.</p>
<pre><code>
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// u1 === u2 -> false

let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = Symbol("uid");
obj[u3] = "101";
</code></pre>
<h3>BigInt</h3>
<p>BigInt large numbers handle karva mate use thay chhe.</p>
<pre><code>
let number = 9007199254740991;
number = number + 6;

let num2 = 900719925470991n;
num2 + 3n;
</code></pre>
<hr>
<h2>2. Non-Primitive (Reference) Data Types</h2>
<p>
  Non-primitive data types ma <b>reference copy</b> thay chhe.
  Ek variable change karva thi bijo variable par pan effect pade chhe.
</p>
<pre><code>
let temp_a = [1, 2, 3];
let temp_b = temp_a;
temp_b.pop(); // original array pan change thase
</code></pre>
<h3>Non-Primitive Types List</h3>
<ul>
  <li>Array</li>
  <li>Object</li>
  <li>Function</li>
</ul>
<h3>Array</h3>
<pre><code>
let temp_array = ["name", "age", "phone_number"];
</code></pre>
<h3>Object</h3>
<pre><code>
let obj1 = {
  name: "test",
  age: 9,
  phone_number: 558998554
};
</code></pre>
<h3>Function</h3>
<pre><code>
function name(params) {
  // function body
}
</code></pre>
<hr>
<h2>Dynamic Typing in JavaScript</h2>
<p>
  JavaScript <b>dynamically typed language</b> chhe.
  Etle ek variable alag-alag type ni value hold kari shake chhe.
</p>
<pre><code>
let temp_d = "name";   // string
temp_d = 123;         // number
temp_d = {};          // object
</code></pre>
<p>
  Aa reason thi JavaScript flexible chhe, pan large projects mate
  <b>TypeScript</b> use karvama aave chhe.
</p>
<pre><code>
// JavaScript --> TypeScript
</code></pre>
<hr>
<h2>typeof Operator</h2>
<p>
  Variable no type check karva mate <b>typeof</b> operator use thay chhe.
</p>
<pre><code>
typeof 12;        // "number"
typeof "hello";   // "string"
typeof true;      // "boolean"
</code></pre>
<h3>typeof Quirks (Confusing Cases)</h3>
<pre><code>
typeof NaN;       // "number"
typeof null;      // "object"  (JavaScript bug)
</code></pre>
<h4>Why typeof NaN is "number"?</h4>
<p>
  <b>NaN</b> no matlab chhe <i>Not a Number</i>,
  pan te ek <b>failed number operation</b> chhe,
  etle JavaScript eni type "number" j rakhe chhe.
</p>
<pre><code>
"hello" - 5;   // NaN
</code></pre>
<hr>
<h2>Type Coerction in JavaScript</h2>
<p>
  JavaScript automatic type conversion kare chhe,
  jene <b>Type Coerction</b> kahe chhe.
</p>
<h3>Examples</h3>
<pre><code>
"5" + 1;   // "51"  (string concatenation)
"5" - 1;   // 4     (string converted to number)
</code></pre>
<hr>
<h2>Comparison Operators</h2>
<h3>Loose Equality (==)</h3>
<p>
  Type convert kari ne comparison kare chhe.
</p>
<pre><code>
1 == "1";   // true
</code></pre>
<h3>Strict Equality (===)</h3>
<p>
  Value ane type banne same hoy to j true return kare chhe.
</p>
<pre><code>
1 === "1";  // false
</code></pre>
<hr>
<p><b>Conclusion:</b></p>
<ul>
  <li>JavaScript dynamically typed chhe</li>
  <li><code>typeof</code> ma thoda quirks chhe</li>
  <li>Type coercion samajhvu important chhe</li>
  <li><code>===</code> always preferred over <code>==</code></li>
</ul>
<h1>JavaScript Operators</h1>
<p>This README covers basic JavaScript operators with examples.</p>
<hr>
<h2>Comparison Operators</h2>
<ul>
  <li><strong>==</strong> : Equal to (value only, type is ignored)</li>
  <li><strong>===</strong> : Strict equal (value + type)</li>
  <li><strong>!=</strong> : Not equal (value only)</li>
  <li><strong>!==</strong> : Strict not equal (value or type)</li>
  <li><strong>&gt;</strong> : Greater than</li>
  <li><strong>&lt;</strong> : Less than</li>
  <li><strong>&gt;=</strong> : Greater than or equal to</li>
  <li><strong>&lt;=</strong> : Less than or equal to</li>
</ul>
<pre><code>
5 == "5"        // true
5 == 6          // false

5 === "5"       // false
5 === 5         // true

5 != "5"        // false
5 != 6          // true

5 !== "5"       // true
5 !== 5         // false

10 > 5          // true
5 > 10          // false

5 < 10          // true
10 < 5          // false

10 >= 10        // true
8 >= 10         // false

10 <= 10        // true
12 <= 10        // false
</code></pre>
<hr>
<h2>Assignment Operators</h2>
<ul>
  <li><strong>=</strong> : Value assignment operator</li>
  <li><strong>+=</strong> : Add value to existing value</li>
  <li><strong>-=</strong> : Subtract value from existing value</li>
  <li><strong>*=</strong> : Multiply and assign</li>
  <li><strong>/=</strong> : Divide and assign</li>
  <li><strong>%=</strong> : Gives remainder</li>
</ul>
<pre><code>
let a = 12;
a += 3;

a -= 4;
a *= 2;
a /= 2;
a %= 2;
</code></pre>
<hr>
<h2>Logical Operators</h2>
<ul>
  <li><strong>&&</strong> : AND</li>
  <li><strong>||</strong> : OR</li>
  <li><strong>!</strong> : NOT</li>
</ul>
<pre><code>
true && true     // true
false && true   // false

true || true    // true
false || true   // true
false || false  // false

!true           // false
!false          // true

!!12            // true
</code></pre>
<hr>
<h2>Unary Operators</h2>
<ul>
  <li><strong>+</strong> : Convert string to number</li>
  <li><strong>-</strong> : Negative value</li>
  <li><strong>!</strong> : Logical NOT</li>
  <li><strong>typeof</strong> : Check data type</li>
  <li><strong>++</strong> : Increment</li>
  <li><strong>--</strong> : Decrement</li>
</ul>
<pre><code>
+"5"        // 5
+"Name"     // NaN

-5

!12         // false

typeof "name"   // string

let a = 12;
a++;        // post increment
++a;        // pre increment

let b = 3;
b--;
b++;
</code></pre>
<hr>
<hr>
<h2>Ternary Operator</h2>
<p>
  Ternary operator is a short form of <strong>if-else</strong>.
  It works on a condition and returns one of two values.
</p>
<ul>
  <li><strong>Syntax :</strong> condition ? trueExpression : falseExpression</li>
</ul>
<pre><code>
12 > 13 ? console.log("true") : console.log("false");
</code></pre>
<p>
  If the condition is <strong>true</strong>, first statement will execute.<br>
  If the condition is <strong>false</strong>, second statement will execute.
</p>
<hr>
<h2>Type Checking in JavaScript</h2>
<h3>typeof Operator</h3>
<ul>
  <li><strong>typeof null</strong> returns <code>object</code> (JavaScript bug)</li>
  <li><strong>typeof []</strong> returns <code>object</code></li>
  <li><strong>typeof NaN</strong> returns <code>number</code></li>
  <li><strong>typeof</strong> is mainly used for <strong>primitive data types</strong></li>
</ul>
<pre><code>
typeof null       // "object"
typeof []         // "object"
typeof NaN        // "number"
typeof "Hello"    // "string"
</code></pre>
<hr>
<h3>instanceof Operator</h3>
<p>
  <strong>instanceof</strong> is used to check the type of <strong>reference data types</strong>.
</p>
<ul>
  <li>Checks whether an object belongs to a constructor</li>
  <li>Mainly used for arrays, objects, classes</li>
</ul>
<pre><code>
let a = [];
a instanceof Array   // true
a instanceof Object  // true
</code></pre>
<p>
  <strong>Note:</strong><br>
  Use <code>typeof</code> for <strong>primitive data types</strong><br>
  Use <code>instanceof</code> for <strong>reference data types</strong>
</p>
<div>
  <h3>Example 1</h3>
  <p>let x = 10;</p>
  <p>let y = 20;</p>
  <p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
    }else{
    console.log("One or both are not greater than 5");
    }</p>
  <p>Answer: Both are greater than 5</p>
  <p>Why: x and y both are greater than 5 and && operator needs both conditions true.</p>
</div>
<div>
  <h3>Example 2</h3>
  <p>let isAdmin = true;</p>
  <p>let isLoggedIn = false;</p>
  <p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
    }else{
    console.log("Acess Denied");
    }</p>
  <p>Answer: Access granted</p>
  <p>Why: OR (||) operator executes if any one condition is true.</p>
</div>
<div>
  <h3>Example 3</h3>
  <p>let temp = 35;</p>
  <p>if(!(temp > 30)){
    console.log("Hot day");
    }else{
    console.log("Pleasant day");
    }</p>
  <p>Answer: Pleasant day</p>
  <p>Why: temp > 30 is true, NOT operator makes it false so else runs.</p>
</div>
<div>
  <h3>Example 4</h3>
  <p>let a = 0;</p>
  <p>if(a){
    console.log("Truthy value");
    }else{
    console.log("Falsy value");
    }</p>
  <p>Answer: Falsy value</p>
  <p>Why: 0 is a falsy value in JavaScript.</p>
</div>
<div>
  <h3>Example 5</h3>
  <p>let score = 78;</p>
  <p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
  <p>console.log("Grade:", grade);</p>
  <p>Answer: Grade C</p>
  <p>Why: Score is greater than or equal to 70.</p>
</div>
<div>
  <h3>Example 6</h3>
  <p>let points = 120;</p>
  <p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
  <p>console.log("Status:", status);</p>
  <p>Answer: Status Gold</p>
  <p>Why: Points are greater than or equal to 100.</p>
</div>
<div>
  <h3>Example 7</h3>
  <p>let loggedIn = true;</p>
  <p>let hasToken = false;</p>
  <p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
  <p>console.log("access:", access);</p>
  <p>Answer: Deny</p>
  <p>Why: AND (&&) operator requires both conditions true.</p>
</div>
<div>
  <h3>Example 8</h3>
  <p>let a = 5;</p>
  <p>a++</p>
  <p>console.log(a);</p>
  <p>Answer: 6</p>
  <p>Why: Post-increment increases value by 1.</p>
</div>
<div>
  <h3>Example 9</h3>
  <p>let a = 8;</p>
  <p>++a</p>
  <p>console.log(a);</p>
  <p>Answer: 9</p>
  <p>Why: Pre-increment increases value before execution.</p>
</div>
<div>
  <h3>Example 10</h3>
  <p>let b = 4;</p>
  <p>let c = b++</p>
  <p>console.log(b, c);</p>
  <p>Answer: b = 5 , c = 4</p>
  <p>Why: Post-increment assigns old value first.</p>
</div>
<div>
  <h3>Example 11</h3>
  <p>let b = 4;</p>
  <p>let c = ++b</p>
  <p>console.log(b, c);</p>
  <p>Answer: b = 5 , c = 5</p>
  <p>Why: Pre-increment happens before assignment.</p>
</div>
<div>
  <h3>Example 12</h3>
  <p>let m = 10;</p>
  <p>console.log(m--)</p>
  <p>console.log(m);</p>
  <p>Answer: 10 then 9</p>
  <p>Why: Post-decrement prints value first then decreases.</p>
</div>
<div>
  <h3>Example 13</h3>
  <p>let n = 5;</p>
  <p>let result = n++ + ++n;</p>
  <p>console.log(result);</p>
  <p>Answer: 12</p>
  <p>Why: 5 + 7 = 12.</p>
</div>
<div>
  <h3>Example 14</h3>
  <p>let likes = 100;</p>
  <p>function likePost(){
    result ++likes;
    }</p>
  <p>console.log(likePost());</p>
  <p>console.log(likes);</p>
  <p>Answer: Error</p>
  <p>Why: Invalid syntax and undefined variable.</p>
</div>
<div>
  <h3>Example 15</h3>
  <p>let count = 5;</p>
  <p>if(count-- === 5){
    console.log("Matched");
    }else{
    console.log("Not Matched");
    }</p>
  <p></p>
  <p>Answer: Matched</p>
  <p>Why: Comparison happens before decrement.</p>
</div>
<h1>JavaScript Control Flow Statements</h1>
<p>
  Control flow statements in JavaScript allow you to control the execution of code
  based on conditions. This README explains <strong>if</strong>, <strong>if-else</strong>,
  <strong>if-else if-else</strong>, and <strong>switch</strong> statements with examples.
</p>
<hr>
<h2>1. If Statement</h2>
<p>
  The <strong>if</strong> statement executes a block of code only when the given condition
  evaluates to <code>true</code>.
</p>
<pre><code>
// Example 1
if (12 &lt; 13) {
    console.log(true);
}
</code></pre>
<p><strong>Explanation:</strong> Since <code>12 &lt; 13</code> is true, the code runs.</p>
<pre><code>
// Example 2
if (1513) {
    console.log(true);
}
</code></pre>
<p>
  <strong>Explanation:</strong> Any non-zero number in JavaScript is treated as
  <code>true</code>, so this condition runs.
</p>
<pre><code>
// Example 3
if (112) {
    console.log("number");
}
</code></pre>
<p>
  <strong>Explanation:</strong> Non-zero numbers are <strong>truthy</strong> values.
</p>
<hr>
<h2>2. If-Else Statement</h2>
<p>
  The <strong>if-else</strong> statement runs one block if the condition is true and
  another block if it is false.
</p>
<pre><code>
// Example 1
if (12 &lt; 13) {
    console.log(true);
} else {
    console.log(false);
}
</code></pre>
<pre><code>
// Example 2
if (15 &lt; 13) {
    console.log(true);
} else {
    console.log(false);
}
</code></pre>
<p>
  <strong>Explanation:</strong> Since <code>15 &lt; 13</code> is false, the <code>else</code>
  block executes.
</p>
<pre><code>
// Example 3
if (!12) {
    console.log("number");
} else {
    console.log("Not A Number");
}
</code></pre>
<p>
  <strong>Explanation:</strong> <code>12</code> is truthy, so <code>!12</code> becomes
  <code>false</code>, and the <code>else</code> block runs.
</p>
<hr>
<h2>3. If - Else If - Else Statement</h2>
<p>
  This structure is used when multiple conditions need to be checked.
</p>
<pre><code>
let logedin = true;
let admin = false;

if (logedin && admin) {
    console.log("welcome admin");
} else if (logedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}
</code></pre>
<p>
  <strong>Explanation:</strong>
</p>
<ul>
  <li>If the user is logged in and is an admin → Admin message</li>
  <li>If the user is logged in but not an admin → User message</li>
  <li>If the user is not logged in → Redirect message</li>
</ul>
<hr>
<h1>JavaScript Switch Case & Early Return Pattern</h1>
<hr>
<h2>1. Switch Case Statement</h2>
<p>
  The <strong>switch</strong> statement compares a given value with multiple
  <code>case</code> values. When a match is found, that block of code is executed.
</p>
<h3>Example 1</h3>
<pre><code>
switch ('Today') { 
  case 'Today':
    console.log("A");
    break;
  case 'B':
    console.log("B");
    break;
  case 'C':
    console.log("C");
    break;
  default:
    console.log("D");
    break;
}
</code></pre>
<p>
  <strong>Explanation:</strong><br>
<ul>
  <li><code>'Today'</code> value <code>case 'Today'</code> sathe match thase</li>
  <li>So output: <strong>A</strong></li>
  <li><code>break</code> statement switch ne stop kare che</li>
</ul>
</p>
<hr>
<h3>Example 2</h3>
<pre><code>
let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log("Start of the week");
    break;
  case 'Friday':
    console.log("Almost weekend");
    break;
  case 'Sunday':
    console.log("Holiday");
    break;
  default:
    console.log("Normal day");
    break;
}
</code></pre>
<p>
  <strong>Explanation:</strong><br>
  <code>day</code> ni value <strong>Monday</strong> che, etle output:
  <strong>"Start of the week"</strong>
</p>
<hr>
<h2>2. Early Return Pattern</h2>
<p>
  <strong>Early return</strong> pattern ma function ne jaldi return kari devay che
  jethi unnecessary condition check na thay.
</p>
<h3>Example 1 (Normal if-else)</h3>
<pre><code>
function score(value) {
  if (value > 90) {
    return "Value is more than 90";
  } else if (value < 80) {
    return "Value is less than 80";
  } else if (value < 70) {
    return "Value is less than 70";
  } else if (value < 60) {
    return "Value is less than 60";
  } else {
    return "Value is equal or between 80 to 90";
  }
}
score(100);
</code></pre>
<p>
  <strong>Note:</strong> Condition order important che, wrong order thi incorrect result avi sake.
</p>
<hr>
<h3>Example 2 (Early Return Pattern)</h3>
<pre><code>
function score1(value) {
  if (value > 90) return "Value is more than 90";
  if (value > 80) return "Value is less than 90";
  if (value > 70) return "Value is less than 80";
  if (value > 60) return "Value is less than 70";
  return "Value is less than or equal to 60";
}
</code></pre>
<p>
  <strong>Advantages of Early Return:</strong>
<ul>
  <li>Code clean & readable bane che</li>
  <li>Less nested conditions</li>
  <li>Performance better</li>
</ul>
</p>
<hr>
<h2>Conclusion</h2>
<p>
<ul>
  <li><strong>Switch case</strong> use thay che multiple fixed values mate</li>
  <li><strong>Early return</strong> pattern logic ne simple ane efficient banave che</li>
</ul>
</p>
<h1>JavaScript Early Return Pattern</h1>
<p>
  Early Return Pattern JavaScript ma function ne clean, readable ane efficient banava
  mate use thay che.
</p>
<hr>
<h2>What is Early Return?</h2>
<p>
  Early return etle function ma condition match thata j value return kari devi,
  jethi baki na conditions check karva na pade.
</p>
<ul>
  <li>Code short bane che</li>
  <li>Readability vadhe che</li>
  <li>Nested if-else avoid thay che</li>
</ul>
<hr>
<h2>Wrong Logic Example</h2>
<pre><code>
function score(value) {
  if (value > 90) {
    return "Value is more than 90";
  } else if (value < 80) {
    return "Value is less than 80";
  } else if (value < 70) {
    return "Value is less than 70";
  } else if (value < 60) {
    return "Value is less than 60";
  } else {
    return "Value is less than 60";
  }
}
</code></pre>
<p>
  <strong>Problems:</strong>
</p>
<ul>
  <li><code>value &lt; 80</code> pehla check thay che</li>
  <li><code>value &lt; 70</code> ane <code>value &lt; 60</code> kabhi reach nathi thata</li>
  <li>Duplicate return statements che</li>
</ul>
<hr>
<h2>Correct Early Return Pattern</h2>
<pre><code>
function score(value) {
  if (value < 60) return "Value is less than 60";
  if (value < 70) return "Value is less than 70";
  if (value < 80) return "Value is less than 80";
  if (value < 90) return "Value is less than 90";
  return "Value is more than 90";
}
</code></pre>
<p>
  <strong>Why this is correct?</strong>
</p>
<ul>
  <li>Conditions low to high order ma che</li>
  <li>Ek condition true thay etle function turant return kare che</li>
  <li>No unnecessary else blocks</li>
</ul>
<hr>
<h2>Incorrect Early Return Example</h2>
<pre><code>
function score1(value) {
  if (value > 90) return "Value is less than 90";
  else if (value < 80) return "Value is less than 80";
  else if (value < 70) return "Value is less than 70";
  else if (value < 60) return "Value is less than 60";
  else return "Value is more than 90";
}
</code></pre>
<p>
  <strong>Issues:</strong>
</p>
<ul>
  <li>Wrong return message</li>
  <li>Incorrect condition sequence</li>
  <li>Confusing output</li>
</ul>
<hr>
<h2>Rock Paper Scissors (Early Return)</h2>
<h3>Simple Version</h3>
<pre><code>
function rps(user, computer) {
  if (user === "rock" && computer === "scissor") return "user wins";
  if (user === "scissor" && computer === "paper") return "user wins";
  if (user === "paper" && computer === "rock") return "user wins";

  if (user === "scissor" && computer === "rock") return "computer wins";
  if (user === "rock" && computer === "paper") return "computer wins";
  if (user === "paper" && computer === "scissor") return "computer wins";

  return "It's a tie";
}
</code></pre>
<hr>
<h3>Optimized Version</h3>
<pre><code>
function rps2(user, computer) {
  if (user === computer) return "It's a tie!";

  if (
    (user === "rock" && computer === "scissor") ||
    (user === "scissor" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "user wins";
  }

  return "computer wins";
}
</code></pre>
<p>
  <strong>Advantages:</strong>
</p>
<ul>
  <li>Short and clean code</li>
  <li>Easy to understand</li>
  <li>Best practice for interviews</li>
</ul>
<hr>
<h1>JavaScript Loops</h1>
<p>This repository demonstrates different types of loops in JavaScript with examples.</p>
<hr>
<h2>For Loop</h2>
<p>
  Use a <b>for loop</b> when you know how many times you want to repeat a block of code.
</p>
<p><b>Syntax:</b></p>
<pre><code>
for (start; condition; change) {
  // code
}
</code></pre>
<p><b>Example: Print numbers from 1 to 10</b></p>
<pre><code>
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
</code></pre>
<p><b>Example: Print numbers from 20 to 10</b></p>
<pre><code>
for (let i = 20; i >= 10; i--) {
  console.log(i);
}
</code></pre>
<hr>
<h2>While Loop</h2>
<p>
  Use a <b>while loop</b> when the number of repetitions is not fixed.
</p>
<p><b>Syntax:</b></p>
<pre><code>
start;
while (condition) {
  // code
  change;
}
</code></pre>
<p><b>Example: Print numbers from 10 to 20</b></p>
<pre><code>
let j = 10;
while (j <= 20) {
  console.log(j);
  j++;
}
</code></pre>
<p><b>Example: Countdown from 30 to 21</b></p>
<pre><code>
let c = 30;
while (c > 20) {
  console.log(c);
  c--;
}
</code></pre>
<p><b>Example: Print "hello" 5 times</b></p>
<pre><code>
let i = 0;
while (i < 5) {
  console.log("hello");
  i++;
}
</code></pre>
<hr>
<h2>Do While Loop</h2>
<p>
  A <b>do while loop</b> runs at least once even if the condition is false.
</p>
<p><b>Syntax:</b></p>
<pre><code>
do {
  // code
  change;
} while (condition);
</code></pre>
<p><b>Example: Print numbers from 1 to 5</b></p>
<pre><code>
let riddhi = 1;
do {
  console.log(riddhi);
  riddhi++;
} while (riddhi <= 5);
</code></pre>
<p><b>Example: Print numbers from 10 to 1</b></p>
<pre><code>
let h = 10;
do {
  console.log(h);
  h--;
} while (h >= 1);
</code></pre>
<hr>
<h2>Conclusion</h2>
<ul>
  <li><b>for loop</b> → when repetition count is known</li>
  <li><b>while loop</b> → when condition-based repetition is needed</li>
  <li><b>do while loop</b> → when code must run at least once</li>
</ul>
<div>
  <h3>Example (Break)</h3>

  <pre><code>
for (let k = 1; k <= 201; k++) {
  console.log(k);
  if (k === 32) {
    break;
  }
}
  </code></pre>

  <p><b>Answer:</b> Prints numbers from 1 to 32.</p>
  <p><b>Why:</b> break stops the loop when k becomes 32.</p>
</div>

<div>
  <h3>Example (Break)</h3>

  <pre><code>
for (let m = 1; m <= 20; m++) {
  console.log(m);
  if (m === 15) {
    break;
  }
}
  </code></pre>

  <p><b>Answer:</b> Prints numbers from 1 to 15.</p>
  <p><b>Why:</b> break terminates the loop at 15.</p>
</div>

<div>
  <h3>Example (Continue)</h3>

  <pre><code>
for (let a = 1; a <= 10; a++) {
  if (a === 50) {
    continue;
  }
  console.log(a);
}
  </code></pre>

  <p><b>Answer:</b> Prints numbers from 1 to 10.</p>
  <p><b>Why:</b> Condition is never true, so continue never runs.</p>
</div>

<div>
  <h3>Example (Continue)</h3>

  <pre><code>
for (let a = 2; a <= 20; a++) {
  if (a === 50) {
    continue;
  }
  console.log(a);
}
  </code></pre>

  <p><b>Answer:</b> Prints numbers from 2 to 20.</p>
  <p><b>Why:</b> a never becomes 50, so continue is skipped.</p>
</div>


<div>
  <h1>Example 1</h1>
  <p>Print number from 1 to 10 using a for loop.</p>
  <pre><code>
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
  </code></pre>
  <p><b>Answer:</b> Prints numbers from 1 to 10.</p>
  <p><b>Why:</b> The loop runs 10 times starting from 1.</p>
</div>
<div>
  <h1>Example 2</h1>
  <p>Print number from 10 to 1 using while loop.</p>
  <pre><code>
let q = 10;
while (q >= 1) {
  console.log(q);
  q--;
}
  </code></pre>
  <p><b>Answer:</b> Prints numbers from 10 to 1.</p>
  <p><b>Why:</b> q decreases by 1 on each iteration.</p>
</div>
<div>
  <h1>Example 3</h1>
  <p>Print even numbers from 1 to 20.</p>
  <pre><code>
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
  </code></pre>
  <p><b>Answer:</b> Prints all even numbers.</p>
  <p><b>Why:</b> Even numbers are divisible by 2.</p>
</div>
<div>
  <h1>Example 4</h1>
  <p>Print odd numbers from 1 to 15.</p>
  <pre><code>
let i = 1;
while (i <= 15) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
  </code></pre>
  <p><b>Answer:</b> Prints all odd numbers.</p>
  <p><b>Why:</b> Odd numbers are not divisible by 2.</p>
</div>
<div>
  <h1>Example 5</h1>
  <p>Print multiplication table of 5.</p>
  <pre><code>
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
  </code></pre>
  <p><b>Answer:</b> Prints table of 5.</p>
  <p><b>Why:</b> Loop multiplies 5 with numbers 1 to 10.</p>
</div>
<div>
  <h1>Example 6</h1>
  <p>Find the sum of numbers from 1 to 100.</p>
  <pre><code>
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}

console.log(sum);
  </code></pre>
  <p><b>Answer:</b> 5050</p>
  <p><b>Why:</b> All numbers from 1 to 100 are added.</p>
</div>
<div>
  <h1>Example 7</h1>
  <p>Print numbers between 1 to 50 divisible by 3.</p>
  <pre><code>
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
  </code></pre>
  <p><b>Answer:</b> Prints multiples of 3.</p>
  <p><b>Why:</b> Condition checks divisibility by 3.</p>
</div>
<div>
  <h1>Example 8</h1>
  <p>Check whether numbers are even or odd up to user input.</p>
  <pre><code>
let num = prompt("Enter a number");

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
  </code></pre>
  <p><b>Answer:</b> Prints even or odd for each number.</p>
  <p><b>Why:</b> Modulus operator checks remainder.</p>
</div>
<div>
  <h1>Example 9</h1>
  <p>Count numbers divisible by 3 or 5 between 1 to 100.</p>
  <pre><code>
let count = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    count++;
  }
}

console.log(count);
  </code></pre>
  <p><b>Answer:</b> Prints total count.</p>
  <p><b>Why:</b> Logical OR checks both conditions.</p>
</div>
<div>
  <h1>Example 10 (Break)</h1>
  <p>Stop loop at first multiple of 7.</p>
  <pre><code>
for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 7 === 0) {
    break;
  }
}
  </code></pre>
  <p><b>Answer:</b> Loop stops at 7.</p>
  <p><b>Why:</b> break keyword terminates the loop.</p>
</div>
<div>
  <h1>Example 11 (Continue)</h1>
  <p>Skip multiples of 3.</p>
  <pre><code>
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
  </code></pre>
  <p><b>Answer:</b> Prints all except multiples of 3.</p>
  <p><b>Why:</b> continue skips current iteration.</p>
</div>
<div>
  <h1>Example 12</h1>
  <p>Print first 5 odd numbers only.</p>
  <pre><code>
let count = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) continue;

  console.log(i);
  count++;

  if (count === 5) {
    break;
  }
}
  </code></pre>
  <p><b>Answer:</b> Prints first 5 odd numbers.</p>
  <p><b>Why:</b> Counter limits output and break stops loop.</p>
</div>
<h1>JavaScript Functions</h1>
<p>
  A function is a block of code that performs a specific task.
</p>
<hr>
<h2>What is a Function?</h2>
<p>
  A function is a reusable block of code designed to perform a particular task.
</p>
<h2>Why use Functions?</h2>
<ul>
  <li>To avoid code repetition</li>
  <li>To make code modular</li>
  <li>To improve code reusability</li>
  <li>To improve readability</li>
</ul>
<h2>How to create a Function?</h2>
<p>
  A function consists of the following parts:
</p>
<ul>
  <li>Function keyword</li>
  <li>Function name</li>
  <li>Parameters</li>
  <li>Function body</li>
  <li>Return statement (optional)</li>
</ul>
<hr>
<h2>Types of Functions</h2>
<h3>Function Declaration</h3>
<p>
  function abc() { }
</p>
<h3>Arrow Function (Fat Arrow Function)</h3>
<p>
  let func1 = () => { }
</p>
<hr>
<h2>Example: temp_cart Function</h2>
<p>
  This function simulates adding a product to the cart.
</p>
<p>
  function temp_cart(){<br>
  &nbsp;&nbsp;console.log("adding product")<br>
  }
</p>
<p>
  Function Calls:
</p>
<ul>
  <li>temp_cart("laptop")</li>
  <li>temp_cart("watch")</li>
  <li>temp_cart("mobile")</li>
</ul>
<hr>
<h2>Parameters vs Arguments</h2>
<h3>Parameters</h3>
<p>
  Parameters are the variables listed inside the parentheses in the function definition.
</p>
<h3>Arguments</h3>
<p>
  Arguments are the actual values passed to the function when the function is called.
</p>
<hr>
<h2>Example: Single Parameter Function</h2>
<p>
  function fullname(name){<br>
  &nbsp;&nbsp;console.log("My Name is: " + name)<br>
  }
</p>
<ul>
  <li>fullname("riddhi")</li>
  <li>fullname("mansi")</li>
  <li>fullname("jinal")</li>
</ul>
<hr>
<h2>Example: Multiple Parameters Function</h2>
<p>
  function fullname1(name, surname){<br>
  &nbsp;&nbsp;console.log("Name: " + name + " Surname: " + surname)<br>
  }
</p>
<ul>
  <li>fullname1("riddhi", "jikadra")</li>
  <li>fullname1("mansi", "maradiya")</li>
  <li>fullname1("jinal", "gohil")</li>
</ul>
<hr>

<h1>JavaScript Advanced Functions</h1>

<p>
  This document explains arrow functions, function expressions, default parameters,
  rest parameters, early return, and first-class functions in JavaScript.
</p>

<hr>

<h2>Arrow Function</h2>

<p>
  Arrow functions provide a shorter syntax to write functions.
</p>

<p>
  let fullname2 = (name, surname) => {<br>
  &nbsp;&nbsp;console.log("arrow function -- Name:" + name + " surname: " + surname);<br>
  }
</p>

<p>
  Function Call:
</p>

<p>
  fullname2("mansi", "maradiya")
</p>

<hr>

<h2>Function Expression</h2>

<p>
  A function can be stored inside a variable. This is called a function expression.
</p>

<p>
  const fullname3 = function fullname1(name, surname) {<br>
  &nbsp;&nbsp;console.log("function expression -- Name:" + name + " surname: " + surname);<br>
  }
</p>

<p>
  Function Call:
</p>

<p>
  fullname3("jinal", "gohil")
</p>

<hr>

<h2>Default Parameters</h2>

<p>
  Default parameters allow assigning default values to function parameters.
</p>

<p>
  function abcd(b = 10, price = 0) {<br>
  &nbsp;&nbsp;console.log(b, price);<br>
  }
</p>

<p>
  Function Call:
</p>

<p>
  abcd(15)
</p>

<p>
  Use case example: platform fee, service charges, or fixed fees.
</p>

<hr>

<h2>Rest Parameters</h2>

<p>
  Rest parameters are used when we do not know how many arguments will be passed.
  They collect multiple arguments into an array.
</p>

<p>
  function def1(...name) {<br>
  &nbsp;&nbsp;console.log(name);<br>
  }
</p>

<p>
  Function Call:
</p>

<p>
  def1("mansi", "jinal", "riddhi")
</p>

<p>
  Rest parameters can also be used with normal parameters.
</p>

<p>
  function def1(a, ...name) {<br>
  &nbsp;&nbsp;console.log(a, name);<br>
  }
</p>

<p>
  Function Call:
</p>

<p>
  def1("mansi", "jinal", "riddhi")
</p>

<hr>

<h2>Early Return</h2>
<p>
  Early return is used to exit a function as soon as a condition is met.
</p>
<p>
  function score1(value) {<br>
  &nbsp;&nbsp;if (value &gt; 90) return "Value is less than 90";<br>
  &nbsp;&nbsp;else if (value &lt; 80) return "Value is less than 80";<br>
  &nbsp;&nbsp;else if (value &lt; 70) return "Value is less than 70";<br>
  &nbsp;&nbsp;else if (value &lt; 60) return "Value is less than 60";<br>
  &nbsp;&nbsp;else return "Value is more than 90";<br>
  }
</p>
<p>
  Example:
</p>
<p>
  let result = score1(80)
</p>
<hr>
<h2>First-Class Functions</h2>
<p>
  In JavaScript, functions are treated as first-class citizens.
  This means functions can be stored in variables, passed as arguments,
  and returned from other functions.
</p>
<h3>Function Stored in a Variable</h3>
<p>
  const cart3 = function(product, price) {<br>
  &nbsp;&nbsp;console.log("Adding " + product + " at " + price);<br>
  }
</p>
<p>
  cart3("function expression - s25", 45000)
</p>
<hr>
<h3>Function Passed as an Argument</h3>
<p>
  function temp_b(fnc) {<br>
  &nbsp;&nbsp;fnc();<br>
  }
</p>
<p>
  temp_b(function fnc2() {<br>
  &nbsp;&nbsp;console.log("First Class Function");<br>
  })
</p>
<hr>
<h3>Function Returned from Another Function</h3>
<p>
  function abcd() {<br>
  &nbsp;&nbsp;return function() {<br>
  &nbsp;&nbsp;&nbsp;&nbsp;console.log("function return other function");<br>
  &nbsp;&nbsp;};<br>
  }
</p>
<p>
  Function Call:
</p>
<p>
  abcd()();
</p>
<hr>
<p><b>End of JavaScript Functions Documentation</b></p>
<h2>Higher-Order Functions (HOF)</h2>

<p>
  A higher-order function is a function that either:
<ul>
  <li>Takes another function as an argument</li>
  <li>Returns a function as a result</li>
</ul>
These functions allow more flexible and reusable code.
</p>

<h3>Example: Passing a Function as an Argument</h3>

<p>
  A higher-order function can accept a function as a parameter:
</p>

<pre><code>
function abcd(val) {
    val(); // call the function passed as argument
}
abcd(function() {
    console.log("Hello from argument function");
});
</code></pre>

<h3>Example: Returning a Function</h3>
<p>
  A higher-order function can return another function:
</p>
<pre><code>
function abcd() {
    return function() {
        console.log("Hello from returned function");
    };
}
abcd()(); // call the returned function
</code></pre>
<hr><hr>
<h1>JavaScript Functions & Scope Examples</h1>

<h2>1. Pure vs Impure Function</h2>

<h3>Pure Function</h3>
<p>
  Pure function aevo function hoy chhe je:
</p>
<ul>
  <li>Same input par hamesha same output aape</li>
  <li>Koi pan <b>bahar na variable / state ne modify</b> na kare</li>
</ul>

<pre><code>
// Pure Function
let a = 10;

function abcd_pure() {
    console.log("Hello");
}
</code></pre>

<p><b>Explanation:</b> Aa function koi external variable change karto nathi,
etle aa <b>pure function</b> chhe.</p>

<hr>

<h3>Impure Function</h3>
<p>
  Impure function aevo hoy chhe je:
</p>
<ul>
  <li>External state ne modify kare</li>
  <li>Same input par different output aapi shake</li>
</ul>

<pre><code>
// Impure Function
function abcd_impure() {
    a++;
    console.log(a);
}
</code></pre>

<p>
  <b>Explanation:</b> Aa function bahar declare karel <code>a</code> variable ne
change kare chhe, etle aa <b>impure function</b> chhe.
</p>

<hr>

<h2>2. Closure Function</h2>
<p>
  Closure function aevo function hoy chhe je potana
<b>parent function na variables ne access</b> kari shake,
even parent function execute thai gaya pachi pan.
</p>

<pre><code>
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}

let fnc = outer();
fnc();
</code></pre>

<p>
  <b>Explanation:</b> <code>inner()</code> function,
<code>outer()</code> function na <code>count</code> variable ne
access kare chhe — aa closure nu example chhe.
</p>

<hr>

<h3>Another Closure Example</h3>

<pre><code>
function riddhi() {
    let a1 = "mansi";

    function nidhi() {
        a1 += " jinal";
        console.log(a1);
    }
    return nidhi;
}

let fnc1 = riddhi();
fnc1();
</code></pre>

<p>
  <b>Explanation:</b> <code>nidhi()</code> function
<code>riddhi()</code> function na variable <code>a1</code> ne
modify kare chhe, etle aa pan closure chhe.
</p>

<hr>

<h2>3. Lexical Scope</h2>
<p>
  Lexical scope no matlab chhe ke
<b>nested function potana outer function na variables ne access kari shake</b>.
</p>

<h3>Example 1</h3>

<pre><code>
function outer1() {
    let outer_var = "outer function variable";

    function inner1() {
        let inner_var = "inner function variable";
        console.log(outer_var);

        function most_inner() {
            console.log(inner_var);
            console.log(outer_var);

            let most_inner_var = "most inner function variable";
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
</code></pre>

<p>
  <b>Explanation:</b> Andar na function,
bahar na badha variables ne access kari shake chhe —
aa lexical scope chhe.
</p>

<hr>

<h3>Example 2</h3>

<pre><code>
function clg() {
    let faculty = "abcd";

    function fac() {
        let student = "student abcd";
        console.log(faculty);

        function dumb_student() {
            console.log(student);
            console.log(faculty);
        }
        dumb_student();
    }
    fac();
}
clg();
</code></pre>

<p>
  <b>Explanation:</b> <code>dumb_student()</code>
function parent ane grandparent banne na variables access kare chhe.
</p>

<hr>

<h2>4. IIFE (Immediately Invoked Function Expression)</h2>
<p>
  IIFE aevo function hoy chhe je
<b>define karta j execute thai jai</b>.
</p>

<pre><code>
(function () { })();
</code></pre>

<pre><code>
(function () {
    console.log("This Is IIFE Function");
}());
</code></pre>

<p>
  <b>Use:</b> Global scope pollution avoid karva mate.
</p>

<hr>

<h2>5. Hoisting in Function</h2>
<p>
  Hoisting ma function ni declaration
<b>execution pehla memory ma load</b> thai jai chhe.
</p>

<pre><code>
abcde();

function abcde() {
    console.log("This is hoisting function");
}
</code></pre>

<p>
  <b>Explanation:</b> Normal function declaration hoisted hoy chhe,
etle function call declaration pehla pan work kare chhe.
</p>

<hr>

<h3>Function Expression & Arrow Function (Not Hoisted)</h3>

<pre><code>
// hostedFunction1();
// let hostedFunction1 = function() {
//     console.log("Function Expression");
// }

// hostedFunction2();
// let hostedFunction2 = () => {
//     console.log("Arrow Function");
// }
</code></pre>

<p>
  <b>Explanation:</b> Function expression ane arrow function
hoisted nathi thati, etle error aave chhe.
</p>
## Function Examples
<hr>
<div>
  <h1> Example 1: </h1>
  <p>What's the difference between function declaration and function expression in terms of hoisting?</p>
  <p>
    <b>Answer:</b> Function declaration ma function declare pehla pan call thai sake,
    pan function expression ma function declare karta pehla call kariye to error aave.
  </p>
</div>

<div>
  <h1> Example 2: </h1>
  <pre><code>
greet();

function greet() {
  console.log("Hello!");
}
  </code></pre>
  <p><b>Answer:</b> "Hello!" print thase.</p>
  <p><b>Why:</b> Function declaration hoisted hoy che, etle declaration pehla call thai sake.</p>
</div>

<div>
  <h1> Example 3: </h1>
  <p>Convert normal function to Arrow Function</p>
  <pre><code>
function add(a, b) {
  return a + b;
}
  </code></pre>

  <p><b>Answer:</b></p>
  <pre><code>
let add = (a, b) => a + b;

add(5, 23);
  </code></pre>
</div>

<div>
  <h1> Example 4: </h1>
  <p>Identify what is parameters and what is arguments</p>
  <pre><code>
function welcome(name) {
  console.log("Welcome " + name);
}

welcome("user");
  </code></pre>
  <p><b>Answer:</b> <code>name</code> is parameter and <code>"user"</code> is argument.</p>
  <p>
    <b>Why:</b> Parameter function declaration time aave,
    ane argument function call time pass thay.
  </p>
</div>

<div>
  <h1> Example 5: </h1>
  <p>How many parameters and arguments?</p>
  <pre><code>
function temp(a, b, c) {
  console.log(a, b, c);
}

temp(1, 2);
  </code></pre>
  <p><b>Answer:</b> Parameters = 3 (a, b, c) and Arguments = 2 (1, 2).</p>
</div>

<div>
  <h1> Example 6: </h1>
  <p>Predict the output</p>
  <pre><code>
function temp_user(name = "Guest") {
  console.log("Hello " + name);
}

temp_user();
  </code></pre>
  <p><b>Answer:</b> Hello Guest</p>
  <p>
    <b>Why:</b> Default parameter value "Guest" use thay che
    jyare argument pass na kariye.
  </p>
</div>

<div>
  <h1> Example 7: </h1>
  <p>What is the <code>...</code> operator and why use it in function?</p>
  <pre><code>
function number(...numbers) {
  console.log(numbers);
}

number(1, 2, 3, 4, 5);
  </code></pre>
  <p><b>Answer:</b> [1, 2, 3, 4, 5]</p>
  <p>
    <b>Why:</b> Rest operator multiple arguments ne ek array ma convert kare,
    etle vadhare parameters handle kari sakiye.
  </p>
</div>

<div>
  <h1> Example 8: </h1>
  <p>Use rest parameters to accept any number of scores and return the total</p>
  <pre><code>
function calculateTotal(...scores) {
  let total = 0;
  for (let i = 0; i <= scores.length; i++) {
    total += scores[i];
  }
  return total;
}

function calculateTotalCorrect(...scores) {
  let total = 0;
  scores.forEach(function (val) {
    total += val;
  });
  return total;
}

calculateTotal(10, 20, 30, 40, 50);
let sumtotal = calculateTotalCorrect(10, 20, 30, 40, 50);
  </code></pre>
  <p><b>Ans / Err:</b> Error (NaN)</p>
  <p>
    <b>Why:</b> <code>i &lt;= scores.length</code> thi undefined value access thay che,
    je NaN result aape che.
  </p>
</div>

<div>
  <h1> Example 9: </h1>
  <p>Fix the function using early return</p>
  <pre><code>
function checkAge(age) {
  if (age < 18) {
    console.log("Too Young");
    return;
  }
  console.log("Access Granted");
}
  </code></pre>
  <p><b>Answer:</b> Early return use kari function clean banavi.</p>
</div>

<div>
  <h1> Example 10: </h1>
  <p>What is the return value of below function?</p>
  <pre><code>
function f() {
  return;
}
  </code></pre>
  <p><b>Answer:</b> <code>undefined</code></p>
  <p><b>Why:</b> Return statement value vagar hoy to JavaScript <code>undefined</code> return kare.</p>
</div>


<div>
  <h1> Example 11: </h1>
  <p>What does it mean when we say "functions are first-class citizens"?</p>
  <p><b>Ans:</b> Functions are treated like normal variables.</p>
  <p><b>Why:</b> They can be assigned, passed, and returned.</p>
</div>

<div>
  <h1> Example 12: </h1>
  <p>Can you assign a function to a variable and call it?</p>
  <pre><code>
let a = function () {
  console.log("Hello");
};
a();
  </code></pre>
  <p><b>Ans:</b> Yes.</p>
  <p><b>Why:</b> Functions can be stored in variables.</p>
</div>

<div>
  <h1> Example 13: </h1>
  <p>Pass a function into another function and execute it.</p>
  <pre><code>
function abcd(val) {
  val();
}

abcd(function () {
  console.log("Hello");
});
  </code></pre>
  <p><b>Ans:</b> Executes successfully.</p>
  <p><b>Why:</b> Functions can be passed as arguments.</p>
</div>

<div>
  <h1> Example 14: </h1>
  <p>What is a higher-order function?</p>
  <p><b>Ans:</b> A function that takes or returns another function.</p>
  <p><b>Why:</b> It works with functions as values.</p>
</div>

<div>
  <h1> Example 15: </h1>
  <p>Identify the higher-order function.</p>
  <pre><code>
[1, 2, 3].map(function (x) {
  return x * 2;
});
  </code></pre>
  <p><b>Ans:</b> <code>map()</code>.</p>
  <p><b>Why:</b> It accepts a function as an argument.</p>
</div>

<div>
  <h1> Example 16: </h1>
  <p>Pure or impure function?</p>
  <pre><code>
let total = 5;

function num(num) {
  total += num;
}

num(3);
  </code></pre>
  <p><b>Ans:</b> Impure function.</p>
  <p><b>Why:</b> It modifies an external variable.</p>
</div>

<div>
  <h1> Example 17: </h1>
  <p>Convert example 16 into a pure function.</p>
  <pre><code>
function num(total, num) {
  return total + num;
}

num(5, 3);
  </code></pre>
  <p><b>Ans:</b> Pure function.</p>
  <p><b>Why:</b> Output depends only on inputs.</p>
</div>

<div>
  <h1> Example 18: </h1>
  <p>What is Closure? When is it created?</p>
  <pre><code>
function outer() {
  let x = 10;
  return function () {
    console.log(x);
  };
}
  </code></pre>
  <p><b>Ans:</b> Closure remembers outer variables.</p>
  <p><b>Why:</b> Created when inner function accesses outer scope.</p>
</div>

<div>
  <h1> Example 19: </h1>
  <p>What's logged?</p>
  <pre><code>
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();
  </code></pre>
  <p><b>Ans:</b> 1 then 2.</p>
  <p><b>Err:</b> No error.</p>
  <p><b>Why:</b> Closure preserves <code>count</code>.</p>
</div>

<div>
  <h1> Example 20: </h1>
  <p>Convert into an IIFE.</p>
  <pre><code>
(function () {
  console.log("Initialized");
})();
  </code></pre>
  <p><b>Ans:</b> Executes immediately.</p>
  <p><b>Why:</b> IIFE runs as soon as it’s defined.</p>
</div>

<div>
  <h1> Example 21: </h1>
  <p>Use of IIFE with real-world example.</p>
  <pre><code>
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
  </code></pre>
  <p><b>Ans:</b> Data privacy.</p>
  <p><b>Why:</b> Creates private variables using closure.</p>
</div>

<div>
  <h1> Example 22: </h1>
  <p>What will be the output?</p>
  <pre><code>
temp_var();

var temp_var = function () {
  console.log("Hello");
};
  </code></pre>
  <p><b>Ans:</b> Error (TypeError).</p>
  <p><b>Why:</b> Function expressions are not hoisted.</p>
</div>

<div>
  <h1> Example 23: </h1>
  <p>What will be the output?</p>
  <pre><code>
temp_var();

function temp_var() {
  console.log("Hello");
}
  </code></pre>
  <p><b>Ans:</b> Hello.</p>
  <p><b>Why:</b> Function declarations are hoisted.</p>

</div>
<h1>JavaScript Arrays – README</h1>

<p>
JavaScript <strong>Array</strong> ek aevu data structure chhe je ek saathe multiple values store kari shake.
</p>

<hr>

<h2>What is an Array?</h2>

<p>Array example:</p>

<pre>
[1, 2, 3, 4, 5]
["hello", "a", "b", "c"]
[2, "bye", "hello", 50]
</pre>

<hr>

<h2>Create an Array</h2>

<pre>
let arr = [1, 2, 3, 4];
</pre>

<hr>

<h2>Access Array Elements</h2>

<p>
Array index <strong>0</strong> thi start thay chhe.
</p>

<pre>
arr[0]  // first element
arr[2]  // third element
arr[10] // undefined
</pre>

<hr>

<h2>Modify Array Elements</h2>

<pre>
arr[0] = 10;
</pre>

<hr>

<h2>Array Methods</h2>

<p>
JavaScript ma array sathe kaam karva mate different built-in methods chhe:
</p>

<ul>
  <li>push</li>
  <li>pop</li>
  <li>shift</li>
  <li>unshift</li>
  <li>splice</li>
  <li>slice</li>
  <li>reverse</li>
  <li>sort</li>
</ul>

<hr>

<h2>push() – Add Value at Last</h2>

<pre>
let shoes_product = ["Skechers", "Puma", "Adidas"];
shoes_product.push("Nike");
</pre>

<p><strong>Use case:</strong> Existing product list ma new product add karva.</p>

<hr>

<h2>pop() – Remove Last Value</h2>

<pre>
shoes_product.pop();
</pre>

<p><strong>Use case:</strong> Last add karelo product remove karva.</p>

<hr>

<h2>shift() – Remove First Value</h2>

<pre>
shoes_product.shift();
</pre>

<hr>

<h2>unshift() – Add Value at First</h2>

<pre>
shoes_product.unshift("Asics");
</pre>

<p><strong>Use case:</strong> New data ne top par add karva.</p>

<hr>

<h2>splice() – Remove Specific Values</h2>

<pre>
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);
</pre>

<p>
<strong>Explanation:</strong>  
Index 3 thi start kari ne 2 values remove karse.
</p>

<p><strong>Use case:</strong> Multiple messages ya records ek saathe delete karva.</p>

<hr>

<h2>slice() – Copy Values</h2>

<pre>
let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3);
</pre>

<p>
<strong>Note:</strong><br>
Start index include thay chhe<br>
End index include thato nathi
</p>

<p><strong>Use case:</strong> Specific data copy kari ne report generate karva.</p>

<hr>

<h2>splice() vs slice()</h2>

<table border="1" cellpadding="5">
  <tr>
    <th>splice()</th>
    <th>slice()</th>
  </tr>
  <tr>
    <td>Main array ne modify kare chhe</td>
    <td>Main array ne modify karto nathi</td>
  </tr>
  <tr>
    <td>Values remove/add kari shake</td>
    <td>Only copy kare</td>
  </tr>
</table>

<hr>

<h2>reverse() – Reverse Array</h2>

<pre>
let g = [25, 30, 35, 40, 85];
g.reverse();
</pre>

<p><strong>Use case:</strong> Latest data ne first show karva (frontend).</p>

<hr>

<h2>sort() – Ascending Order</h2>

<pre>
let h = [50, 20, 80, 10, 40];
h.sort();
</pre>
<h3>Numeric Sort (Proper Way)</h3>
<pre>
let b = [11, 62, 3, 4, 25];
b.sort(function(a, b) {
  return a - b;
});
</pre>
</pre>
<div>
  <h1>Example 1: push()</h1>
  <p>Add a new task <b>'Buy milk'</b> to the tasks array.</p>
  <pre><code>
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
  </code></pre>
  <p><b>Ans:</b> <code>['Wake up', 'Brush teeth', 'Buy milk']</code></p>
  <p><b>Why:</b> <code>push()</code> adds an element to the end of the array.</p>
</div>

<div>
  <h1>Example 2: pop()</h1>
  <p>Remove the last notification.</p>
  <pre><code>
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
  </code></pre>
  <p><b>Ans:</b> <code>['Email', 'Message']</code></p>
  <p><b>Why:</b> <code>pop()</code> removes the last element.</p>
</div>

<div>
  <h1>Example 3: shift()</h1>
  <p>Remove the first customer.</p>
  <pre><code>
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
  </code></pre>
  <p><b>Ans:</b> <code>['Customer2', 'Customer3']</code></p>
  <p><b>Why:</b> <code>shift()</code> removes the first element.</p>
</div>

<div>
  <h1>Example 4: unshift()</h1>
  <p>Add a song at the beginning.</p>
  <pre><code>
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
  </code></pre>
  <p><b>Ans:</b> <code>['Song A', 'Song B', 'Song C']</code></p>
  <p><b>Why:</b> <code>unshift()</code> adds elements at the start.</p>
</div>

<div>
  <h1>Example 5: splice()</h1>
  <p>Remove 'Alex' and add 'John' and 'Sara'.</p>
  <pre><code>
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
  </code></pre>
  <p><b>Ans:</b> <code>['Mike', 'John', 'Sara', 'Emma', 'Sophia']</code></p>
  <p><b>Why:</b> <code>splice()</code> removes and inserts elements.</p>
</div>

<div>
  <h1>Example 6: splice()</h1>
  <p>Remove 2 items starting from index 1.</p>
  <pre><code>
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
  </code></pre>
  <p><b>Ans:</b> <code>['Burger', 'Salad']</code></p>
  <p><b>Why:</b> It removes items starting from given index.</p>
</div>

<div>
  <h1>Example 7: slice()</h1>
  <p>Create a new array with weekend days.</p>
  <pre><code>
let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let weekend = days.slice(5);
  </code></pre>
  <p><b>Ans:</b> <code>['Saturday', 'Sunday']</code></p>
  <p><b>Why:</b> <code>slice()</code> does not modify original array.</p>
</div>

<div>
  <h1>Example 8: reverse()</h1>
  <p>Reverse game levels.</p>
  <pre><code>
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
  </code></pre>
  <p><b>Ans:</b> <code>['Hard', 'Medium', 'Easy']</code></p>
  <p><b>Why:</b> <code>reverse()</code> reverses array in place.</p>
</div>

<div>
  <h1>Example 9: sort()</h1>
  <p>Sort scores in ascending order.</p>
  <pre><code>
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
  </code></pre>
  <p><b>Ans:</b> <code>[12, 34, 45, 78, 89]</code></p>
  <p><b>Why:</b> Compare function ensures numeric sorting.</p>
</div>

<div>
  <h1>Example 10: sort() with numbers</h1>
  <pre><code>
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
  </code></pre>
  <p><b>Ans:</b> <code>[49, 149, 199, 299, 999]</code></p>
</div>

<div>
  <h1>Example 11: slice() vs splice()</h1>
  <pre><code>
let products = ['Laptop','Phone','Tablet','Monitor','Keyboard'];
let firstThree = products.slice(0, 3);
  </code></pre>
  <p><b>Ans:</b> <code>['Laptop','Phone','Tablet']</code></p>
  <p><b>Why:</b> <code>slice()</code> keeps original array unchanged.</p>
</div>

<div>
  <h1>Example 12: splice() complex</h1>
  <pre><code>
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');
  </code></pre>
  <p><b>Ans:</b> <code>['Red','Green','Purple','Orange','Yellow']</code></p>
</div>

<div>
  <h1>Example 13: reverse() + push()</h1>
  <pre><code>
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
  </code></pre>
  <p><b>Ans:</b> <code>['Step 3','Step 2','Step 1','Final Step']</code></p>
</div>

<div>
  <h1>Example 14: sort() strings</h1>
  <pre><code>
let names = ['alice','Bob','charlie','David'];
names.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  </code></pre>
  <p><b>Ans:</b> <code>['alice','Bob','charlie','David']</code></p>
</div>

<div>
  <h1>Example 15: Combination</h1>
  <pre><code>
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
  </code></pre>
  <p><b>Ans:</b> <code>['Gladiator','Inception','Titanic']</code></p>
</div>

<div>
  <h1>Example 16: splice() return value</h1>
  <p><b>Ans:</b> Returns an array of removed elements.</p>
</div>

<div>
  <h1>Example 17: slice() immutability</h1>
  <p><b>Ans:</b> Original array does NOT change.</p>
</div>

<div>
  <h1>Example 18: sort() issue</h1>
  <p><b>Ans:</b> Numbers are sorted as strings by default.</p>
</div>

<div>
  <h1>Example 19: reverse() mutation</h1>
  <p><b>Ans:</b> Both variables point to the same reversed array.</p>
</div>

<div>
  <h1>Example 20: push() vs unshift()</h1>
  <p><b>Ans:</b> <code>unshift()</code> is more expensive because it reindexes elements.</p>
</div>

<div>
  <h1>Example 21: splice() deleteCount 0</h1>
  <p><b>Ans:</b> No element removed, only insertion happens.</p>
</div>

<div>
  <h1>Example 22: sort() strings</h1>
  <p><b>Ans:</b> <code>['1','10','2']</code></p>
</div>

<div>
  <h1>Example 23: slice() negative index</h1>
  <p><b>Ans:</b> <code>[300, 400]</code></p>
</div>

<div>
  <h1>Example 24: splice vs slice</h1>
  <p><b>a)</b> Use <code>splice()</code></p>
  <p><b>b)</b> Use <code>slice()</code></p>
</div>

<div>
  <h1>Example 25: Chained methods</h1>
  <pre><code>
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
  </code></pre>
  <p><b>Ans:</b> <code>[2, 3, 1]</code></p>
</div>

<hr><hr>
<h1>JavaScript Array Methods Practice</h1>

<p>
Aa README file ma JavaScript na important array methods
<b>sort</b>, <b>forEach</b>, ane <b>map</b>
real-life examples sathe samjhavya chhe.
</p>

<hr>

<h2>1. sort()</h2>
<p>
Array ne ascending order ma sort karva mate <b>sort()</b> method use thay chhe.
</p>

<pre><code>
let arr2 = [11,22,33,30];
let sort_var = arr2.sort((a,b) => a-b);

let arr3 = ['b','h','e','s'];
</code></pre>

<hr>

<h2>2. forEach()</h2>
<p>
forEach loop array ni darek value mate run thay chhe.
Aa method koi new array return karto nathi.
</p>

<pre><code>
let i9 = ["mansi","riddhi","jinal","nidhi"];

i9.forEach(val => {
  let new_val = "my name is " + val;
  console.log(new_val);
});
</code></pre>

<hr>

<h2>3. map()</h2>
<p>
map() method tyare use thay chhe jyare
<b>ek new array create karvo hoy</b>.
forEach jevu j chhe pan map new array return kare chhe.
</p>

<pre><code>
let data = [10,20,30,45];

let temp_data = data.map(val => {
  if (val > 20) {
    return val;
  }
});
</code></pre>

<p>
<b>Use case:</b>  
Specific data ne new array ma store karva (jem ke electronics products).
</p>

<hr>

<h2>map() – Real Life Examples</h2>

<h3>1. Double daily steps count</h3>
<pre><code>
const steps = [1000, 2000, 3000];
function doubleSteps(step) {
  return step * 2;
}
const newSteps = steps.map(doubleSteps);
console.log(newSteps);
</code></pre>

<h3>2. Convert minutes to seconds</h3>
<pre><code>
const minutes = [1, 5, 10];
const seconds = minutes.map(min => min * 60);
console.log(seconds);
</code></pre>

<h3>3. Add ₹50 delivery charge</h3>
<pre><code>
const prices1 = [200, 350, 500];
const finalPrices = prices1.map(price => price + 50);
console.log(finalPrices);
</code></pre>

<h3>4. Convert exam marks to Pass / Fail</h3>
<pre><code>
const marks = [35, 72, 88, 40];
function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}
const grades = marks.map(getGrade);
console.log(grades);
</code></pre>

<h3>5. Capitalize names</h3>
<pre><code>
const names = ['rahul', 'neha', 'amit'];
const formattedNames = names.map(
  name => name[0].toUpperCase() + name.slice(1)
);
console.log(formattedNames);
</code></pre>

<h3>6. Apply 10% discount</h3>
<pre><code>
const prices = [500, 1000, 1500];
function applyDiscount(price) {
  return price - price * 0.10;
}
const discounted = prices.map(applyDiscount);
console.log(discounted);
</code></pre>

<h3>7. Bonus points based on score</h3>
<pre><code>
const scores = [45, 60, 85];
const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
console.log(finalScores);
</code></pre>

<h3>8. Celsius to Fahrenheit</h3>
<pre><code>
const celsius = [0, 20, 30];
function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}
const fahrenheit = celsius.map(toFahrenheit);
console.log(fahrenheit);
</code></pre>

<h3>9. Generate table of numbers</h3>
<pre><code>
const numbers = [1, 2, 3, 4];
const tableOfTwo = numbers.map(num => num * 2);
console.log(tableOfTwo);
</code></pre>

<h3>10. Balance message formatting</h3>
<pre><code>
const balances = [500, 1200, 300];
const messages = balances.map(
  balance => `Your balance is ₹${balance}`
);
console.log(messages);
</code></pre>

<hr>
<h1>JavaScript filter() Method</h1>

<p>
Aa section ma JavaScript no <b>filter()</b> method
examples ane real-life use cases sathe explain karyo chhe.
</p>

<hr>

<h2>filter() shu chhe?</h2>

<p>
<b>filter()</b tyare use karvu jyare
<b>condition based ek new array create karvo hoy</b>.
</p>

<ul>
  <li>Condition <b>true</b> hoy → value new array ma add thase</li>
  <li>Condition <b>false</b> hoy → value add nahi thay</li>
</ul>

<hr>

<h2>Basic Example – Expensive Laptops</h2>

<pre><code>
let leptops_price = [15000,20000,30000,65000,99000,45000];

let expensive_laptops = leptops_price.filter(price => {
  if (price > 30000) return true;
});
</code></pre>

<p>
30000 thi vadhare price hase te value
new array ma store thase.
</p>

<hr>

<h2>filter() – Real Life Examples</h2>

<h3>1. Get Even Numbers</h3>
<p><b>Real life:</b> Even roll numbers find karva</p>

<pre><code>
const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
</code></pre>

<hr>

<h3>2. Filter Adults</h3>
<p><b>Real life:</b> Only adults ne allow karva</p>

<pre><code>
const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
</code></pre>

<hr>

<h3>3. Remove Empty Inputs</h3>
<p><b>Real life:</b> User input clean karva</p>

<pre><code>
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
</code></pre>

<hr>

<h3>4. Filter Passing Marks</h3>
<p><b>Real life:</b> Exam result system</p>

<pre><code>
const marks1 = [35, 72, 88, 40, 25];
const passedStudents = marks1.filter(mark => mark >= 40);
</code></pre>

<hr>

<h3>5. Get Affordable Prices</h3>
<p><b>Real life:</b> Shopping app price filter</p>

<pre><code>
const prices5 = [199, 499, 999, 1499, 299];
const affordable = prices5.filter(price => price <= 500);
</code></pre>

<hr>

<h3>6. Filter Long Words</h3>
<p><b>Real life:</b> Search keyword validation</p>

<pre><code>
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
</code></pre>

<hr>

<h3>7. Filter Positive Transactions</h3>
<p><b>Real life:</b> Bank credits only</p>

<pre><code>
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
</code></pre>

<hr>

<h3>8. Filter Scores in Range</h3>
<p><b>Real life:</b> Score selection</p>

<pre><code>
const scores9 = [45, 60, 85, 30, 90];
const selectedScores = scores9.filter(
  score => score >= 50 && score <= 90
);
</code></pre>

<hr>

<h3>9. Filter Shoe Brands</h3>
<p><b>Real life:</b> Show only selected brands</p>

<pre><code>
let shhose_brand = ["Skechers","Puma","Adidas","Nike"];

let shhose_brand_type = shhose_brand.filter(type => {
  if (type === "Puma" || type === "Nike")
    return true;
});
</code></pre>

<hr>
<p>
<b>filter()</b method thi tame
condition based data ne easily
<b>new array ma store</b> kari sako chho.
</p>
<h1>JavaScript reduce() Method</h1>

<p>
Aa section ma JavaScript no <b>reduce()</b> method
simple language ma ane real-life examples sathe explain karyo chhe.
</p>

<hr>

<h2>reduce() shu chhe?</h2>

<p>
<b>reduce()</b tyare use karvu jyare
<b>array mathi ek single value calculate</b> karvi hoy.
</p>

<p>
Example:
<ul>
  <li>Total price</li>
  <li>Sum of values</li>
  <li>Maximum / minimum value</li>
  <li>Count of items</li>
</ul>
</p>

<hr>

<h2>Basic Example – Total Price</h2>

<pre><code>
let totle_price = [15,68,45,58,52,48];

let final_price = totle_price.reduce((a5, val) => {
  return a5 + val;
}, 0);
</code></pre>

<p>
<b>Explanation:</b>
</p>

<ul>
  <li><b>a5</b> → accumulator (previous returned value)</li>
  <li><b>val</b> → array ni darek value</li>
  <li><b>0</b> → initial value of accumulator</li>
</ul>

<hr>

<h2>reduce() – Real Life Examples</h2>

<h3>1. Total Money in Wallet</h3>
<p><b>Real life:</b> All cash amounts add karva</p>

<pre><code>
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
</code></pre>

<hr>

<h3>2. Total Steps Walked in a Week</h3>
<p><b>Real life:</b> Fitness tracker</p>

<pre><code>
const steps9 = [3000, 5000, 4000, 6000];

function addSteps(total, step) {
  return total + step;
}

const weeklySteps = steps9.reduce(addSteps, 0);
</code></pre>

<hr>

<h3>3. Total Cart Price</h3>
<p><b>Real life:</b> Shopping bill</p>

<pre><code>
const prices9 = [499, 299, 199];
const totalPrice = prices9.reduce(
  (total, price) => total + price, 0
);
</code></pre>

<hr>

<h3>4. Find Maximum Score</h3>
<p><b>Real life:</b> Highest exam mark</p>

<pre><code>
const marks9 = [45, 88, 67, 92];

const highest = marks9.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks9[0]);
</code></pre>

<hr>

<h3>5. Count Total Characters</h3>
<p><b>Real life:</b> Text length calculation</p>

<pre><code>
const words9 = ['Hi', 'Hello', 'JS'];

const totalChars = words9.reduce(
  (count, word) => count + word.length, 0
);
</code></pre>

<hr>

<h3>6. Combine Words into a Sentence</h3>
<p><b>Real life:</b> Message builder</p>

<pre><code>
const words8 = ['Learning', 'JavaScript', 'is', 'fun'];

const sentence = words8.reduce(
  (text, word) => text + ' ' + word
);
</code></pre>

<hr>

<h3>7. Count Passed Students</h3>
<p><b>Real life:</b> Result summary</p>

<pre><code>
const marks6 = [35, 72, 88, 40, 25];

const passCount = marks6.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
</code></pre>

<hr>

<h3>8. Calculate Final Bank Balance</h3>
<p><b>Real life:</b> Bank account calculation</p>

<pre><code>
const transactions8 = [1000, -200, -300, 500];

const finalBalance = transactions8.reduce(
  (balance, amount) => balance + amount, 0
);
</code></pre>

<hr>

<h3>9. Build Comma-Separated String</h3>
<p><b>Real life:</b> Display values in UI</p>

<pre><code>
const items = ['Pen', 'Book', 'Pencil'];

const result = items.reduce(
  (text, item) => text + ', ' + item
);
</code></pre>
<hr>
<p>
<b>reduce()</b method powerful chhe ane
tame ek array mathi
<b>any type ni single value</b> easily calculate kari sako chho.
</p>

<h2>Q1. Shopping App – Discounted Total</h2>
  <p>Keep items costing more than 500, apply 10% discount, and find total:</p>
  <pre><code>
const prices12 = [200, 800, 1200, 450, 700];
const total = prices12
  .filter(price => price > 500)
  .map(price => price * 0.9)
  .reduce((sum, price) => sum + price, 0);
  </code></pre>

  <h2>Q2. Fitness App – Total Active Minutes</h2>
  <p>Keep days with &gt;30 minutes, convert to calories, sum total:</p>
  <pre><code>
const minutes10 = [20, 45, 60, 15, 90];
const totalCalories = minutes10
  .filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);
  </code></pre>

  <h2>Q3. Exam System – Average of Passed Marks</h2>
  <p>Keep passing marks (≥40) and calculate average:</p>
  <pre><code>
const marks10 = [35, 72, 88, 40, 25, 90];
const passed = marks10.filter(mark => mark >= 40);
const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;
  </code></pre>

  <h2>Q4. Salary System – Monthly Payout</h2>
  <p>Keep wages &gt;500, add 100 bonus, calculate total payout:</p>
  <pre><code>
const wages = [300, 800, 450, 1000, 600];
const totalPayout = wages
  .filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);
  </code></pre>

  <h2>Q5. Online Course – Completion Points</h2>
  <p>Keep lessons ≥50%, convert to points, sum total:</p>
  <pre><code>
const progress = [20, 50, 75, 40, 100];
const totalPoints = progress
  .filter(p => p >= 50)
  .map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);
  </code></pre>

  <h2>Q6. Bank Transactions – Final Balance</h2>
  <p>Keep credits, add 2% interest, calculate total:</p>
  <pre><code>
const transactions10 = [1000, -500, 2000, -300, 1500];
const creditedAmount = transactions10
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);
  </code></pre>

  <h2>Q7. Game App – Final Score</h2>
  <p>Keep scores &gt;50, add 10 bonus points, sum total:</p>
  <pre><code>
const scores10 = [30, 60, 90, 45, 80];
const finalScore = scores10
  .filter(score => score > 50)
  .map(score => score + 10)
  .reduce((sum, score) => sum + score, 0);
  </code></pre>

  <h2>Q8. E-commerce – Total Taxed Amount</h2>
  <p>Keep items &gt;1000, add 18% tax, calculate final amount:</p>
  <pre><code>
const prices4 = [500, 1200, 3000, 800, 1500];
const finalAmount = prices4
  .filter(price => price > 1000)
  .map(price => price * 1.18)
  .reduce((sum, price) => sum + price, 0);
  </code></pre>

  <h2>Q9. Attendance System – Reward Points</h2>
  <p>Keep days ≥8 hours, convert to points, sum total:</p>
  <pre><code>
const hours = [6, 8, 9, 7, 10];
const totalPoints10 = hours
  .filter(hour => hour >= 8)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);
  </code></pre>

  <h2>Q10. Interview Brain Teaser </h2>
  <p>Keep even numbers, square them, sum total:</p>
  <pre><code>
const numbers10 = [1, 2, 3, 4, 5, 6];
const sumOfSquares = numbers10
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);
  </code></pre>

<h1>JavaScript Array Methods & Operators</h1>

<p>
આ README માં JavaScript ના મહત્વના array methods અને operators
<code>find()</code>, <code>filter()</code>, <code>some()</code>, <code>every()</code>,
destructuring અને spread operator ને simple examples સાથે સમજાવવામાં આવ્યા છે.
</p>

<hr/>

<h2>1. Array.find()</h2>

<p>
<code>find()</code> method array માંથી condition match થતો
<strong>પહેલો element</strong> return કરે છે.
</p>

<ul>
  <li>Callback function નું return value return થતું નથી</li>
  <li>Array નો actual element return થાય છે</li>
  <li>First match મળતાં જ loop stop થઈ જાય છે</li>
</ul>

<pre><code>
let product = ["laptop","mobile","tablet","desktop","smart watch"];

let find_product = product.find((item) => {
  if (item === "mobile") {
    return true;
  }
  else if (item === "tablet") {
    return true;
  }
  else {
    return false;
  }
});
</code></pre>

<p><strong>Use case:</strong> Specific product name based search</p>

<hr/>

<h2>2. find() vs filter()</h2>

<p>
Shopping mall security example:
</p>

<pre><code>
let people = ["john","sara","mike","anna","david","sara"];

// find → first match only
let person = people.find(name => name === "sara");
console.log(person);

// filter → all matches
let allSara = people.filter(name => name === "sara");
console.log(allSara);
</code></pre>

<ul>
  <li><strong>find()</strong> → First "sara" જ return કરે</li>
  <li><strong>filter()</strong> → બધી "sara" ની list return કરે</li>
</ul>

<hr/>

<h2>3. Array.some()</h2>

<p>
<code>some()</code> check કરે છે કે array માં
<strong>ઓછામાં ઓછું એક item</strong> condition satisfy કરે છે કે નહીં.
</p>

<ul>
  <li>Output → <code>true</code> અથવા <code>false</code></li>
  <li>Condition true થતા જ loop stop</li>
</ul>

<pre><code>
let marks = [10, 20, 35, 90];

let result = marks.some(val => val > 85);
console.log(result);
</code></pre>

<p><strong>Use case:</strong> Cart માં કોઈ product out of stock છે કે નહીં</p>

<hr/>

<h2>4. Array.every()</h2>

<p>
<code>every()</code> check કરે છે કે
<strong>બધા elements</strong> condition satisfy કરે છે કે નહીં.
</p>

<pre><code>
let numbers = [20, 30, 90, 45];

let output = numbers.every(val => val < 40);
console.log(output);
</code></pre>

<ul>
  <li>બધા match → true</li>
  <li>એક પણ fail → false</li>
</ul>

<p><strong>Use case:</strong> બધા students pass છે કે નહીં</p>

<hr/>

<h2>5. some(), find(), filter(), every() Comparison</h2>

<pre><code>
let products = ["tablet","mobile","laptop","mobile"];
</code></pre>

<table border="1">
  <tr>
    <th>Method</th>
    <th>Condition</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>some()</td>
    <td>item === "mobile"</td>
    <td>true</td>
  </tr>
  <tr>
    <td>find()</td>
    <td>item === "mobile"</td>
    <td>"mobile"</td>
  </tr>
  <tr>
    <td>filter()</td>
    <td>item === "mobile"</td>
    <td>["mobile","mobile"]</td>
  </tr>
  <tr>
    <td>every()</td>
    <td>item === "mobile"</td>
    <td>false</td>
  </tr>
</table>

<hr/>

<h2>6. Array Destructuring</h2>

<p>
Destructuring નો ઉપયોગ કરીને array values ને
direct variables માં store કરી શકાય છે.
</p>

<pre><code>
let arr = [1,2,3,4,5];
let [j, , k] = arr;
console.log(k);
</code></pre>

<h3>User Data Example</h3>

<pre><code>
let user_data = ["test","test@gmail.com","male","surat"];

let [name, email, gender, city] = user_data;

console.log(name);
console.log(email);
console.log(gender);
console.log(city);
</code></pre>

<hr/>

<h2>7. Spread Operator (...)</h2>

<p>
Spread operator array અથવા object ની
<strong>copy બનાવે છે</strong>.
</p>

<pre><code>
let arr1 = [1,2,3,4,5];
let arr2 = [...arr1];
</code></pre>

<h3>Merge Arrays</h3>

<pre><code>
let temp_arr1 = [1,2,3];
let temp_arr2 = [3,4,5];

let mix_arr = [...temp_arr1, ...temp_arr2];
</code></pre>

<ul>
  <li><code>...</code> function માં → rest operator</li>
  <li><code>...</code> array/object માં → spread operator</li>
</ul>

<hr/>

<p><strong>Happy Learning JavaScript 🚀</strong></p>
