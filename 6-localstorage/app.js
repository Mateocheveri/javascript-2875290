/* let nombre = 'jose';
let items = ['uno','dos','tres','cuatro','cinco']
let pelicula = {
    id: 28,
    nombre: 'Drive',
    year: 2011,
    director: 'Nicolas Winding Refn',
    guionista: 'Hossein Amini',
    genero: ['Acción','Neo-noir','Drama'],
    imagen: 'https://images.justwatch.com/poster/305874346/s166/drive.webp'
}
*/
/* (key, value) */
/* 
function agregarStorage (key,value){
    if(typeof value === 'string'){
        localStorage.setItem(key,value)
    }
    else{
        localStorage.setItem(key,JSON.stringify(value) )
    }
}

agregarStorage ('nombre', nombre)
agregarStorage ('carrito', items)
agregarStorage ('pelicula', pelicula)


function obtenerDatos(){
    let nombreUsuario = localStorage.getItem('nombre')
    let carritoUsuario = JSON.parse(localStorage.getItem('carrito'))    
    let peliculaUsuario = JSON.parse(localStorage.getItem('pelicula'))  

    console.log(carritoUsuario, typeof carritoUsuario) 

    carritoUsuario.forEach(element => {
        console.log(element)
    });

}

obtenerDatos()

/* ejercicio */
/*
let resultado = localStorage.getItem('nombre')
let resultado = JSON.parse (localStorage.getItem('pelicula') );
console.log(resultado, typeof resultado) */



/* borrar item individual */
/* 
function borrarItem (item){
    localStorage.removeItem(item)
}
 */
/* borrarItem ('pelicula')
borrarItem ('nombre')
borrarItem ('carrito') 
*/

/* borrar todo */
/* function borrarTodo(){
    localStorage.clear()
}
borrarTodo()  */

const form = document.querySelector("#form")
const usuario = document.querySelector("#nombre")
const contraseña = document.querySelector("#contraseña")


/* let userName = 'admin'
let pass = 1234 */
//registrar el dato de "user" en localstorage
let user ={
    userName: 'admin',
    userPass: '1234',

}


/* localStorage.setItem('admin',userName)
localStorage.setItem('pass',pass) */
localStorage.setItem('user', JSON.stringify(user) )

//inicio de sesiòn
function validarUsuario(e){
    e.preventDefault();

    let currentUser = JSON.parse(localStorage.getItem('user'));

    console.log(currentUser.userName);
    console.log(currentUser.userPass);

    console.log(Boolean(usuario.value === currentUser.userName));
    console.log(Boolean(contraseña.value === currentUser.userPass));

    if(usuario.value === currentUser.userName && contraseña.value === currentUser.userPass){
        console.log('felicidades puedes entrar ✔')
        window.location = "./userpage.html"
    }
    else{
        console.log('sigue intentando')
    }
    form.reset()
    
    /* Boolean(1==="1")//false */
}

form.addEventListener('submit',validarUsuario)


