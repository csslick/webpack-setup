import sub from './sub.js';
import css from './index.css';
import $ from 'jquery';
import title from './images/title_kv.png';

console.log('hello webpack!');
document.getElementById('root').innerHTML = sub();

const contents = `
  <header>
    <div class="header-group">
      <h1>Home</h1>
      <p>Hello Webpack</p>
    </div>
    <nav>
      <a href="./about.html">about</a>
    </nav>  
  </header>    
  <section>
    <img src="./images/obj_cast01.png" alt="cast1">
    <img src=${title} />
  </section>  
`;

$('body').append(contents);

