
// 🚀 JavaScript Fundamentals Assignment

// 🎯 Part 1: Variables, Data Types, Operators & Conditionals
let age = 20; // Example variable
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Capture user input and greet (DOM + conditionals combined below)

// ❤ Part 2: Functions
// Function 1: Greeting function
function greetUser(name) {
    if (name.trim() === "") {
        return "Please enter your name.";
    }
    return "Hello, " + name + "! Welcome to the JavaScript world.";
}

// Function 2: Calculate total
function calculateTotal(prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}

console.log("Total Price:", calculateTotal([10, 20, 30])); // Debugging in console

// 🔁 Part 3: Loops
// Example 1: Countdown using while loop
function countdown(num) {
    let result = "";
    while (num >= 0) {
        result += num + " ";
        num--;
    }
    return result;
}

// Example 2: Displaying fruits using forEach loop
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Part 4: DOM Manipulation
const greetBtn = document.getElementById("greetBtn");
const output = document.getElementById("output");
const countdownDisplay = document.getElementById("countdown");
const fruitList = document.getElementById("fruitList");

greetBtn.addEventListener("click", function() {
    let name = document.getElementById("username").value;
    
    // DOM Interaction 1: Display greeting
    output.textContent = greetUser(name);

    // DOM Interaction 2: Show countdown
    countdownDisplay.textContent = "Countdown: " + countdown(5);

    // DOM Interaction 3: Dynamically display fruit list
    fruitList.innerHTML = ""; // Clear old list
    fruits.forEach(fruit => {
        let li = document.createElement("li");
        li.textContent = fruit;
        fruitList.appendChild(li);
    });
});