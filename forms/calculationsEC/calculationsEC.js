// calculatins EC

let userChoice = confirm("Click OK for average. Click Cancel for remainder.")

numberOne = Number(prompt("Enter a first number:"))
numberTwo = Number(prompt("Enter a second number:"))
numberThree = Number(prompt("Enter a third number:"))

function AvgSquare(x,y,z) {
    let square = x ** 2
    let avg = (x+y+z)/3
    return avg*square
}

function divideTwo(x,y) {
    return x%y
}

if (userChoice === true) {
    let answerAvg = AvgSquare(numberOne, numberTwo, numberThree)
    console.log(`The answer is: ${answerAvg}.`)
} else {
    let answerRemainder = divideTwo(numberOne, numberTwo)
    console.log(`The answer is: ${answerRemainder}.`)
}
