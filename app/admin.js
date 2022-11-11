// // PROTECCION DE RUTAS
// let userLoggedLS = JSON.parse(localStorage.getItem("userLogged"));
// if(!userLoggedLS){ //SI NO EXISTE USUARIO LOGUEADO REDIRIJO AL LOGIN
//   window.location.asign(window.location.origin) + "/login.html";
// }else if (!userLoggedLS.admin){ //SI EXISTE USUARIO LOGUEADO Y NO ES ADMIN REDIRIJO A PAGIN PRINCIPAL
//   window.location.asign(window.location.origin) + "/pagprincipal.html";
// }

// class Pelicula{
//   constructor(nombre, id, descripcion, imagen, destacado, publicado){
//     this.nombre=nombre;
//     this.id=id;
//     this.descripcion=descripcion;
//     this.destacado=destacado;
//     this.publicado=publicado;
//     this.imagen=imagen
//   }
// }


// let peliculasTerror = [
//   new Pelicula("Sonrie", 65, "Después de presenciar un incidente extraño que involucra a un paciente, la Dra. Rose Cotter comienza a experimentar sucesos aterradores. Rose debe enfrentarse a su inquietante pasado para poder sobrevivir y escapar de su nueva realidad.", "true", "true", "/assets/TERROR/TERR-SONRIE.jpg"),
//   new Pelicula ("La Luz del Diablo",64,"La historia de la hermana Ann, una inquieta joven de 25 años que cree devotamente que realizar exorcismos es su vocación. Pero ella está en desacuerdo con las tradiciones de la institución: a las hermanas no se les permite realizar exorcismos, solo a los sacerdotes. Con el apoyo de un mentor, un profesor que siente su don especial, se le permite observar las sesiones de capacitación reales. Su deseo de demostrar su valía da un giro personal cuando conoce a uno de los pacientes más perturbados de la escuela. Durante sus desgarradores encuentros, la hermana Ann se encuentra cara a cara con una fuerza demoníaca que infesta la escuela y tiene lazos misteriosos con su propio pasado. Es entonces cuando el poder del mal y sus propias habilidades sorprendentes se realizan plenamente.", "true","true", "/assets/TERROR/TERROR-PREYDEVIL.jpg"),
//   new Pelicula("Jeepers Creepers: Reborn",63,"Obligada a viajar con su novio, Laine, comienza a experimentar premoniciones asociadas con el mito urbano de The Creeper. Laine cree que se ha invocado algo sobrenatural, y que ella está en el centro de todo.","true","true","/assets/TERROR/TERROR-JeepersCreepersReborn.jpg"),
//   new Pelicula ("Presencias",62,"Victor es un actor famoso que acude a vender una casa de fin de semana familiar en donde hace años murió su hermana bajo circunstancias extrañas. En la primera noche de su estancia sufre un ataque brutal en el que él acaba en muy mal estado y su joven esposa pierde la vida. Los nulos resultados por parte de las autoridades fuerzan a Victor a regresar al lugar del ataque; apenas recuperado y a enfrentar solo los misterios oscuros del lugar. Lo que Victor descubrirá vive más allá de sus peores pesadillas","true","true","https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/379457/379457_173x256.jpg")
// ]
// peliculasTerror.forEach(pelicula=>{
//   let newCard=document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerHTML=`<img src=${pelicula.imagen} class="card-img-top" alt=${pelicula.nombre}>
//   <div class="card-body">
//     <h5 class="card-title">${pelicula.nombre}</h5>
//     <a href="#" class="btn btn-primary">Reproducir</a>
//   </div>`
//   let containerCard = document.querySelector(".container-terror");
//   containerCard.appendChild(newCard);
// });
