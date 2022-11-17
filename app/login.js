class User{
    constructor(id, name, age, email, password, admin){
        this.id = id,
        this.name = name,
        this.age = age,
        this.email = email,
        this.password = password,
        this.admin = admin
    }
}

//* traigo admins de LS
let users = JSON.parse(localStorage.getItem("admins"));
const login = (e)=>{
    e.preventDefault();
    const email = document.getElementById('values-email-login').value;
    const password = document.getElementById('values-password-login').value;
    const userFound = users.find(user=>user.email==email);
    if(userFound && userFound.password==password){
        // localStorage.setItem('users',JSON.stringify(userFound));
        // console.log(userFound);
        window.location.assign(window.location.origin + "/pages/pagprincipal.html");
        console.log("entro");
    }else{
    alertMessage('contraeña invalida',"#div-form")
    console.log("no entro");
    }
}

function alertMessage (message,queryContainer){
    let alertMessage = document.createElement('div'); 
    alertMessage.classList.add('alert','alert-danger','mt-3');
    alertMessage.setAttribute('role','alert');
    alertMessage.innerText = message;
    let container= document.querySelector(queryContainer);
    container.appendChild(alertMessage);
    setTimeout(()=>{
        alertMessage.remove()
    },3000)
}

const validationRegister = (name, age, email, password, password2)=>{  
    let errors = {};
    let nameOk = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/.test(name);
    if(!nameOk) errors.name = " Verifica el nombre ingresado";
    let ageOk = /^([0-9]{2})$/.test(age);
    if (!ageOk) errors.age = " Verifica la edad ingresada";
    let emailOk = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    if(!emailOk) errors.email = " Verifica el email ingresado";
    let passwordOk = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password) && password==password2;
    if(!passwordOk) errors.password = " Verifica la contraseña ingresada";
    return errors;
}