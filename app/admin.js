//! CRUD 
//! PROTECCION DE RUTAS
let userLoggedLS = JSON.parse(localStorage.getItem("userLogged"));
if(!userLoggedLS){ //SI NO EXISTE USUARIO LOGUEADO REDIRIJO AL LOGIN
window.location.assign(window.location.origin + "/pages/login.html");
}else if (!userLoggedLS.admin){ //SI EXISTE USUARIO LOGUEADO Y NO ES ADMIN REDIRIJO A PAGIN PRINCIPAL
window.location.assign(window.location.origin + "/pages/pagprincipal.html");
}else{
  let adminMenu=document.createElement("li");
    adminMenu.classList.add("nav-item");
    adminMenu.innerHTML= `
      <a class="nav-link active style-text-nav" href="/pages/admin.html" >ADMIN</a>
    `
    document.querySelector(".navbar-nav").appendChild(adminMenu);
}

class Peliculas{
  constructor(nombre, id, descripcion, publicado, destacado, imagen, categoria,imagenPortada){
    this.nombre=nombre;
    this.id = id;
    this.descripcion = descripcion;
    this.publicado = publicado;
    this.destacado = destacado;
    this.imagen = imagen;
    this.categoria = categoria;
    this.imagenPortada = imagenPortada;
  }
}

let peliculas = JSON.parse(localStorage.getItem("peliculas"));

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
    <td class="style-cell style-icons d-flex flex-nowrap justify-content-center">
      <button class="btn style-button-table"><i onclick="destacarPelicula(${pelicula.id})" class="fa-solid fa-star"></i></button>
      <button class="btn style-button-table"><i onclick="publicarPelicula(${pelicula.id})" class="fa-solid fa-eye"></i></button>
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
  let imagenPelicPortada = document.getElementById("newMovie-imagePortada").value; //newMovie-imagePortada
  let categoriaTerror = document.getElementById("categoria-terror-radio");
  let categoriaInfantil = document.getElementById("categoria-infantil-radio");
  let categoriaAccion = document.getElementById("categoria-accion-radio");
  let categoriaComedia = document.getElementById("categoria-comedia-radio");
    if(categoriaTerror.checked){
      categoriaPelic = categoriaTerror.value;
    } else if (categoriaInfantil.checked){
      categoriaPelic = categoriaInfantil.value;
    }else if (categoriaAccion.checked){
        categoriaPelic = categoriaAccion.value;
    }else if (categoriaComedia.checked){
      categoriaPelic = categoriaComedia.value;
    }
  let publicado = document.getElementById("switch-publicado").checked;
  let destacado = document.getElementById("switch-destacado").checked;
  let idPelicula = Math.round(Math.random()*150);
  //CREO LA NUEVA PELICULA
  let nuevaPelicula = new Peliculas(nombrePelic, idPelicula, descripcionPelic, publicado, destacado, imagenPelic, categoriaPelic,imagenPelicPortada);
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
  let nombrePelicOk = /^[A-Za-z0-9\s]+$/g.test(nombrePelic);
  if(!nombrePelicOk) errors.descripcionPelic = " Verifica el nombre ingresado";
  let descripcionPelicOk = /^[A-Za-z0-9\s]+$/g.test(descripcionPelic);
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


