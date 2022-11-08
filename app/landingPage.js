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



let admins;
let usersLS = JSON.parse(localStorage.getItem("admins"));
if(usersLS){
  admins = JSON.parse(localStorage.getItem("admins"));
}else{
  admins= [
    new User(25, "Agostina Mercado", 29, "agosmercado@gmail.com", 123456789, "true"),
    new User(24, "Gisel Hemsy", 28, "ghemsy@gmail.com", 123456788, "true"),
    new User(23, "Gabriel Rodriguez", 27, "gabz89.gr@gmail.com", 123456787, "true"),
    new User(22, "Nicolas Peralta", 26, "peralta.j.nicolas@gmail.com", 123456786, "true"),
    new User(21, "David Fernandez", 25, "davidfmamani@gmail.com", 123456785, "true")
  ]
  localStorage.setItem("admins",JSON.stringify(admins));
}

//!FUNCION PARA CREAR UN ALERT EN UN CONTENEDOR Y LUEGO DE DOS SEGUNDOS SE BORRE
function alertMessage (message, containerMessage){    
    let alertMessage = document.createElement("div");
    alertMessage.classList.add("style-message","my-1");
    // alertMessage.classList.add("alert","alert-secondary","my-1");
    // alertMessage.setAttribute("role","alert"); //USO SET ATRIBUTE CUANDO QUIERO AGREGAR UN ATRIBUTO QUE NO APARECE EN LA LISTA
    alertMessage.innerHTML =`<i class="fa-solid fa-circle-exclamation"></i>${message}`;
    let containerParent = document.getElementById(containerMessage);
    containerParent.appendChild(alertMessage);
    setTimeout(()=>{alertMessage.remove();},3000); // PASADOS 2 SEGUNDOS SE BORRE EL ELEMENTO QUE ACABO DE CREAR SINO ES SPAM
}

//! FUNCION PARA REGISTRAR UN NUEVO USUARIO
function register (e){  
  e.preventDefault();
  let name = document.getElementById("register-name-value").value;
  let age = document.getElementById("register-age-value").value;
  let email = document.getElementById("register-email-value").value;
  let password = document.getElementById("register-password-value").value;
  let password2 = document.getElementById("register-password2-value").value;
  let idNewUser = Math.random();
  let newUser = new User(idNewUser, name, age, email, password, false);
  
  let userFounded = admins.find(user=>user.email==email); //Busco en la lista de admins si encuentro alguno que tenga el email que se esta ingresando
  let errorsObject = validationRegister(name, age, email, password, password2); //traigo el "objeto Errores" de la funcion
  let errorsKeys = Object.keys(errorsObject);  //Traigo el array de propiedades del objeto Errores
  let errorsValues = Object.values(errorsObject); //Traigo el array de valores del objeto errores
  if (errorsKeys.length==0){
    if (!userFounded){
  //ACTUALIZO EN LS
  //Traigo los admins de LS
  let adminsLS = JSON.parse(localStorage.getItem("admins"));
  //Agrego al nuevo usuario
  adminsLS.push(newUser);
  //Actualizo en LS:
  localStorage.setItem("admins",JSON.stringify(adminsLS));
  //Redirijo al inicio:
  window.location.assign(window.location.origin + "/pages/home.html")
    }else alertMessage (" El email ingresado ya ha sido registrado","container-alertMessage");
  }else{
    errorsValues.map(error=>{
      alertMessage (error,"container-alertMessage");
    }) 
}}

//! FUNCION QUE VALIDA A TRAVES DE REGEX LOS CAMPOS QUE PASO POR PARAMETRO (CAMPOS DEL REGISTRO)
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
//EXPRESION REGULAR PARA PASSWORD AL MENOS 1 LETRA Y AL MENOS 1 NUMERO, MINIMO 8 CARACTERES
// "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

//EXPRESION REGULAR PARA EMAIL 
/*(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) */

  //EXPRESION REGULAR PARA TEXTO
  // ^[a-zA-Z]*$