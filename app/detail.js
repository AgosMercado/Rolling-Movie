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
    <div class="col-md-5 col-11 mt-4"><img class="image-style-detail w-50" src="${peliculaEncontrada.imagen}" alt="${peliculaEncontrada.nombre}"></div>
    <div class="style-description col-md-5 col-11 mt-5" ><h2 class="style-description">${peliculaEncontrada.nombre}</h2>
    <div class="style-description mt-5"><p class="style-description">${peliculaEncontrada.descripcion}</p>
    <div class="style-description mt-5"><p class="style-description">${peliculaEncontrada.direccion}</p>
    <div class="style-description mt-5"><p class="style-description">${peliculaEncontrada.duracion}</p>
    <div class="style-description mt-5"><p class="style-description">${peliculaEncontrada.pais}</p>
    <div class="style-description col-md-5 col-11 mt-5" ><h2 class="style-description">${peliculaEncontrada.calificacion}<i class="fa-regular fa-star"></i></h2>
    <div class="style-description mt-5"><p class="style-description">CALIFICACION</p>
    </div>
`
let containerDetail = document.getElementById("pelicula-container");
containerDetail.appendChild(peliculasDetail);


