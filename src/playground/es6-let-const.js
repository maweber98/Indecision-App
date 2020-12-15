var nameVar = 'Mark';
var nameVar = 'Bill';
console.log('nameVar', nameVar);

let nameLet = 'Julie';
nameLet = 'Marcie';
console.log('nameLet', nameLet);

const nameConst = 'Mandy';
// nameConst = 'Jennifer';
console.log('nameConst', nameConst);


// Block scoping
const fullName = 'Mark Weber';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
