
const container = document.querySelector('.container');
const buscador = document.querySelector('#buscador')
const textoBusqueda = document.querySelector('#busqueda')
const listagenero = document.querySelector('#listaGenero')
let resultado;







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

        filtro = filtro.filter( word => word.genero == listagenero.value).filter(word => word.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
      

        console.log(filtro)

        mostrarResults(filtro)
    }
    else{
        
        if(textoBusqueda.value){
           const filtro = resultado.filter(word => word.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
           mostrarResults(filtro)
        }
        else{
            mostrarResults(resultado)
        }

        textoBusqueda.value = ""
    }

    mostrarResults(data.resultado)
}

buscador.addEventListener('submit' ,filtrar)