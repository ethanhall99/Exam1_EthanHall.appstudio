// calculations

let numberOne = Number(prompt("Enter a first number:"))
let numberTwo = Number(prompt("Enter a second number:"))
let numberThree = Number(prompt("Enter a third number:"))

function AvgSquare(x,y,z) {
    let square = x ** 2
    let avg = (x+y+z)/3
    return avg*square
}

let answer = AvgSquare(numberOne, numberTwo, numberThree)

console.log(`The answer is: ${answer}.`)