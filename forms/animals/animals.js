// animals form 1

let myAnimals = ["dog", "cat", "horse", "meerkat"]

let newAnimal = prompt("Enter an animal")
myAnimals.push(newAnimal.toLowerCase())

console.log(`The last animal is a/an ${myAnimals[myAnimals.length - 1]}.`)