//! CRUD 
//! PROTECCION DE RUTAS
let userLoggedLS = JSON.parse(localStorage.getItem("userLogged"));
if(!userLoggedLS){ //SI NO EXISTE USUARIO LOGUEADO REDIRIJO AL LOGIN
window.location.assign(window.location.origin + "/pages/login.html");
}else if (!userLoggedLS.admin){ //SI EXISTE USUARIO LOGUEADO Y NO ES ADMIN REDIRIJO A PAGIN PRINCIPAL
window.location.assign(window.location.origin + "/pages/pagprincipal.html");
}

class Peliculas{
  constructor(nombre, id, descripcion, publicado, destacado, imagen, categoria){
    this.nombre=nombre;
    this.id = id;
    this.descripcion = descripcion;
    this.publicado = publicado;
    this.destacado = destacado;
    this.imagen = imagen;
    this.categoria = categoria;
  }
}

let peliculas = JSON.parse(localStorage.getItem("peliculas"));
console.log(peliculas);

//!CREACION DINAMICA DE TABLA ABM
peliculas.forEach(pelicula=>{
  let peliculaFila = document.createElement("tr");
  peliculaFila.innerHTML=`
  <th scope="row">${pelicula.id}</th>
    <td class="style-cell">${pelicula.nombre}</td>
    <td class="style-table-category style-cell">${pelicula.descripcion}</td>
    <td class="style-cell"><img class="style-table-img" src=${pelicula.imagen}></td>
    <td class="style-cell">${pelicula.categoria}</td>
    <td class="style-cell">${pelicula.publicado}</td>
    <td class="style-cell">${pelicula.destacado}</td>
    <td class="style-cell">
      <button class="btn style-button-table"><i class="fa-solid fa-trash" onclick="eliminarPelicula(${pelicula.id})"></i></button>
      <button class="btn style-button-table" data-bs-toggle="modal" data-bs-target="#edit-movie-modal"><i onclick="traerDatos(${pelicula.id})" class="fa-solid fa-pen"></i></button>
    </td>
    `
    let containerPelicula = document.getElementById("tableABM");
    containerPelicula.appendChild(peliculaFila);
})

//! FUNCION PARA AGREGAR PELICULAS
  const agregarPelicula= (e) =>{ 
    e.preventDefault();
  let nombrePelic = document.getElementById("newMovie-name").value;
  let descripcionPelic = document.getElementById("newMovie-description").value;
  let imagenPelic = document.getElementById("newMovie-image").value;
  let categoriaTerror = document.getElementById("categoria-terror-radio");
  let categoriaInfantil = document.getElementById("categoria-infantil-radio");
  let categoriaAccion = document.getElementById("categoria-accion-radio");
    if(categoriaTerror.checked){
      categoriaPelic = categoriaTerror.value;
    } else if (categoriaInfantil.checked){
      categoriaPelic = categoriaInfantil.value;
    }else{
      categoriaPelic = categoriaAccion.value;
    }
  let publicado = document.getElementById("switch-publicado").checked;
  let destacado = document.getElementById("switch-destacado").checked;
  let idPelicula = Math.round(Math.random()*150);
  console.log(idPelicula);
  //CREO LA NUEVA PELICULA
  let nuevaPelicula = new Peliculas(nombrePelic, idPelicula, descripcionPelic, publicado, destacado, imagenPelic, categoriaPelic);
  let errorsObject = validationRegister(nombrePelic, descripcionPelic); //traigo el "objeto Errores" de la funcion
  let errorsKeys = Object.keys(errorsObject);  //Traigo el array de propiedades del objeto Errores
  let errorsValues = Object.values(errorsObject); //Traigo el array de valores del objeto errores
  if (errorsKeys.length==0){
  //GUARDO EN LS y actualizo el array de peliculas
  let peliculasLS = JSON.parse(localStorage.getItem("peliculas"));
  peliculasLS.push(nuevaPelicula);
  //GUARDO EL ARRAY ACTUALIZADO
  localStorage.setItem("peliculas",JSON.stringify(peliculasLS));
  window.location.reload();
  }else{
    errorsValues.map(error=>{
      alertMessage (error,"container-alertMessage");
    })
}}

