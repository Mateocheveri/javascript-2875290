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

const form = document.getElementById("form")
const usuario = document.getElementById("nombre")
const contraseña = document.getElementById("contraseña")