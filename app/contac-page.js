const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



 //PARA QUE SE ABRA EL MAIL CON LOS DATOS YA CARGADOS Y SOLO TENGA QUE PONER ENVIAR
// const $form = document.querySelector('#form');
// const $buttonMailTo = document.querySelector('#businessMail');

// $form.addEventListener('submit', handleSubmit);

// function handleSubmit(event){
//   event.preventDefault();
//   const form = new FormData(this);
//   $buttonMailTo.setAttribute('href', `mailto:peralta.j.nicolas@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
//   $buttonMailTo.click()
// }

//!VALIDACIONES
function validar(e){
  e.preventDefault();


  let name = document.getElementById("input-name").value;
  let phone = document.getElementById("input-phone").value;
  let email = document.getElementById("input-email").value;
  let textArea = document.getElementById("input-message").value;


  let errorsObject = validationRegister(name, email, phone, textArea,); //traigo el "objeto Errores" de la funcion
  let errorsValues = Object.values(errorsObject); //Traigo el array de valores del objeto errores
  let errorsKeys = Object.keys(errorsObject);  //Traigo el array de propiedades del objeto Errores
  
  if (errorsKeys.length==0){
    console.log("ok");
    alertMessage ("Tu mensaje fue enviado ¡Gracias por contactarnos!","form");

  }else{
    errorsValues.map(error=>{
      alertMessage (error,"form");
    }) 
}
document.getElementById("form").addEventListener("submit", enviarEmail(email))
}

//! FUNCION QUE VALIDA A TRAVES DE REGEX LOS CAMPOS QUE PASO POR PARAMETRO (CAMPOS DEL REGISTRO)
const validationRegister = (name, email, phone, textArea)=>{  
  let errors = {};
  let nameOk = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/.test(name);
  if(!nameOk) errors.name = " Verifica el nombre ingresado.";
  let emailOk = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  if(!emailOk) errors.email = " Verifica el email ingresado.";
  let phoneOk = /^[0-9]+$/.test(phone);
  if(!phoneOk) errors.phone = " Verifica el telefono ingresado.";
  let textAreaOk = /[A-Za-zÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ][0-9]*$/.test(textArea);
  if(!textAreaOk) errors.textArea = " Verifica el texto ingresado.";

  return errors;
}


//! FUNCION PARA CREAR UN ALERT EN UN CONTENEDOR Y LUEGO DE DOS SEGUNDOS SE BORRE
function alertMessage (message, containerMessage){    
    let alertMessage = document.createElement("div");
    alertMessage.classList.add("style-message2","my-2");
    // alertMessage.classList.add("alert","alert-secondary","my-1");
    // alertMessage.setAttribute("role","alert"); //USO SET ATRIBUTE CUANDO QUIERO AGREGAR UN ATRIBUTO QUE NO APARECE EN LA LISTA
    alertMessage.innerHTML =`<i class="fa-solid fa-circle-exclamation"></i>${message}`;
    let containerParent = document.getElementById(containerMessage);
    containerParent.appendChild(alertMessage);
    setTimeout(()=>{alertMessage.remove();},1500); // PASADOS 2 SEGUNDOS SE BORRE EL ELEMENTO QUE ACABO DE CREAR SINO ES SPAM
}

//! FUNCION PARA ENVIAR MAIL
const enviarEmail = (emailIngresado)=>{
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "agosmercado@gmail.com",
    Password : "FCFE4A9AAAC4B9727EE8829B9F39ECB11A29",
    To : emailIngresado,
    From : "agosmercado@gmail.com",
    Subject : "Gracias por contactarte con Roling Movies",
    Body : "Te confirmamos que recibimos tu solicitud de contacto, a la brevedad nos comunicaremos con vos."
}).then(
  message => alert(message)
);
}