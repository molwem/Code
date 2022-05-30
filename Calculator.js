
var memoryLastNumber = ""
var memoryCurrentNumber = ""
var currentOperater =""

function inputDigit(button) {
    let value = button.target.value
    memoryCurrentNumber = memoryCurrentNumber + value.toString()  
    updateDisplay()
}

function add() {
    currentOperater = "+"
    memoryLastNumber = memoryCurrentNumber;
    memoryCurrentNumber = ""
    updateDisplay()
}

function subtract() {
    currentOperater = "-"
    memoryLastNumber = memoryCurrentNumber;
    memoryCurrentNumber = ""
    updateDisplay()
}

function multiply() {
    currentOperater = "*"
    memoryLastNumber = memoryCurrentNumber;
    memoryCurrentNumber = ""
    updateDisplay()
}

function divide() {
    currentOperater = "/"
    memoryLastNumber = memoryCurrentNumber;
    memoryCurrentNumber = ""
    updateDisplay()
}

function equals() {
    if (currentOperater == "+") {
        memoryCurrentNumber = parseInt(memoryLastNumber) * parseInt(memoryCurrentNumber)
        memoryCurrentNumber = memoryCurrentNumber.toString()
        memoryLastNumber = ""
    }
    else if (currentOperater == "-") {
        memoryCurrentNumber = parseInt(memoryLastNumber) * parseInt(memoryCurrentNumber)
        memoryCurrentNumber = memoryCurrentNumber.toString()
        memoryLastNumber = ""
    }
    else if (currentOperater == "*") {
        memoryCurrentNumber = parseInt(memoryLastNumber) * parseInt(memoryCurrentNumber)
        memoryCurrentNumber = memoryCurrentNumber.toString()
        memoryLastNumber = ""
    }
    else if (currentOperater == "/") {
        memoryCurrentNumber = parseInt(memoryLastNumber) / parseInt(memoryCurrentNumber)
        memoryCurrentNumber = memoryCurrentNumber.toString()
        memoryLastNumber = ""
    }
    updateDisplay()
}

function updateDisplay() {
    document.getElementById("calculator").value = parseInt(memoryCurrentNumber);
}

let button1 = document.querySelector("#butt1")
button1.addEventListener("click", inputDigit)

let button2 = document.querySelector("#butt2")
button2.addEventListener("click", inputDigit)

let button3 = document.querySelector("#butt3")
button3.addEventListener("click", inputDigit)

let button4 = document.querySelector("#butt4")
button4.addEventListener("click", inputDigit)

let button5 = document.querySelector("#butt5")
button5.addEventListener("click", inputDigit)

let button6 = document.querySelector("#butt6")
button6.addEventListener("click", inputDigit)

let button7 = document.querySelector("#butt7")
button7.addEventListener("click", inputDigit)

let button8 = document.querySelector("#butt8")
button8.addEventListener("click", inputDigit)

let button9 = document.querySelector("#butt9")
button9.addEventListener("click", inputDigit)

let button0 = document.querySelector("#butt0")
button0.addEventListener("click", inputDigit)

let buttonDivide = document.querySelector("#buttDivide")
buttonDivide.addEventListener("click", divide)

let buttonX = document.querySelector("#buttX")
buttonX.addEventListener("click", multiply)

let buttonPlus = document.querySelector("#buttPlus")
buttonPlus.addEventListener("click", add)

let buttonMinus = document.querySelector("#buttMinus")
buttonMinus.addEventListener("click", subtract)

let buttonEquals = document.querySelector("#buttEqual")
buttonEquals.addEventListener("click", equals)
