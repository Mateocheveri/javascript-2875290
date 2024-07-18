const suelo = document.querySelector('.suelo');
const monstruo = document.querySelector('.monstruo');
const tentaculo = document.querySelector('.tentaculo');
const titulo = document.querySelector('.titulo');
const personaje = document.querySelector('.personaje');
const uno = document.querySelector('.particulauno');
const dos = document.querySelector('.particulados');
const tres = document.querySelector('.particulatres');
const cuatro = document.querySelector('.particulacuatro');
const cinco = document.querySelector('.particulacinco');
const btn = document.querySelector('.btn');


function mover(){


    monstruo.style.animationName = 'monstruo';
    monstruo.style.animationDuration = '5s';

    personaje.style.animationName = 'personaje';
    personaje.style.animationDuration = '5s';

    titulo.style.animationname = 'titulo';
    titulo.style.animationduration = '5s';

    uno.style.animationIterationCount = 'infinite';
    uno.style.animationName = 'particulauno';
    uno.style.animationDuration = '7s'; 

    dos.style.animationIterationCount = 'infinite';
    dos.style.animationName = 'particulados';
    dos.style.animationDuration = '10s';

    tres.style.animationIterationCount = 'infinite';
    tres.style.animationName = 'particulatres';
    tres.style.animationDuration = '9s';

    cuatro.style.animationIterationCount = 'infinite';
    cuatro.style.animationName = 'particulacuatro';
    cuatro.animationDuration = '8s';

    cinco.style.animationIterationCount = 'infinite';
    cinco.style.animationName = 'particulacuatro';
    cinco.animationDuration = '8s';

    tentaculo.style.animationName = 'tentaculos';
    tentaculo.style.animationDuration = '5s';
}



btn.addEventListener('click', mover);