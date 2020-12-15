console.log('ES6 Classes 1');

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, my name is ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age) 
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.major) {
            description += ` My major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I am from ${this.homeLocation}!`;
        }
        return greeting;
    }
}

const me = new Traveler('Mark Weber', 48, 'Alliance, Ohio');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());


//babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public