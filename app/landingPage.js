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


function alertMessage (message, containerMessage){
    let alertMessage = document.createElement("div");
    alertMessage.classList.add("alert","alert-secondary","my-1");
    alertMessage.setAttribute("role","alert"); //USO SET ATRIBUTE CUANDO QUIERO AGREGAR UN ATRIBUTO QUE NO APARECE EN LA LISTA
    alertMessage.innerText =message;
    let containerParent = document.getElementById(containerMessage);
    containerParent.appendChild(alertMessage);
    setTimeout(()=>{alertMessage.remove();},2000); // PASADOS 2 SEGUNDOS SE BORRE EL ELEMENTO QUE ACABO DE CREAR SINO ES SPAM
}
function register (e){
  e.preventDefault();
  let name = document.getElementById("register-name-value").value;
  let age = document.getElementById("register-age-value").value;
  let email = document.getElementById("register-email-value").value;
  let password = document.getElementById("register-password-value").value;
  let password2 = document.getElementById("register-password2-value").value;
  let idNewUser = Math.random();
  if(password==password2){
  let newUser = new User(idNewUser, name, age, email, password, false);
  //ACTUALIZO EN LS
  //Traigo los admins de LS
  let adminsLS = JSON.parse(localStorage.getItem("admins"));
  //Agrego al nuevo usuario
  adminsLS.push(newUser);
  //Actualizo en LS:
  localStorage.setItem("admins",JSON.stringify(adminsLS));
  //Redirijo al inicio:
  window.location.assign(window.location.origin + "/pages/home.html")
  }else{
    alertMessage ("LAS CONTRASEÑAS NO COINCIDEN", "container-alertMessage");
  }
}
