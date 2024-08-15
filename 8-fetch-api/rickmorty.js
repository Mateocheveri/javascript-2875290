const container = document.querySelector('.container');
const buscador = document.querySelector('#buscador')
const textoBusqueda = document.querySelector('#textoBusqueda')
const listaStatus = document.querySelector('#listaStatus')
let results;

let url = "https://rickandmortyapi.com/api/character"
fetch(url)
.then(Response => Response.json() )
.then(data => {

    results = data.results;

    mostrarResults(data.results)

    /* const result = data.results.filter(word => word.status == 'Alive');
    console.log(result)

    data.results.forEach( Element => {
        const box =document.createElement('div')
        box.classList.add("box")

        box.innerHTML = `
        
        <div class="card">
            <img src="${Element.image}" class="card-img">

            <div class="card-info">
                <h2 class="card-title">${Element.name}</h2>
                <h3 class="card-text"><i class='bx bxs-circle ${pintar(Element.status)}'></i>${Element.status}-${Element.species}</h3>
                <h5 class="card-subtitle">Last known location:</h5>
                <p class="card-text">${Element.location.name}</p>
                <h5 class="card-subtitle">first seen in:</h5>
                <p class="card-text"></p>                
            </div>
        </div>
        `
        container.appendChild(box)
    })  */
 
})

function pintar (Elemento){
    switch(Elemento){
        case 'Alive':
            return 'green'
        break
        case 'Dead':
            return 'red'
        break
        default:
            return 'gray'
    }
}
function mostrarResults(results){
    results.forEach( Element => {

        const box = document.createElement('div')
        box.classList.add("box")

        box.innerHTML = `
        <div class="card">
            <img src="${Element.image}" class="card-img">

            <div class="card-info">
                <h2 class="card-title">${Element.name}</h2>
                <h3 class="card-text"><i class='bx bxs-circle ${pintar(Element.status)}'></i>${Element.status}-${Element.species}</h3>
                <h5 class="card-subtitle">Last known location:</h5>
                <p class="card-text">${Element.location.name}</p>
                <h5 class="card-subtitle">first seen in:</h5>
                <p class="card-text"></p>                
            </div>
        </div>
        `
        container.appendChild(box)
    }) 

}


function filtrar (e){
    e.preventDefault()

    container.innerHTML = ""

    if(listaStatus.value != "All"){

        const filtro = results.filter( word => word.status == listaStatus.value).filter(word => word.name.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
        //textoBusqueda.value.toLowerCase() == word.name.toLowerCase()

        console.log(filtro)

        mostrarResults(filtro)
    }
    else{
        //""->false "content"->true
        if(textoBusqueda.value){
           const filtro = results.filter(word => word.name.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
           mostrarResults(filtro)
        }
        else{
            mostrarResults(results)
        }

        textoBusqueda.value = ""
    }

    /* const filtro = results.filter( word => word.status == listaStatus.value);

    console.log(filtro)

    mostrarResults(filtro) */


    /*filtro.forEach( Element => {

        const box =document.createElement('div')
        box.classList.add("box")

        box.innerHTML = `
        <div class="card">
            <img src="${Element.image}" class="card-img">

            <div class="card-info">
                <h2 class="card-title">${Element.name}</h2>
                <h3 class="card-text"><i class='bx bxs-circle ${pintar(Element.status)}'></i>${Element.status}-${Element.species}</h3>
                <h5 class="card-subtitle">Last known location:</h5>
                <p class="card-text">${Element.location.name}</p>
                <h5 class="card-subtitle">first seen in:</h5>
                <p class="card-text"></p>                
            </div>
        </div>
        `
        container.appendChild(box)
    }) */

}

buscador.addEventListener('submit' ,filtrar)



