const container = document.querySelector('.container');
let url = "https://rickandmortyapi.com/api/character"
fetch(url)
.then(Response => Response.json() )
.then(data => {

    data.results.forEach( Element => {
        const box =document.createElement('div')
        box.classList.add("box")

        box.innerHTML = `
        <img src="${Element.image}" width="200">
        <p>${Element.name}</p>
        `
        container.appendChild(box)
    })
})