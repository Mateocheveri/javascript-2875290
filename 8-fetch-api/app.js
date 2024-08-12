const container = document.querySelector('.container');
fetch('https://jsonplaceholder.typicode.com/users/')
.then(respuesta => respuesta.json())
.then(datos => {
    datos.forEach( Element => {
        //name: leanne ...
        //username: bret
        /* console.log(`nombre: ${Element.name} usuario: ${Element.username}`); */
       /*  console.log(`nombre: ${Element.name}`);
        console.log(`username: ${Element.username}`); */

        /*  crear un elemento "div" con createElement 
        y asignarle la clase "box"
        crea un "h1" con create element y hacer appenchild al div de clase "box"
        crear un "p" con createElement y hacer appendChild al div clase "box"*/
        
        let box = document.createElement('div') 
        box.classList.add('box');

        let h1 = document.createElement('h1')
        h1.textContent = Element.name;

        let p = document.createElement('p')
        p.textContent = Element.username;

        box.appendChild(h1);
        box.appendChild(p);
        container.appendChild(box);

    })
})