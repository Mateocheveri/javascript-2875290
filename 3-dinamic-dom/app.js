const listcolor = document.querySelector('#listaColores');
const btncrear = document.querySelector('#btncrear');
const main = document.querySelector('#main');
const btnborrar = document.querySelector('#btnborrar');
let n = 0;

function crear(){
    const ball = document.createElement('div');
    const equis = document.createElement('button')

    equis.innerText = 'x';
    equis.classList.add('equis');

    ball.innerText = "";
    ball.classList.add('pelotica');
    ball.style.backgroundColor = listcolor.value;
    ball.innerText = n++;

    /* ball.innerHTML = equis; */

    ball.appendChild(equis)

    console.log(equis)
    main.appendChild(ball);
    console.log(ball)
}

function borrarpantalla(){
    main.innerHTML='';
    n = 0;
}

function borrarElemento(e){
    /* console.log('le di click a la pelotica' + e.target.innerText); */
    /* main.removeChild(e.target); */
    if(e.target.innerText == 'x'){
        main.removeChild(e.target.parentElement);
    }
    n = 0;
}
function tachar(e){
    e.target.style.textDecoration = 'line-through';
}

btncrear.addEventListener('click', crear);
btnborrar.addEventListener('click', borrarpantalla);
main.addEventListener('click', borrarElemento);
main.addEventListener('click', tachar);