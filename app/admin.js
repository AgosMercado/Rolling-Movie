//! CRUD 
// PROTECCION DE RUTAS
// let userLoggedLS = JSON.parse(localStorage.getItem("userLogged"));
// if(!userLoggedLS){ //SI NO EXISTE USUARIO LOGUEADO REDIRIJO AL LOGIN
//   window.location.asign(window.location.origin) + "/login.html";
// }else if (!userLoggedLS.admin){ //SI EXISTE USUARIO LOGUEADO Y NO ES ADMIN REDIRIJO A PAGIN PRINCIPAL
//   window.location.asign(window.location.origin) + "/pagprincipal.html";
// }

class Pelicula{
  constructor(id, nombre, descripcion, imagen, categoria, publicado, destacado){
    this.id = id;
    this.nombre=nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.categoria = categoria;
    this.publicado = publicado;
    this.destacado = destacado;
  }
}

let peliculas = [
new Pelicula(15, "smile", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt iure ea optio dolor atque, tempora, maiores quod, earum omnis iusto molestias porro officiis. Mollitia deleniti nesciunt omnis! Quaerat, facilis","../assets/TERROR/TERR-SONRIE.jpg", "terror", "true","true"),
new Pelicula(16,"The Mother", "Mientras huye de unos peligrosos atacantes, una asesina sale de su escondite para proteger a su hija a la que abandonó tiempo atrás. Estreno exclusivo de Netflix.","https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/383251/383251_173x256.jpg", "terror", "true", "true"),
new Pelicula(17,"Jeppers Creppers","djdnasjdnajhbdHJDBHJASBJHSBDJBAJHSDHJhbhbdhsbhdbshdbshbdhsbdhsdbhsbdhsbdhsdbshdbhsbdhsbdhsbdhsbdhbdhsbdhsbdhsbdhsbdhsbdhsbdhsbdhsbdhsbhdsbhdbshdbshdbhsdhsdbhsbdhsbdhsdbhsbdh","../assets/TERROR/TERROR-JeepersCreepersReborn.jpg", "terror", "true", "true"),
]


//CREACION DINAMICA DE TABLA ABM
//Traigo de LS el array de peliculas
// let peliculas = JSON.parse(localStorage.getItem("peliculas"));
peliculas.forEach(pelicula=>{
  let peliculaFila = document.createElement("tr");
  peliculaFila.innerHTML=`
  <th scope="row">${pelicula.id}</th>
    <td>${pelicula.nombre}</td>
    <td class="style-table-category">${pelicula.descripcion}</td>
    <td><img class="style-table-img" src=${pelicula.imagen}></td>
    <td>${pelicula.categoria}</td>
    <td>${pelicula.publicado}</td>
    <td>${pelicula.destacado}</td>
    <td><i class="fa-solid fa-trash" onclick="eliminarPelicula()"></i><i onclick="editarPelicula()"class="fa-solid fa-pen"></i></td>
    `
    let containerPelicula = document.getElementById("tableABM");
    containerPelicula.appendChild(peliculaFila);
})

const agregarPelicula= () =>{
  
}


