const listcolor = document.querySelector('#listaColores');
const btncrear = document.querySelector('#btncrear');
const main = document.querySelector('#main');

function crear(){
    const ball = document.createElement('div');
    ball.innerText = "";
    ball.classList.add('pelotica');
    ball.style.backgroundColor = listcolor.value;

    main.appendChild(ball);

    console.log(ball)

}

btncrear.addEventListener('click', crear)