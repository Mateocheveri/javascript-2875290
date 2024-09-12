const buscador = document.querySelector('#buscador');
const textoBusqueda = document.querySelector('#busqueda');
const container = document.querySelector('.container');



function mostrarResults(peliculas){
    peliculas.forEach( element => {

        const box = document.createElement('div')
        box.classList.add("box")


        box.innerHTML = `
     <div class="container entradas">
        <div class="img-news"></div>
            <div class="cuadro">
                <div class="usuarioContenedor">
                    <div class="usuario" >
                        <img src="${element.imagen}" 
                        width="100%" alt="avatar" style="border-radius: 50%;">
                    
                    </div>
                         <div class="puntaje" > <i class="fa-solid fa-star"></i>
                             </div>
                            <div class="descripcion">
                                <h1>${element.nombre}</h1>
                                <p>${element.director}</p>
                                <span> <a href="#"> ver más...</a> </span>
            
                            </div>
            </div>
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

    
        
    if(textoBusqueda.value){
        filtro = filtro.filter(peliculas => peliculas.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
        mostrarResults(filtro)
    }
    else{
        mostrarResults(filtro)
    }

    textoBusqueda.value = ""


}

buscador.addEventListener('submit' ,filtrar)