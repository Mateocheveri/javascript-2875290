const input = document.querySelector('#input');
const btncrear = document.querySelector('#btncrear');
const btnborrar = document.querySelector('#btnborrar');
const main = document.querySelector('.container');
const lista  = document.querySelector('#lista');
let n = 0;



function crear (){
    const lista = document.createElement("div");
    lista.classList.add("lista");
    main.appendChild(lista);

    const tachar = document.createElement("button");
    tachar.innerText = "✔";
    tachar.classList.add("tachar");
    lista.appendChild(tachar);

    const text = document.createElement("p")
    text.innerText = input.value;
    lista.appendChild(text); 
    console.log(input.value)
    
    const eliminar = document.createElement("button");
    eliminar.innerText = "X";
    eliminar.classList.add("eliminar");
    lista.appendChild(eliminar);


    input.value = "";
}

function BorrarPantalla(){
    main.innerHTML = "";
    n =1;
}

function Borrar(e){

    if(e.target.innerText === "X"){
        main.removeChild(e.target.parentElement);
    }
}

 function tachar(e){
        
    if(e.target.innerText === "✔"){
        e.target.parentElement.style.textDecorationLine = "line-through"
    }
} 

btncrear.addEventListener("click", crear);
btnborrar.addEventListener("click", BorrarPantalla);
main.addEventListener("click", Borrar);
main.addEventListener("click", tachar);
