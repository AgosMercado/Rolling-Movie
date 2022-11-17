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
    <div class="col-md-5 col-11 mt-4"><img class="image-style-detail mt-5" src="${peliculaEncontrada.imagen}" alt="${peliculaEncontrada.nombre}"></div>
    <div class="col-md-5 col-11 mt-5"><h2>${peliculaEncontrada.nombre}</h2>
    <div class="mt-5"><p>${peliculaEncontrada.descripcion}</p>
    <div><h2> hola</h2></div>
    </div>
`
let containerDetail = document.getElementById("pelicula-container");
containerDetail.appendChild(peliculasDetail);


