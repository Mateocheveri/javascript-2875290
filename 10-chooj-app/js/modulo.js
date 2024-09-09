
const container = document.querySelector('.container');

modulos.forEach(element => {
    let card = document.createElement('section') 

    container.innerHTML = `
     <div>
            <div class="card-header">
                <img src="" alt="">
            </div>
            <div class="card-body">
              <h1 class="title">${element.titulouno[1]}</h1>
              <p class="text">${element.infouno}</p>
            </div>
        </div>
        <div>
            <div class="card-header">
                <img src="" alt="">
            </div>
            <div class="card-body">
              <h1 class="title">${element.titulodos}</h1>
              <p class="text">${element.infodos}</p>
            </div>
        </div>
        <div>
            <div class="card-header">
                <img src="" alt="">
            </div>
            <div class="card-body">
              <h1 class="title">${element.titulotres}</h1>
              <p class="text">${element.infotres}</p>
            </div>
        </div> 
    `
})