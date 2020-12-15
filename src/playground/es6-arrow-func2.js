console.log('Arrow functions');
// Arrow functions do not have access to arguments not longer bound
// ES5 function
// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

// ES6 arrow function
// const add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };

// console.log(add(55,1, 101));

// This keyword is no longer  bound

const user = {
    name: 'Mark',
    cities: ['Alliance', 'Damascus', 'Minerva'],
    printCitiesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + ' !');
    }
};

console.log(user.printCitiesLived());

// Challenge

const multiplier = {
    numbers: [1, 3, 8],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());