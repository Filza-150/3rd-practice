const user1 = +prompt("Enter a first number");
const user2 = +prompt("Enter a second number");

function calculate(a, b) {
    console.log("Addition:", a + b)
    console.log("Multiplication:", a * b)
    
    if (b !== 0) {
        console.log("Division:", a / b)
    } else {
        console.log("Division: Cannot divide by zero")
    }
}

calculate(user1, user2)

