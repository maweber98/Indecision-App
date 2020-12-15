import React from 'react';
import ReactDOM, { render } from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


console.log('Indecision App!....');

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi my name is ${this.name}`;
//     }
// }

// const olderSyntax = new OldSyntax();
// const greeting = olderSyntax.getGreeting;
// console.log(greeting());

// class NewSyntax {
//     name = 'Jennifer';
//     getGreeting = () => {
//         return `Hi my name is ${this.name}`
//     }
// }

// const newerSyntax = new NewSyntax();
// const newGreeting = newerSyntax.getGreeting;
// console.log(newGreeting());