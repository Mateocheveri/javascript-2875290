const form = document.querySelector("#post")
const usuario = document.querySelector("#nombre")
const contraseña = document.querySelector("#contra")

function registrarUser(e){
    e.preventDefault();
    let user = {
        userName: usuario.value,
        userPass: contraseña.value,
    }

    localStorage.setItem('user', JSON.stringify(user) ) 

    form.reset()
}

form.addEventListener('submit',registrarUser)