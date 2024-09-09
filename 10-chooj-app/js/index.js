

const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const btnclose = document.getElementById('btnclose');
const headerButtons = document.getElementById('headerButtons'); 

function hidden() {
    
    headerButtons.classList.add('hidden');
    btnclose.classList.remove('hidden');
}


/* boton cerrar sesion */
const btn = document.querySelector("#btnclose");

function cerrar (){

    window.location = "./vistas/cerrar.html"
}
 

btn.addEventListener("click",cerrar)