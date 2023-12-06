// h1 {color: red} es como css
// .parrafito{..}
// #pid {...}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');
//queriselector funciona como un css
console.log(input.value)

console.log({
h1,
p,
parrafito,
pid,
input,
});

//cambia el texto desde js
//h1.innerHTML = 'Patito <br> Feo';
//h1.innerText = 'Patito <br> Feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class','rojo'); //modificar atributos de los elemenots de html
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.contains('verde');

input.value ="456"

const img = document.createElement('img');
img.setAttribute('src', 'https://deportesriesgo.com/wp-content/uploads/Trajes-de-motocross-1280x720.jpg');
console.log(img);

pid.innerHTML = "";
pid.appendChild(img); // se inserto la imagen, despues del texto 
//manipulacion del DOM.


