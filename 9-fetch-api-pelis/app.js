
const container = document.querySelector('.container');
const buscador = document.querySelector('#buscador')
const textoBusqueda = document.querySelector('#busqueda')
const listagenero = document.querySelector('#listaGenero')








function mostrarResults(peliculas){
    peliculas.forEach( element => {

        const box = document.createElement('div')
        box.classList.add("box")


        box.innerHTML = `
     <div class="card">
        <div class="card-header">
            <img src="${element.imagen}" alt="" class="card-img">
        </div>
            <div class="card-body">
                <h2 class="card-title">${element.nombre}</h2>
                <p class="card-text">${element.year}</p>
                <p class="card-text">${element.director}</p>
                <p class="card-text">${element.guionista}</p>
                <p class="card-text">${element.genero}</p>
            
            </div>
        </div> 
        `
        container.appendChild(box)
    }) 
}


function filtrar (e){
    e.preventDefault()

    container.innerHTML = ""

    let filtro = peliculas

    if(listagenero.value != "All"){

        filtro = filtro.filter( peliculas => peliculas.genero.toString().toLowerCase().includes(listagenero.value.toLowerCase())).filter(peliculas => peliculas.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
      

        console.log(filtro)

        mostrarResults(filtro)
    }
    else{
        
        if(textoBusqueda.value){
           filtro = filtro.filter(peliculas => peliculas.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
           mostrarResults(filtro)
        }
        else{
            mostrarResults(filtro)
        }

        textoBusqueda.value = ""
    }

}

buscador.addEventListener('submit' ,filtrar)