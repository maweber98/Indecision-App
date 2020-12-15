console.log('ES6 arrow functions');

function getSquareRoot(num) {
    return num * num;
}

// const getSquareRoot2 = (num) => {
//     return num * num;
// }

const getSquareRoot2 = (num) => num * num;


const getFirstName = (name) => {
    return name.split(' ')[0];
}

const getFirstName2 = (name) => name.split(' ')[0];

console.log(getFirstName2('Mark Weber'));
