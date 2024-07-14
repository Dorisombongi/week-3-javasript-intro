// Defining functions for simple operations

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract one number from another
function subtract(a, b) {
    return a - b;
}

// Function to divide one number by another
function divide(a, b) {
    if (b === 0) {
        console.log("Division by zero is not allowed.");
        return null;
    }
    return a / b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// DOM manipulation and event listeners
document.getElementById('showProductButton').addEventListener('click', function() {
    var input = document.getElementById('productNameInput').value;
    var details = document.getElementById('productDetails');
    var product = products.find(p => p.name === input);
    if (product) {
        details.textContent = product.name + " costs $" + product.buyingPrice + " to buy and $" + product.sellingPrice + " to sell.";
        details.classList.remove('hidden');
    } else {
        details.textContent = "Product not found.";
        details.classList.remove('hidden');
    }
});

document.getElementById('addButton').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var result = add(num1, num2);
    document.getElementById('result').textContent = "Result: " + result;
});

document.getElementById('subtractButton').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var result = subtract(num1, num2);
    document.getElementById('result').textContent = "Result: " + result;
});

document.getElementById('multiplyButton').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var result = multiply(num1, num2);
    document.getElementById('result').textContent = "Result: " + result;
});

document.getElementById('divideButton').addEventListener('click', function() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var result = divide(num1, num2);
    if (result !== null) {
        document.getElementById('result').textContent = "Result: " + result;
    } else {
        document.getElementById('result').textContent = "Error: Division by zero.";
    }
});

// Adding a new product and updating the chart
document.getElementById('addProductButton').addEventListener('click', function() {
    var newProductName = document.getElementById('newProductName').value;
    var newBuyingPrice = parseFloat(document.getElementById('newBuyingPrice').value);
    var newSellingPrice = parseFloat(document.getElementById('newSellingPrice').value);

    var newProduct = {
        name: newProductName,
        buyingPrice: newBuyingPrice,
        sellingPrice: newSellingPrice
    };

    products.push(newProduct);
    updateChart();
    updateTable();
});
