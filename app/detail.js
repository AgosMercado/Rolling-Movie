const id= window.location.hash.slice(1);  ///40
console.log(id);   ///ok

const peliculasLS = JSON.parse(localStorage.getItem('peliculas')); //Peliculas LS
console.log(peliculasLS);   ///ok

const peliculaEncontrada = peliculasLS.find(pelicula=> pelicula.id==id);
console.log(peliculaEncontrada);  ///ok
const peliculasDetail= document.createElement('div');
peliculasDetail.classList.add('row');
peliculasDetail.innerHTML =
`
    <div class=" col-md-5 col-11 mt-15 stylecontainerimagen"><img class="image-style-detail mt-4" id="imagepeli" src="${peliculaEncontrada.imagen}" alt="${peliculaEncontrada.nombre}"></div>
    <div class=" style-description01 col-md-5 col-11 mt-3" ><strong><h2 class="style-description01">${peliculaEncontrada.nombre}</h2></strong>
    <div class=" style-description mt-5"><p class="style-description">${peliculaEncontrada.descripcion}</p>
    
    <div <p class="container-calification"><h>CALIFICA ESTA PELICULA</h></p> 
    <button class=" d-flex button button-like d-flex align-content-center justify-item-center mx-5">
        <i class="fa fa-heart"></i>
        </button>
    </div>
    <div class="d-flex container-button justify-content-start mt-5">
          <a href="../pages/error404.html" button class="btn btn-outline-success justify-content-center" id="style-button-register" >MAS INFO</button></a>
          <a href="../pages/error404.html" button class="btn btn-outline-success justify-content-center" id="style-button-register" >VER TRAILER</button></a>
      </div>
`
let containerDetail = document.getElementById("pelicula-container");
containerDetail.appendChild(peliculasDetail);

//! FUNCION PARA DESLOGUEARSE
const logOut =()=>{
    //BORRO DE LS EN USUARIO LOGUEADO
    localStorage.removeItem("userLogged");
    //REDIRIJO A LOGIN
    window.location.assign(window.location.origin + "/pages/login.html");
    }



let userLoggedLS = JSON.parse(localStorage.getItem("userLogged"));
if(!userLoggedLS){ 
window.location.assign(window.location.origin + "/pages/login.html");
}else if (!userLoggedLS.admin){ 
window.location.assign(window.location.origin + "/pages/pagprincipal.html");
}else{
  let adminMenu=document.createElement("li");
    adminMenu.classList.add("nav-item");
    adminMenu.innerHTML= `
      <a class="nav-link active style-text-nav" href="/pages/admin.html" >ADMIN</a>
    `
    document.querySelector(".navbar-nav").appendChild(adminMenu);
}



