// alert("something is wrong");

//alerts
console.error("this is an error");
console.warn("this is a warning");

//prompts
// let fn = prompt("enter your first name");
// let sn = prompt("enter your second name");
// let fullname = "welcome" +" " + fn +" " + sn;
// alert(fullname);

console.log("hello world");

let name = "google";
console.log(`my name is ${name}.`);

console.log("airthematic operator");
//airthematic operator
let a=10;
let b=20;
console.log(a+b , a-b , a*b, a/b, a%b, a**b);

console.log("unary ")
//unary 
console.log(a++); //10
console.log(a); //11
console.log(++a); //12
console.log(a); //12

console.log("assignement operator")
//assignement operator
console.log(a=b);   // a is assign to b

console.log("relational operator")
//relational operator
let age = 18;
console.log(age > 18);  //false
console.log(age >= 18);  //true
console.log(age < 18);  //false
console.log(age <=  18);  //true
console.log(age == 18);  //true
console.log(age != 18);  //false

let x=5;  //number type
let str ="5" //string type
console.log(x == str);

console.log("triple equal to")
//triple equal to
console.log("123" === 123);
console.log(0 === false);
console.log(0 === ' ');
console.log(null === undefined);

console.log("if statement");
let ages = 23;

if(age >= 18){
    console.log("u can vote");
    let z = 10;
    console.log(2 * z);
}

if(age >= 20){
    console.log("yu are in your 20s");
}
console.log("practice question");
let color = "yellow";

if(color === "red"){
    console.log("stop");
}
if(color === "yellow"){
    console.log("slow down");
}
if(color === "green"){
    console.log("go ");
}
//else if statement
let num =0;
if(num > 0){
    console.log("positive");
}
else if(age < 0){
    console.log(negative);
}
else{
    console.log("zero");
}
//practice question
let size = "XL";

if(size === "XL"){
    console.log(250);
}
else if(size === "L"){
    console.log(200);
}
else if(size === "M"){
    console.log(100);
}
else if(size === "S"){
    console.log(50);
}
else{
    console.log("no exits");
}

//nested if-else
let mark = 78;
if(mark >= 33){

    if(mark >= 80){
        console.log("O");
    }
    else{
        console.log("A");
    }
}
else{
    console.log("better luck next time");
}

//logical operator
let m =20;

if(m >= 0 && m<=20){
    console.log("pass");
    console.log("A+");
}

//practice question

let str1 ="apple";

if((str1[0] === "a") && (str1.length>3)){
    console.log("good string");
}
else{
    console.log("not a good string");
}
let numb = 12;
if( (numb % 3 == 0) && ((numb+1 == 15)|| (numb-1 == 11)) ){
    console.log("safe");
}
else{
    console.log("unsafe");
}
//truthy and falsy
if(false){
    console.log("it has true value");
}
if(0){
    console.log("it has true value");
}
if(-0){
    console.log("it has true value");
}
if(""){
    console.log("it has true value");
}
if(null){
    console.log("it has true value");
}
if(undefined){
    console.log("it has true value");
}
if(1){
    console.log("only 1 have true value");
}
let str2 = "";
if(str2){
    console.log("string is not empty");
}else
    {
    console.log("string is empty");
}
//switch case
let card = "blue";

switch(card){
    case "red":
        console.log("stop");
        break;
    case "yellow" :
        console.log("slow down");
        break;
    case "green" :
        console.log("go");
        break;
    default:
        console.log("color break down");
}
//practice question
let day = 7;

switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("mwednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("number breakdown");
}

//assignment quesion
let div = 70;
if( div % 10 == 0){
    console.log("good");
}
else{
    console.log("bad");
}

let user = prompt("enter your name");
let aged = prompt("enter your age");
let info =`${user} is ${aged} years old`;
alert(info);

let stringss = "alphabetat";

if((stringss[0] == 'a') || (stringss[0] == 'A') && strings.length > 5){
    console.log("golden string");
}
else{
    console.log("not a golden string");
}

