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
←→
<p>let nm = "name"; </p>
<p>Answer or Error:Error </p>
<p>Why: we print console before initialization & use let keyword for decalare variable </p>
</div>


<div>
<h3>Example 2:</h3>
<p>console.log(b);</p>
<p>var b= "username"; </p>
<p>Answer or Error:Answer(Undefined) </p>
<p>Why: we print console before initialization & use var keyword for decalare variable  </p>
</div>

<div>
<h3>Example 3:</h3>
<p>var x = 1;</p>
<p>{
var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error:Answer(2) </p>
<p>Why: var keyword used so declared block scope </p>
</div>

<div>
<h3>Example 4:</h3>
<p>let a = 10; </p>
<p>{
let a = 20;
console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error:Answer(inside:20 , outside:10) </p>
<p>Why: first print block scope and after print globel scope </p>
</div>

<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; </p>
<p>person = {}; X </p>
<p>Answer or Error: </p>
<p>Why: </p>
</div>