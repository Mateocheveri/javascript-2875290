/* console.log(peliculas[0] )
console.log(peliculas[0].direccion, peliculas[0].nombre )
console.log(libro.direccion)
console.log(peliculas[9].genero[0]) */
const container = document.querySelector('.container');


peliculas.forEach(element => {
    let card = document.createElement('div') 

    card.innerHTML = `
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
    /* comillas invertidas */
    container.appendChild(card);
})