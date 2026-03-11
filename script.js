

/*************************************************************
 🔥 JAVASCRIPT PRACTICE TEMPLATE
 Topics: map | filter | reduce | localStorage
 Fill in the solution sections only.
*************************************************************/


/* ==========================================================
   🟢 SECTION 1 — MAP()
========================================================== */

// 1️⃣ Double the numbers
const numbers1 = [2, 4, 6, 8];

const doubledNumbers = numbers1.map((num) => {
    // 🔥 WRITE YOUR LOGIC HERE
    return num * 2;
});

console.log("Doubled Numbers:", doubledNumbers);
// Expected: [4, 8, 12, 16]


// 2️⃣ Convert names to uppercase
const names = ["kid", "crimson", "coder"];

const upperNames = names.map((name) => {
    // 🔥 WRITE YOUR LOGIC HERE
    return name.toUpperCase();
});

console.log("Uppercase Names:", upperNames);
// Expected: ["KID", "CRIMSON", "CODER"]


// 3️⃣ Extract only names from objects
const users1 = [
    { name: "Kid", age: 21 },
    { name: "Crisis", age: 22 }
];

const onlyNames = users1.map((user) => {
    // 🔥 WRITE YOUR LOGIC HERE
    return user.name;
});

console.log("Only Names:", onlyNames);
// Expected: ["Kid", "Crisis"]


// 4️⃣ Add isAdult property
const users2 = [
    { name: "Kid", age: 21 },
    { name: "Dev", age: 15 }
];

const usersWithAdultFlag = users2.map((user) => {
    // 🔥 Return new object with isAdult property
    return user.isAdult = false;
});

console.log("Users with isAdult:", usersWithAdultFlag);


/* ==========================================================
   🟢 SECTION 2 — FILTER()
========================================================== */

// 1️⃣ Get even numbers
const numbers2 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers2.filter((num) => {
    // 🔥 WRITE YOUR LOGIC HERE
    return num % 2 == 0;
});

console.log("Even Numbers:", evenNumbers);
// Expected: [2, 4, 6]


// 2️⃣ Numbers greater than 10
const numbers3 = [5, 12, 8, 20, 3];

const greaterThanTen = numbers3.filter((num) => {
    // 🔥 WRITE YOUR LOGIC HERE
    return num > 10;
});

console.log("Greater than 10:", greaterThanTen);
// Expected: [12, 20]


// 3️⃣ Filter active users
const users3 = [
    { name: "Kid", active: true },
    { name: "Crisis", active: false },
    { name: "Dev", active: true }
];

const activeUsers = users3.filter((user) => {
    // 🔥 WRITE YOUR LOGIC HERE
    return user.active == true;
});

console.log("Active Users:", activeUsers);


/* ==========================================================
   🟢 SECTION 3 — REDUCE()
========================================================== */

// 1️⃣ Sum of numbers
const numbers4 = [10, 20, 30, 40];

const totalSum = numbers4.reduce((acc, curr) => {
    // 🔥 WRITE YOUR LOGIC HERE
    return acc + curr;
}, 0);

console.log("Total Sum:", totalSum);
// Expected: 100


// 2️⃣ Find maximum number
const numbers5 = [5, 12, 99, 3];

const maxNumber = numbers5.reduce((acc, curr) => {
    // 🔥 WRITE YOUR LOGIC HERE
    return acc > curr ? acc : curr
});

console.log("Max Number:", maxNumber);
// Expected: 99


// 3️⃣ Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
    // 🔥 WRITE YOUR LOGIC HERE
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;


}, {});

console.log("Fruit Count:", fruitCount);
// Expected: { apple: 3, banana: 2, orange: 1 }


/* ==========================================================
   🟢 SECTION 4 — COMBO (filter + reduce)
========================================================== */

const users4 = [
    { name: "Kid", age: 21, active: true },
    { name: "Dev", age: 17, active: true },
    { name: "Crisis", age: 25, active: false }
];

// 🔥 Filter active users above 18
// 🔥 Then reduce to total age
const adult = users4.filter((u) => {
    return u.age > 18 && u.active == true;
})
const totalAge = adult.reduce((acc, curr) => {
    return acc + curr.age;
}, 0);

console.log("Total Age:", totalAge);
// Expected: 21


/* ==========================================================
   🟢 SECTION 5 — LOCAL STORAGE
   Run in browser (NOT Node.js)
========================================================== */

