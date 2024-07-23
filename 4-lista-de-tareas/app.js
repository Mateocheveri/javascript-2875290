const input = document.querySelector('.input')
const btncrear = document.querySelector('#btncrear');
const btnborrar = document.querySelector('#btnborrar');
const container = document.querySelector('.container');
const lista  = document.querySelector('#lista')
let n = 0;

function crear(){
    const tarjeta = document.createElement('li');

    tarjeta.innerText = '';
    tarjeta.classList.add('lista li');
    input.value = tarjeta;
   

  

    container.appendChild(tarjeta);
    console.log(tarjeta);
}






btncrear.addEventListener('click', crear);
