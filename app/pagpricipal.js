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

let peliculasTerror = [
    new Peliculas ("acd",10,"aaaaaaaaaaaaaaa","true","true","https://www.todofondos.net/wp-content/uploads/5000x2680-Wallpaper-IT-Horror-2017-4K-peliculas-scaled.jpg"),
    new Peliculas ("adc",20,"bbbbbbbbbbb","true","false","https://www.todofondos.net/wp-content/uploads/3840x2160-Anillos-de-fondo-de-pantalla-peliculas-de-terror-2016-4K-peliculas-1024x576.jpg")
]

let peliculasInfantil = [
    new Peliculas ("acd",10,"aaaaaaaaaaaaaaa","true","true","https://www.todofondos.net/wp-content/uploads/5000x2680-Wallpaper-IT-Horror-2017-4K-peliculas-scaled.jpg"),
    new Peliculas ("adc",20,"bbbbbbbbbbb","true","false","https://www.todofondos.net/wp-content/uploads/3840x2160-Anillos-de-fondo-de-pantalla-peliculas-de-terror-2016-4K-peliculas-1024x576.jpg")
]


const createCard = () =>{
    peliculasTerror.forEach(pelicula => {
        const newCard=document.createElement ("div");
        newCard.id = pelicula.id
        newCard.classList.add ("card");
        newCard.style.width= '18rem';
        newCard.innerHTML = `
        <img src= ${pelicula.imagen} class="card-img-top" alt= ${pelicula.nombre}>
    <div class="card-body">
      <a href="#" class="btn btn-primary btn-sm" ${pelicula.id}>Ver</a>
    `
    document.querySelector("#categoria-terror").appendChild(newCard);
    });
}

const createCard2 = () =>{
    peliculasInfantil.forEach(pelicula => {
        const newCard=document.createElement ("div");
        newCard.id = pelicula.id
        newCard.classList.add ("card");
        newCard.style.width= '18rem';
        newCard.innerHTML = `
        <img src= ${pelicula.imagen} class="card-img-top" alt= ${pelicula.nombre}>
    <div class="card-body">
      <a href="#" class="btn btn-primary btn-sm" ${pelicula.id}>Ver</a>
    `
    document.querySelector("#categoria-infantil").appendChild(newCard);
    });
}
createCard()
createCard2()