// 1️⃣ Save user to localStorage
const user = {
    name: "Kid",
    age: 21
};

// 🔥 Save user in localStorage
// localStorage.setItem("user", JSON.stringify(user));


// 2️⃣ Retrieve user from localStorage
// localStorage.getItem("user")
// 🔥 Get user and convert back to object
// localStorage.getItem(JSON.parse("user"))


/*************************************************************
 🟢 SECTION 6 — CART CHALLENGE (REAL WORLD)
*************************************************************/

const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 }
];


/* ----------------------------------------------------------
   1️⃣ Calculate total cart price using reduce()
---------------------------------------------------------- */

// TODO:
// - Use reduce()
// - total = price * quantity for each item
// - Return final total

const cartTotal = cart.reduce((acc, curr) => {
    return acc + (curr.price * curr.quantity);
}, 0); // replace null

console.log("Cart Total:", cartTotal);
// Expected: 52000


/* ----------------------------------------------------------
   2️⃣ Filter items under ₹2000
---------------------------------------------------------- */

// TODO:
// - Use filter()
// - Return items with price < 2000

const affordableItems = cart.filter((curr) => {
    return curr.price < 2000;
}); // replace null

console.log("Affordable Items:", affordableItems);
// Expected: [{ name: "Mouse", price: 1000, quantity: 2 }]


/* ----------------------------------------------------------
   3️⃣ Add totalItemPrice using map()
---------------------------------------------------------- */

// totalItemPrice = price * quantity

// TODO:
// - Use map()
// - Return new object (DO NOT mutate original)
// - Add totalItemPrice property

const updatedCart = cart.map((c) => {
    return {
        ...c,
        totalItemPrice: c.price * c.quantity
    }
}); // replace null

console.log("Updated Cart:", updatedCart);


/* ----------------------------------------------------------
   4️⃣ Save cart to localStorage
---------------------------------------------------------- */

// TODO:
// - Convert updatedCart to JSON
// - Save in localStorage with key "cart"


/* ----------------------------------------------------------
   5️⃣ Retrieve cart and calculate total again
---------------------------------------------------------- */

// TODO:
// - Get cart from localStorage
// - Parse JSON
// - Use reduce() to calculate total again
// const carty = localStorage.getItem("cart");
// const storedCartTotal = carty.reduce((acc, curr) => {
//     return acc + (curr.price * curr.quantity);
// }, 0); // replace null

// console.log("Stored Cart Total:", storedCartTotal);


// 1️⃣ Add Two Numbers
const add = (a,b) =>{
    return a + b;
}

console.log(add(1,2));

// Get Full Name

const fullName = (first, last) => {
    return first + " " + last;
}

console.log(fullName("Aditi", "Singh"));

// Double Numbers

const double = (arr) => {
    const newarr = [...arr]
    for(let i = 0; i < arr.length; i++){
        newarr[i] = arr[i] * 2;
    }
    return newarr;
}

const rr = [2,6,3,8,9];
console.log(double(rr));  
console.log(rr)  ;

// Update User Age

const updateAge =(user, age) => {
    return{
        ...user,
        age: age
    }
}

const us = {
    name: "Aditi",
    age: 18
}

console.log(updateAge(us, 19));

// first class function : can be stored as var and passed as arg in another functions

const greet = (name) => {
    return `Hello ${name}`;
}

const sayHello = (greet, name) => {
    return greet(name);
}

console.log(sayHello(greet, "Aditi"));


// pure functions:

const calaculateTax = (tax, amt) => {
    const finalPrice = amt + (amt *tax);
    return finalPrice;
}

// convert the follwing to pure


function increaseScore(currentScore, points) {
  return currentScore + points;
}

function dd(x,y){
    return x+y;
}

function mltiply(x,y){
    return x*y;
}

function FOF(a,b,operation){
    return operation(a,b);
}
  // HOF
function multiple(x){
    return function(n){
        return n*x;
    }
}


// functional Programming

function evenNumber(arr1){
    const e  = arr1.filter((n) => n%2==0);
    return e.reduce((acc, curr) => acc+curr, 0);
}

// anonymous Function

let multiply = (a,b) => a*b;

let a = (a,b)=>{
    return a+b;
}

//IIFE

(function(){
    console.log(name);
})("Jhon");

// callback

function getData(callback){
    settimeout(() => {
        console.log("data recived");
        callback();
    }, 2000)
}

getData(() => {
    console.log("processed data")
})