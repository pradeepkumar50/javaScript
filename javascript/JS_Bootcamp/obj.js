//object constructor
var user = new Object();
console.log(user);

// object

var myUser = {};
console.log(myUser);

var data = {
    id : 495,
    college : "vbit",
    job : "software engineer",
    "area stay": "lb nagar"
}
console.log(data);
console.log(data.college, data.job);

data.rank = "topper";
console.log(data);
delete data.id;
console.log(data, '123');

// using multiword property names;
console.log(data["area stay"]);

// shorthand properties

function shop(rod, cost) {
    return {
        rod,
        cost,
    }
}

let result = shop("pipe", 200);
console.log(result);

let obj = {};
obj.__proto__ = 5;
console.log(obj.__proto__);

// for in loop

let phone = {
    price: 5000,
    model: "15 pro max",
    color: "red",
    ram: 16
};

for(let res in phone) {
console.log(res);
console.log((phone[res]))
};

