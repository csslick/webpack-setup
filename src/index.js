import sub from './sub.js';
import css from './style.css';
import $ from 'jquery';

console.log('hello webpack!');
document.getElementById('root').innerHTML = sub();

$('body').append('<p>hello jquery</p>');