// //! FUNCION PARA CARGAR LOS DATOS A EDITAR
const traerDatos = (idSeleccionado) =>{
  let peliculaEncontrada = peliculas.find(pelicula=>pelicula.id==idSeleccionado);
  document.getElementById("editMovie-name").value = peliculaEncontrada.nombre;
  document.getElementById("editMovie-description").value = peliculaEncontrada.descripcion;
  document.getElementById("editMovie-image").value = peliculaEncontrada.imagen;
  document.getElementById("editMovie-imagePortada").value = peliculaEncontrada.imagenPortada; 
  let categTerror=document.getElementById("terror");
  let categComedia = document.getElementById("comedia");
  let categAccion = document.getElementById("accion");
  let categInfantil = document.getElementById("infantil"); 
  switch (true) {
    case categTerror.id==peliculaEncontrada.categoria:
      categTerror.checked =true;
      break;
    case categComedia.id==peliculaEncontrada.categoria:
      categComedia.checked =true;
      break;
    case categAccion.id==peliculaEncontrada.categoria:
      categAccion.checked =true;
    break;
    case categInfantil.id==peliculaEncontrada.categoria:
      categInfantil.checked =true;
      break;
    default:
  }
  let peliPublicada = document.getElementById("switch-publicado-edit")
  if(peliculaEncontrada.publicado){
    peliPublicada.checked = true;
  }else{
    peliPublicada.checked = false;
  }
  let peliDestacada = document.getElementById("switch-destacado-edit")
  if(peliculaEncontrada.destacado){
    peliDestacada.checked = true;
  }else{
    peliDestacada.checked = false;
  }
  document.getElementById("form-edit").setAttribute("onsubmit", `editarPelicula(${idSeleccionado})`)
}
  
  //! FUNCION PARA EDITAR PELICULAS
  const editarPelicula =(idSeleccionado)=>{
    //Traigo los elementos del form edit y los guardo en variables
    let peliNombre = document.getElementById("editMovie-name").value;
    let peliDescripcion = document.getElementById("editMovie-description").value;
    let peliImagen =document.getElementById("editMovie-image").value;
    let peliImagenPortada =document.getElementById("editMovie-imagePortada").value;
    let destacadoPeli = document.getElementById("switch-destacado-edit").checked;
    let publicadoPeli = document.getElementById("switch-publicado-edit").checked;
    let categTerror=document.getElementById("terror");
    let categComedia = document.getElementById("comedia");
    let categAccion = document.getElementById("accion");
    let categInfantil = document.getElementById("infantil");
    if(categTerror.checked){
      categoriaPelic = categTerror.value;
    } else if (categInfantil.checked){
      categoriaPelic = categInfantil.value;
    }else if (categAccion.checked){
        categoriaPelic = categAccion.value;
    }else if (categComedia.checked){
      categoriaPelic = categComedia.value;
    }
  //elimino del array el elemento encontrado
  let pelisActualizadas = peliculas.filter(pelicula=>pelicula.id!=idSeleccionado);
  //Creo una nueva pelicula con los nuevos elementos traidos del form editar
  let nuevaPeli = new Peliculas (peliNombre, idSeleccionado, peliDescripcion, publicadoPeli, destacadoPeli, peliImagen, categoriaPelic,peliImagenPortada);
  //Pusheo la nueva peli
  pelisActualizadas.push(nuevaPeli);
  //actualizo el array en LS
  localStorage.setItem("peliculas",JSON.stringify(pelisActualizadas));
  }
  
  //! FUNCION PARA DESLOGUEARSE
  const logOut =()=>{
  //BORRO DE LS EN USUARIO LOGUEADO
  localStorage.removeItem("userLogged");
  //REDIRIJO A LOGIN
  window.location.assign(window.location.origin + "/pages/login.html");
  }

  //! FUNCION PARA PUBLICAR U OCULTAR UNA PELICULA
  const publicarPelicula = (idPeli) =>{
  let peliculaTraida = peliculas.find(pelicula=>pelicula.id==idPeli); //TRAIGO LA PELI QUE SELECCIONE
  let valorPublic = peliculaTraida.publicado; //PUEDE SER TRUE O FALSE
  //del documento de la pag principal necesito encontrar el elemento que coincida con el ID que traigo y mostrarlo o no
  if (!valorPublic){
    peliculaTraida.publicado = true;
  } else{
    peliculaTraida.publicado = false;
    }
   //elimino del array el elemento encontrado
  let pelisActualizadas = peliculas.filter(pelicula=>pelicula.id!=idPeli);
   //Pusheo la nueva peli
  pelisActualizadas.push(peliculaTraida);
   //actualizo el array en LS
  localStorage.setItem("peliculas",JSON.stringify(pelisActualizadas));
  window.location.reload();  
  }

//! FUNCION PARA DESTACAR UNA PELIC 
const destacarPelicula =(idPeli)=>{
  let peliculaTraida = peliculas.find(pelicula=>pelicula.id==idPeli); //TRAIGO LA PELI QUE SELECCIONE
  console.log(peliculaTraida);  //ok
  let valorDestacado = peliculaTraida.destacado; //PUEDE SER TRUE O FALSE
  console.log(valorDestacado); //ok
  if (!valorDestacado){
    peliculaTraida.destacado = true;
  } else{
  peliculaTraida.destacado = false;
  }
  let pelisActualizadas = peliculas.filter(pelicula=>pelicula.id!=idPeli);
  pelisActualizadas.push(peliculaTraida);
  localStorage.setItem("peliculas",JSON.stringify(pelisActualizadas));
  window.location.reload();  
}