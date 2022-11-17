const id= windows.location.hash.slice(1);

const pelicula = JSON.parse(localStorage.getItem('peliculas'));

const peliculas = pelicula.find(pelicula=> pelicula.id===id);
const peliculasDetail= document.createElement ('div');
peliculasDetail.id = product.id

peliculasDetail.classList.add('row');

peliculasDetail.innerHTML= `
<div class="container-fluid" id="container-detail">
			<div class="p-3 row d-flex justify-content-lg-start my-5 m-0">
        <div class="container img-fluid">
        <img src="${Peliculas.imagen}" alt="${Peliculas.nombre}">
        </div>
            <h3 class="text text-center"> ${Peliculas.descripcion}</h3>
				<p class="description">
				</p>
			</div>

`
let peliculaContainer=document.querySelector('#pelicula-container');

peliculaContainer.appendchild(peliculasDetail); 

