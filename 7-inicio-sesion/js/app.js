const form = document.querySelector("#form")
const usuario = document.querySelector("#nombre")
const contraseña = document.querySelector("#contra")


/* let user ={
    userName: 'admin',
    userPass: '1234',
} 



localStorage.setItem('user', JSON.stringify(user) )  */

function validarUsuario(e){
    e.preventDefault();

    let currentUser = JSON.parse(localStorage.getItem('user'));

    console.log(currentUser.userName);
    console.log(currentUser.userPass);

    console.log(Boolean(usuario.value === currentUser.userName));
    console.log(Boolean(contraseña.value === currentUser.userPass));

    if(usuario.value === currentUser.userName && contraseña.value === currentUser.userPass){
        /* console.log('felicidades puedes entrar ✔') */
        window.location = "../userpage.html"
    }
    else{
        console.log('sigue intentando')
    }
    form.reset()
    
}

form.addEventListener('submit', validarUsuario)
