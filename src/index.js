import Library from './library';
import Pikachu from './q.jpg';


function component() {
  Library.log();
  var element = document.createElement('section');

  element.innerHTML = `<div>文字</div><img src="${Pikachu}"/>`;

  return element;
}

document.body.appendChild(component());
