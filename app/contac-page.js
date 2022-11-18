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



//  PARA QUE SE ABRA EL MAIL CON LOS DATOS YA CARGADOS Y SOLO TENGA QUE PONER ENVIAR
// const $form = document.querySelector('#form');
// const $buttonMailTo = document.querySelector('#businessMail');

// $form.addEventListener('submit', handleSubmit);

// function handleSubmit(event){
//   event.preventDefault();
//   const form = new FormData(this);
//   $buttonMailTo.setAttribute('href', `mailto:peralta.j.nicolas@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
//   $buttonMailTo.click()
// }
