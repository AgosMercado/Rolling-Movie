class Peliculas{
    constructor(nombre,id,descripcion,publicado,destacado,imagen){
    this.nombre = nombre;
    this.id = id;
    this.descripcion = descripcion;
    this.publicado = publicado;
    this.destacado = destacado;
    this.imagen = imagen;
    }
}

let peliculas = [
    new Peliculas ("a","a","a","true","true",""),
    new Peliculas ("b","b","b","true","false","")
]

const createCard = () =>{
    peliculas.forEach(pelicula => {
        const newCard=document.createElement ("div");
        newCard.id = pelicula.id
        newCard.classList.add ("card");
        newCard.style.width= '18rem';
        newCard.innerHTML = `
        <img src= ${pelicula.imagen} class="card-img-top" alt= ${pelicula.nombre}>
    <div class="card-body">
      <a href="#" class="btn btn-primary btn-sm" ${pelicula.id}>Ver</a>
    `
    document.querySelector ("main").appendChild(newCard);
    });
}
