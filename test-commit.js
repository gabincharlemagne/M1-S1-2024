console.log('Hello World ');

// //1
// let a = 5;
// let b = 10;
// let temp;

// temp = a;
// a = b;
// b = temp;

// console.log('a:', a); // a: 10
// console.log('b:', b); // b: 5

// //2
// function multiply(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('Both arguments must be numbers');
//     }
//     return x * y;
// }

// try {
//     console.log(multiply(3, 4)); // 12
//     console.log(multiply(3, '4')); // Error: Both arguments must be numbers
// } catch (error) {
//     console.error(error.message);
// }

//3 Ecrire une fonction qui salue un utilisateur, en prenant son nom en entrée

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function greetUser(name) {
//     console.log(`Bonjour, ${name} !`);
// }

// rl.question('Quel est votre nom ? ', (answer) => {
//     greetUser(answer);
//     rl.close();
// });

//4 Ecrire une fonction qui nous renvoie la parité d’un nombre (true si le nombre est pair, false si le nombre est impair)

// function isEven(number) {
//     if (typeof number !== 'number') {
//         throw new Error('Argument must be a number');
//     }
//     return number % 2 === 0;
// }

// // Test cases
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false
// console.log(isEven(0)); // true
// console.log(isEven(-2)); // true
// console.log(isEven(-3)); // false

// Ecrire une fonction qui prend un object en paramètre, et qui met la propriété “age” à 30. Logger le résultat ainsi que la variable que vous lui passez après que la fonction soit exécutée.

function setAgeTo30(person) {
    person.age = 30;
    return person;
}

// Test cases
const MyPerson = { name: 'Alice', age: 25 };
const MyResult = setAgeTo30(MyPerson);
console.log(MyPerson);
console.log(MyResult);

