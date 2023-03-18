//! PROTECCION DE RUTAS
let admins = JSON.parse(localStorage.getItem("admins"));
let userLogged = JSON.parse(localStorage.getItem("userLogged"));
if(!userLogged){  //SI NO EXISTE USUARIO LOGUEADO REDIRIJO AL LOGIN
window.location.assign(window.location.origin + "/pages/login.html");
}else if (userLogged.admin){
    let adminMenu=document.createElement("li");
    adminMenu.classList.add("nav-item");
    adminMenu.innerHTML= `
    <a class="nav-link active style-text-nav" href="/pages/admin.html" >ADMIN</a>
    `
    document.querySelector(".navbar-nav").appendChild(adminMenu);
}






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
<div class="col-md-12 col-lg-8 container" ><strong><p class="text-center style-descriptionName">${peliculaEncontrada.nombre}</p></strong>
<div class="d-flex  justify-content-center container"><p class="style-description col-lg-7">${peliculaEncontrada.descripcion}</p></div></div>

<div class="col-md-12 col-lg-3 stylecontainerimagen container d-flex  justify-content-center"><img class="image-style-detail mt-2" id="imagepeli" src="${peliculaEncontrada.imagen}" alt="${peliculaEncontrada.nombre}"></div>
    
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



// let userLoggedLS = JSON.parse(localStorage.getItem("userLogged"));
// if(!userLoggedLS){ 
// window.location.assign(window.location.origin + "/pages/login.html");
// }else if (!userLoggedLS.admin){ 
// window.location.assign(window.location.origin + "/pages/pagprincipal.html");
// }else{
//   let adminMenu=document.createElement("li");
//     adminMenu.classList.add("nav-item");
//     adminMenu.innerHTML= `
//       <a class="nav-link active style-text-nav" href="/pages/admin.html" >ADMIN</a>
//     `
//     document.querySelector(".navbar-nav").appendChild(adminMenu);
// }



