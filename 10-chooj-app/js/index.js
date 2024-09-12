const btnstar = document.getElementById('btnstar');
const btnregistro = document.getElementById('btnregistro');
const btnclose = document.getElementById('btnclose');
const container = document.querySelector('.container');



/* saludar a el usuario */
const saludo = document.querySelector('#saludo');

let nombreUser = JSON.parse( localStorage.getItem ('user') );

saludo.innerHTML = `bienvenido ${nombreUser.userName}✔✔`


/* funcion de btn */
function cerrar (){
    window.location = "./vistas/cerrar.html"
}
function iniciar (){
    window.location = "./vistas/iniciosesion.html"
}
function registrar (){
    window.location = "./vistas/registro.html"
}
 
btnstar.addEventListener("click",iniciar)
btnregistro.addEventListener("click",registrar)
btnclose.addEventListener("click",cerrar)


modulos.forEach( element => {

    const box = document.createElement('div')
    box.classList.add("box")


    box.innerHTML = `
        <div class="card">
            <div class="card-header">
                <img src="${element.imagen}" alt="">
            </div>
            <div class="card-body">
              <h1 class="title">${element.nombre}</h1>    
              <p class="text">${element.descripcion}</p>
              <a href="${element.link}">ver mas</a>
            </div>
        </div>
    `
    container.appendChild(box)
}) 