const container = document.querySelector('.container');
const buscador = document.querySelector('#buscador')
const textoBusqueda = document.querySelector('#text')
const listaStatus = document.querySelector('#listaStatus')
let results;


function pintar (Elemento){
    switch(Elemento){
        case 'Alive':
            return 'green'
        break
        case 'Dead':
            return 'red'
        break
        case 'unknown':
            return 'gray'
        break
    }
}

function filtrar (e){
    e.preventDefault()

    container.innerHTML = ""

    const filtro = results.filter( word => word.status == listaStatus.value);

    console.log(filtro)

    filtro.forEach( Element => {

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
    }) 


}

buscador.addEventListener('submit' ,filtrar)


let url = "https://rickandmortyapi.com/api/character"
fetch(url)
.then(Response => Response.json() )
.then(data => {

    results = data.results;


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