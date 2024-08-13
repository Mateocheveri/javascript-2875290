const container = document.querySelector('.container');
let url = "https://rickandmortyapi.com/api/character"
fetch(url)
.then(Response => Response.json() )
.then(data => {

    data.results.forEach( Element => {
        const box =document.createElement('div')
        box.classList.add("box")

        box.innerHTML = `
        
        <div class="card">
            <img src="${Element.image}" class="card-img">

            <div class="card-info">
                <h2 class="card-title">${Element.name}</h2>
                <h3 class="card-text"><i class='bx bxs-circle'></i>${Element.status}-${Element.species}</h3>
                <h5 class="card-subtitle">Last known location:</h5>
                <p class="card-text">${Element.location.name}</p>
                <h5 class="card-subtitle">first seen in:</h5>
                <p class="card-text"></p>                
            </div>
        </div>
        `
        container.appendChild(box)
    }) 
})