import React from 'react';
import ReactDOM, { render } from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


console.log('Indecision App!.....');

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));