"use strict"
console.log("I'm JavaScript !!!");
var x = 25;
document.write(x);
// variables are used to store data.
let firstName;
firstName = "pradeep kumar kairamkonda";
console.log(firstName);
// multiple variables in single line
let marks, id, college;
marks = 100;
id = 495;
college = "Auburn University";
console.log(marks, id, college);

let veg = "potato";
veg = "okra";
console.log(veg);

let bulb = "lg";
let tube = "havells";
bulb = tube;
console.log(bulb, tube);
// output = havells

let admin, userName;
userName = "John";
admin = userName;
//alert(admin);

// data types

let laptopName = "lenovo"
console.log("Pradeep is using " + `${laptopName}`+ " laptop");

let phoneNumber = 217512;
console.log(`${1}`);
console.log(`${phoneNumber}`);
console.log(`${'phoneNumber'}`);

// browser functions

/* alert("pradeep kumar kairamkonda");
prompt("please enter your age", 25);
var boss = confirm('Are you manager');
alert(boss); */

// type conversions
/* var goal = "full stack developer";
console.log(typeof goal);
var number = 195;
console.log(typeof number);
var number2 = '195';
console.log(typeof number2);
number2 = (Number(number2));
console.log(number2, typeof number2); */

// falsy values
//0, null, undefined, "", Nan;

var counter = 1;
console.log(counter++);
counter = counter++;
console.log(counter);

// if statement

/* let user = prompt("Enter a script");

if(user == "ECMAScript") {
    alert("Right!");
} else {
    alert("You don’t know? ECMAScript!");
}
 */

// convert in terinary operator
/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

/* let login = prompt("Enter a login type"); 
let message = (login == "Employee") ? "Hello":
              (login == "Director") ? "Greetings":
              (login == "") ? "No Login":
              "Please enter correct login type";
alert(message); */

// switch

/* let price = 45;

switch(price) {
    case 24 :
    alert("wrong");
    break;
    case 45 :
    alert("right");
    break;
    default:
    alert("Invalid Input");
} */

