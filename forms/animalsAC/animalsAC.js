// animals EC

myAnimals = ["dog", "cat", "horse", "meerkat"]

for (i = 1; i <=2; i++) {
    newAnimal = prompt("Enter an animal")
    myAnimals.push(newAnimal.toLowerCase())

    console.log(`The last animal is a/an ${myAnimals[myAnimals.length - 1]}.`)
}