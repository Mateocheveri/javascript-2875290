const buscador = document.querySelector('#buscador');
const busqueda = document.querySelector('#busqueda')


function busqueda(e){
    e.preventDefault();
    console.log(peliculas)
 
    let result = peliculas.filter(peliculas => peliculas.nombre.toLowerCase().includes(busqueda.value.toLowerCase()))
    console.log(result)
 
    localStorage.setItem("results",JSON.stringify(result))
 
    window.location = "../vistas/busquedaUsuario.html"
 
}
 
buscador.addEventListener('submit',busqueda)