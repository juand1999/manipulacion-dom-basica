const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btncalcular')
const pResultado = document.querySelector('#Resultado')

form.addEventListener('submit', sumarInputsValues);

function sumarInputsValues(event) {
   //console.log({event});
   event.preventDefault();
   const sumaInputs = input1.value + input2.value;
   pResultado.innerText = "Resultado: " + sumaInputs;
}




