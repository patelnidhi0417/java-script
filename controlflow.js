// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else-if else)
// if (condition) {})
if (12 < 13) {
 console.log(true);
}

if (15 < 13) {
 console.log(true);
} // condition is false that why if statement not run

if (!12) {
 console.log("number");
}
 // if-else Statement
if (12 < 13) {
 console.log(true);
} else {
 console.log(false);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run
else {
 console.log(false);
}

if (!12) {
 console.log("number");
} else {
 console.log("Not A Number");
}

// if-else if-else Statement
/*
if (condition) {
} else if (condition) {
 } else{}
*/
let loggedin = true;
let admin = false;
if (loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}

//switch case statement
switch ('A') { // value-> Case value sathe match karshe
    case 'A':
        console.log("A")
    break;
    case 'B':
        console.log("B")
    break;
    case 'C':
        console.log("C")
    break;
    default:
        console.log("D")
    break;
}

switch ('First50') { // value-> Case value sathe match karshe
    case 'First50':
        console.log("50% off on first order")
    break;
    case 'BOGO':
        console.log("Buy one get one free")
    break;
    case 'BlackFriday':
        console.log("It's black friday sale-get at rs.50")
    break;
    default:
        console.log("Offer not valid")
    break;
}
//Early return pattern
function score (value) {
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
score(100);

function score1 (value) {
 if (value > 90) return "Value is more than 90";
else if (value < 80) return "Value is less than 80";
else if (value < 70) return "Value is less than 70";
else if (value < 60) return "Value is less than 60";
else return "Value is less than 60";
}

function score2 (value) {
 if (value < 60) return "Value is less than 60";
else if (value < 70) return "Value is less than 70";
else if (value < 80) return "Value is less than 80";
else if (value < 90) return "Value is less than 90";
else return "Value is more than 90";
}

function rps (user, computer){
    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    if(user === "scissor" && computer === "rock") return "computer wins"
    if(user === "rock" && computer === "paper") return "computer wins"
    if(user === "paper" && computer === "scissor") return "computer wins"
    return "it's a tie"
}

function rps (user, computer){
    if(user === computer) return "it's a tie";

    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    return "computer wins";
}