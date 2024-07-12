const contenedor = document.querySelector('.container');
const montaña = document.querySelector('.montaña');
const uno = document.querySelector('.nubeuno');
const dos = document.querySelector('.nubedos');
const tres = document.querySelector('.nubetres');
const cuatro = document.querySelector('.nubecuatro');
const solguia = document.querySelector('.guia');
const sol = document.querySelector('.sol');
let e = 0


function noche() {
    if(e == 0){
     contenedor.style.backgroundColor = 'blue';
     e = 1;
    }
    else{
        contenedor.style.backgroundColor = 'wheat';
        e = 0;
    }
}


function movernubes(){
    uno.style.animationIterationCount = 'infinite';
    uno.style.animationDuration = '20s';
    uno.style.animationName = 'nubeuno';

    dos.style.animationIterationCount = 'infinite';
    dos.style.animationDuration = '10s';
    dos.style.animationName = 'nubeuno';

    tres.style.animationIterationCount = 'infinite';
    tres.style.animationDuration = '6s';
    tres.style.animationName = 'nubeuno';

    cuatro.style.animationIterationCount = 'infinite';
    cuatro.style.animationDuration = '6s';
    cuatro.style.animationName = 'nubeuno';
}

function moversol(){
    sol.style.animationIterationCount = 'infinite';
    sol.style.animationDuration = '9s';
    sol.style.animationName = 'solAnumation';

    solguia.style.animationIterationCount = 'infinite';
    solguia.style.animationDuration = '9s';
    solguia.style.animationName = 'solAnumation';

    contenedor.style.backgroundColor = 'red';
    
    console.log('ejecutando');
}

contenedor.addEventListener('click', noche);

solguia.addEventListener('click', moversol);

uno.addEventListener('click', movernubes);
dos.addEventListener('click', movernubes);
tres.addEventListener('click', movernubes);
cuatro.addEventListener('click', movernubes);
