import './style.css';
import Pikachu from './q.png';

function component() {
  var element = document.createElement('section');

  element.innerHTML = `另一个文件`;

  return element;
}

document.body.appendChild(component());