// //! FUNCION PARA ELIMINAR PELICULAS 
const eliminarPelicula = (idPeli)=>{
  let peliculasActualizad = peliculas.filter(pelicula=>pelicula.id!=idPeli); //FILTRO LAS PELICULAS QUE NO TIENEN EL ID QUE LES PASO
  localStorage.setItem("peliculas",JSON.stringify(peliculasActualizad));  //ACTUALIZO LS
  window.location.reload() //recargo la pagina para que actualice LS
// 
}

//! FUNCION QUE VALIDA A TRAVES DE REGEX LOS CAMPOS QUE PASO POR PARAMETRO (CAMPOS DEL MODAL AGREGAR PELICULA)
const validationRegister = (nombrePelic, descripcionPelic)=>{  
  let errors = {};
  let nombrePelicOk = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/.test(nombrePelic);
  if(!nombrePelicOk) errors.descripcionPelic = " Verifica el nombre ingresado";
  let descripcionPelicOk = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/.test(descripcionPelic);
  if(!descripcionPelicOk) errors.descripcionPelic = " Verifica la descripcion ingresada";
  return errors;
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
  setTimeout(()=>{alertMessage.remove();},5000); // PASADOS 2 SEGUNDOS SE BORRE EL ELEMENTO QUE ACABO DE CREAR SINO ES SPAM
}

//! FUNCION PARA EDITAR PELICULAS
const editarPelicula =()=>{

}

// //! FUNCION PARA CARGAR LOS DATOS A EDITAR
const traerDatos = (idSeleccionado) =>{
  let peliculaEncontrada = peliculas.find(pelicula=>pelicula.id==idSeleccionado);
  document.getElementById("editMovie-name").value = peliculaEncontrada.nombre;
  document.getElementById("editMovie-description").value = peliculaEncontrada.descripcion;
  document.getElementById("editMovie-image").value = peliculaEncontrada.imagen;
  let categoriaTerror = document.getElementById("categoria-terror-radio");
  let categoriaTerrorEdit = document.getElementById("categ-terror-radio-edit");
  let categoriaInfantil = document.getElementById("categoria-infantil-radio");
  let categoriaInfantilEdit = document.getElementById("categ-infantil-radio-edit");
  let categoriaAccion = document.getElementById("categoria-accion-radio");
  let categoriaAccionEdit = document.getElementById("categ-accion-radio-edit");
  let switchDestacado = peliculaEncontrada.destacado;
  let switchPublicado = document.getElementById("switch-publicado");
  let destacadoEdit = document.getElementById("switch-destacado-edit");
  let publicadoEdit = document.getElementById("switch-publicado-edit");
    if(categoriaTerror.checked){  //! NO FUNCIONA
      categoriaTerrorEdit.checked="true";
      console.log("terror");
    } else if (categoriaInfantil.checked){
      categoriaInfantilEdit.checked="true";
      console.log("infantil");
    }else if (categoriaAccion.checked){
      categoriaAccionEdit.checked="true";
      console.log("accion");
    // BOTONES SWITCH MODAL EDITAR NO FUNCIONA
    }
    if(switchDestacado){
      destacadoEdit.checked="true"
    }
    else{
        destacadoEdit.checked="false"
        }
    //TRAER LOS VALORES Y SELECCIONAR LA OPCION CORRESPONDIENTE
    // if(switchPublicado.checked){
    //   publicadoEdit.setAttribute("checked", "true")
    // } else{
    //   publicadoEdit.setAttribute("checked", "false")
    // }
}

//! FUNCION PARA DESLOGUEARSE
const logOut =()=>{
  //BORRO DE LS EN USUARIO LOGUEADO
  localStorage.removeItem("userLogged");
  //REDIRIJO A LOGIN
  window.location.assign(window.location.origin + "/pages/login.html");
  }