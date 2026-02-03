//array --- hold multiple values at same time 
// [1, 2, 3, 4, 5]
//["hello","a","b"]
//[2,"a",5,"hello"]

//create
//define a variable = [multiple values]
let arr = [1,2,3,4];

//access
//position = [0 1 2 3]
//array_name[position]
//arr[3],arr[2]

//modify
//array_name[position]=new value

//array methods:(variable_name.method_name)
//push,pop,shift,unshift,splice,slice,reverse,sort

//push --> enter new value into arry -- place into last
arr.push(5);

//variable || function.method --> koi variable ke function in pachar dot(.) kari ne lakho ae method
//use case -- enter new products into existing products list
let product1=["TV","Leptop","Mobile","AC"];

//pop --> remove last value
product1.pop()
//use case -- remove last product

//shift -- remove first value
arr.shift()
//use case -- remove first products

//unshift -- add value into array -- first value add
arr.unshift()
//use case -- add first products 

//splice - remove value into array -- specific position and specific number of value
//into() - first index(position),how many value you want to remove
let e=[50,60,30,10,40];
e.splice(3,2);
//use case -- remove products

//slice -- copy value from array -- specific position and specific number of values
//new variable = array_name.slice(start index,end index)
//start index -- include into copy
//end index -- not include into copy
let all_product=["TV","Leptop","Mobile","AC"];
let new_product=all_product.slice(0,2);
//use case -- copy specific data and save it into new variable
//generate a report based on data and generate a file or save the file into your local machine

//splice vs slice
//splice -- remove value 
//slice -- copy value

//reverse -- reverse value of array
let g=[25,30,35,40,85];
g.reverse();
//use case-- show latest update first into your fronted

//sort -- set into ascending order
let r=[60,25,40,30];
r.sort();

let h1=[11,62,3,4,25];
let sr1=h1.sort(function(a,b){
return a - b;//ascending order
}) 

let h2=[11,62,3,4,25];
let sr2=h2.sort(function(a,b){
return b - a;//decending order
}) 