class User{
    constructor(id, name, age, email, password, admin){
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.admin = admin
    }
}
let users;
if(localStorage.getItem('users')){
    users= JSON.parse(localStorage.getItem('users'))
}else{
    users= [
    new User(25, "Agostina Mercado", 29, "agosmercado@gmail.com", 123456789,"true"),
    new User(24, "Gisel Hemsy", 28, "ghemsy@gmail.com", 123456788,"true"),
    new User(23, "Gabriel Rodriguez", 27, "gabz89.gr@gmail.com", 123456787,"true"),
    new User(22, "Nicolas Peralta", 26, "peralta.j.nicolas@gmail.com", 123456786,"true"),
    new User(21, "David Fernandez", 25, "davidfmamani@gmail.com", 123456785,"true")
]
localStorage.setItem('users',JSON.stringify(users))
}
const login = (e)=>{
    e.preventDefault(); 
    const email = document.getElementById ('values-Email1').value;
    const password = document.getElementById ('values-Password1').value;
    const userfound= users.find(user=>user.email===email);
    if(userfound && userfound.password===password){
        window.location.assign(window.location.origin + '/home.html');
        
    }else{
        alertMessage('datos invalidos','#container-message');
    }
}

function alertMessage (message,querycontainer){
    let alertMessage = document.createElement('div');
    alertMessage.classList.add('alert','alert-danger','mt-4');
    alertMessage.setAttribute('role','alert');
    alertMessage.innerHTML = `${message}`;
    let container= document.querySelector(querycontainer);
    container.appendchild(alertMessage);
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