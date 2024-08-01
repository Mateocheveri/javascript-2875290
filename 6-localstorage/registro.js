const form = document.querySelector("#form")
const usuario = document.querySelector("#nombre")
const contraseña = document.querySelector("#contraseña")

function registrarUser(e){
    e.preventDefault();

    //registrar el dato de "user" en localstorage
    let user = {
        userName: usuario.value,
        userPass: contraseña.value,
    }

    localStorage.setItem('user', JSON.stringify(user) ) 

    form.reset()
}

form.addEventListener('submit',registrarUser)



