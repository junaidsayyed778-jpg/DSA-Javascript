let prompt = require("prompt-sync")();


/*let age = Number(prompt("Enter your age : "));
if (age >= 18) {
  console.log("valid voter");
} else {
  console.log("Invalid voters");
}*/

//Q1 : Accept an integer and check whether it is an even number or odd
/*let n = Number(prompt("Enter a number"));
if (n % 2 == 0) console.log("given number is even");
else console.log("given number is odd");*/

//Q2 : Check year is leap
/*let year = Number(prompt("Enter a year "));
if (year % 4 == 0 && year % 100 != 0) console.log("leap year");
else if (year % 400 == 0) console.log("leap year");
else console.log("no leap year");*/

//Q3 : 
/*let amount = Number(prompt("Enter amount : "))
let dis = 0;
if(amount>0 && amount<=5000) dis = 0;
else if(amount>=5000 && amount<=7000) dis=5;
else if(amount>=7000 && amount<=9000) dis=10;
else dis = 20;

console.log("payable amount : "+ (amount - (dis * amount) / 100))*/

function greaterNumber(){
  if(a > b){
    return a;
  }else if(b > a){
    return b;
  }else{
    return "both are same"
  }
}

let a = 10;
let b = 5;
console.log(greaterNumber(a, b));


