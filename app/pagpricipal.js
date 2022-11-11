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

// let peliculasTerror = [
    // new Peliculas ("acd",10,"aaaaaaaaaaaaaaa","true","true","https://www.todofondos.net/wp-content/uploads/5000x2680-Wallpaper-IT-Horror-2017-4K-peliculas-scaled.jpg"),
    // new Peliculas ("adc",20,"bbbbbbbbbbb","true","false","https://www.todofondos.net/wp-content/uploads/3840x2160-Anillos-de-fondo-de-pantalla-peliculas-de-terror-2016-4K-peliculas-1024x576.jpg")

    let peliculasTerror = [
        new Peliculas("Sonrie", 65, "Después de presenciar un incidente extraño que involucra a un paciente, la Dra. Rose Cotter comienza a experimentar sucesos aterradores. Rose debe enfrentarse a su inquietante pasado para poder sobrevivir y escapar de su nueva realidad.", "true", "true", "/assets/TERROR/TERR-SONRIE.jpg"),
        new Peliculas ("La Luz del Diablo",64,"La historia de la hermana Ann, una inquieta joven de 25 años que cree devotamente que realizar exorcismos es su vocación. Pero ella está en desacuerdo con las tradiciones de la institución: a las hermanas no se les permite realizar exorcismos, solo a los sacerdotes. Con el apoyo de un mentor, un profesor que siente su don especial, se le permite observar las sesiones de capacitación reales. Su deseo de demostrar su valía da un giro personal cuando conoce a uno de los pacientes más perturbados de la escuela. Durante sus desgarradores encuentros, la hermana Ann se encuentra cara a cara con una fuerza demoníaca que infesta la escuela y tiene lazos misteriosos con su propio pasado. Es entonces cuando el poder del mal y sus propias habilidades sorprendentes se realizan plenamente.", "true","true", "/assets/TERROR/TERROR-PREYDEVIL.jpg"),
        new Peliculas("Jeepers Creepers: Reborn",63,"Obligada a viajar con su novio, Laine, comienza a experimentar premoniciones asociadas con el mito urbano de The Creeper. Laine cree que se ha invocado algo sobrenatural, y que ella está en el centro de todo.","true","true","../assets/TERROR/TERROR-JeepersCreepersReborn.jpg"),
        new Peliculas ("Presencias",62,"Victor es un actor famoso que acude a vender una casa de fin de semana familiar en donde hace años murió su hermana bajo circunstancias extrañas. En la primera noche de su estancia sufre un ataque brutal en el que él acaba en muy mal estado y su joven esposa pierde la vida. Los nulos resultados por parte de las autoridades fuerzan a Victor a regresar al lugar del ataque; apenas recuperado y a enfrentar solo los misterios oscuros del lugar. Lo que Victor descubrirá vive más allá de sus peores pesadillas","true","true","https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/379457/379457_173x256.jpg")
         ]


let peliculasInfantil = [
    new Peliculas ("acd",10,"aaaaaaaaaaaaaaa","true","true","https://www.todofondos.net/wp-content/uploads/5000x2680-Wallpaper-IT-Horror-2017-4K-peliculas-scaled.jpg"),
    new Peliculas ("adc",20,"bbbbbbbbbbb","true","false","https://www.todofondos.net/wp-content/uploads/3840x2160-Anillos-de-fondo-de-pantalla-peliculas-de-terror-2016-4K-peliculas-1024x576.jpg")
]

let peliculasAccion = [
    new Peliculas ("Batman vs Superman: El Origen de la Justicia (2016)",10,"Temiendo las acciones desenfrenadas de un superhéroe con poderes similares a los de un Dios, el formidable y poderoso vigilante de Ciudad Gótica se convierte en salvador moderno y el más aclamado de Metropolis, mientras el mundo parece abrumarse por saber a qué tipo de héroe realmente necesita. Mientras Batman (Affleck) y Superman (Cavill) se encuentran en guerra, nace una nueva amenaza, la cual pondrá al mundo entero en peligro como nunca antes se había visto.","true","true","../assets/Accion-.jpg"),
    new Peliculas ("Terror a 47 Metros: Segundo Ataque",20,"Esta secuela de '47 Meters Down'traslada la mortífera acción de los tiburones desde México a Brasil, y seguirá a un grupo de chicas en busca de aventuras en la costa de Recife. Con la esperanza de salir del rutinario sendero turístico, las chicas escuchan algo acerca de unas ruinas submarinas ocultas, pero descubren que bajo las olas turquesas su Atlantis secreta no está completamente deshabitada.","true","false","../assets/222495_173x256.jpg")
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

const createCard3 = () =>{
    peliculasAccion.forEach(pelicula => {
        const newCard=document.createElement ("div");
        newCard.id = pelicula.id
        newCard.classList.add ("card");
        newCard.style.width= '18rem';
        newCard.innerHTML = `
        <img src= ${pelicula.imagen} class="card-img-top" alt= ${pelicula.nombre}>
    <div class="card-body">
      <a href="#" class="btn btn-primary btn-sm" ${pelicula.id}>Ver</a>
    `
    document.querySelector("#categoria-accion").appendChild(newCard);
    });
}

createCard()
createCard2()
createCard3()

