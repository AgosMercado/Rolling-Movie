//! PROTECCION DE RUTAS
let admins = JSON.parse(localStorage.getItem("admins"));
let userLogged = JSON.parse(localStorage.getItem("userLogged"));
if(!userLogged){  //SI NO EXISTE USUARIO LOGUEADO REDIRIJO AL LOGIN
window.location.assign(window.location.origin + "/pages/login.html");
}else if (userLogged.admin){
    let adminMenu=document.createElement("li");
    adminMenu.classList.add("nav-item");
    adminMenu.innerHTML= `
    <a class="nav-link active style-text-nav" href="/Rolling-Movie/pages/admin.html" >ADMIN</a>
    `
    document.querySelector(".navbar-nav").appendChild(adminMenu);
}



class Peliculas{
    constructor(nombre,id,descripcion,publicado,destacado,imagen,categoria,calificacion,direccion,pais,duracion){
    this.nombre = nombre;
    this.id = id;
    this.descripcion = descripcion;
    this.publicado = publicado;
    this.destacado = destacado;
    this.imagen = imagen;
    this.categoria = categoria;
    this.calificacion = calificacion;
    this.direccion = direccion;
    this.pais = pais; 
    this.duracion = duracion; 
    }
}

let peliculasLS = JSON.parse(localStorage.getItem("peliculas"));
let peliculas;
if (peliculasLS){
    peliculas = peliculasLS;
}else{
peliculas = [
        new Peliculas("Sonrie", 65, "Después de presenciar un incidente extraño que involucra a un paciente, la Dra. Rose Cotter comienza a experimentar sucesos aterradores. Rose debe enfrentarse a su inquietante pasado para poder sobrevivir y escapar de su nueva realidad.", "true", "true", "../assets/TERROR/TERR-SONRIE.jpg","terror",8,"Direccion:Parker Finn","Pais:EE.UU","Duracion:1h 55min"),
        new Peliculas ("La Luz del Diablo",64,"La historia de la hermana Ann, una inquieta joven de 25 años que cree devotamente que realizar exorcismos es su vocación. Pero ella está en desacuerdo con las tradiciones de la institución: a las hermanas no se les permite realizar exorcismos, solo a los sacerdotes. Con el apoyo de un mentor, un profesor que siente su don especial, se le permite observar las sesiones de capacitación reales. Su deseo de demostrar su valía da un giro personal cuando conoce a uno de los pacientes más perturbados de la escuela. Durante sus desgarradores encuentros, la hermana Ann se encuentra cara a cara con una fuerza demoníaca que infesta la escuela y tiene lazos misteriosos con su propio pasado. Es entonces cuando el poder del mal y sus propias habilidades sorprendentes se realizan plenamente.", "true","true", "../assets/TERROR/TERROR-PREYDEVIL.jpg","terror"),
        new Peliculas("Jeepers Creepers: Reborn",63,"Obligada a viajar con su novio, Laine, comienza a experimentar premoniciones asociadas con el mito urbano de The Creeper. Laine cree que se ha invocado algo sobrenatural, y que ella está en el centro de todo.","true","true","../assets/TERROR/TERROR-JeepersCreepersReborn.jpg","terror"),
        new Peliculas ("Presencias",62,"Victor es un actor famoso que acude a vender una casa de fin de semana familiar en donde hace años murió su hermana bajo circunstancias extrañas. En la primera noche de su estancia sufre un ataque brutal en el que él acaba en muy mal estado y su joven esposa pierde la vida. Los nulos resultados por parte de las autoridades fuerzan a Victor a regresar al lugar del ataque; apenas recuperado y a enfrentar solo los misterios oscuros del lugar. Lo que Victor descubrirá vive más allá de sus peores pesadillas","true","true","https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/379457/379457_173x256.jpg","terror"),
        new Peliculas ("Batman vs Superman: El Origen de la Justicia (2016)",30,"Temiendo las acciones desenfrenadas de un superhéroe con poderes similares a los de un Dios, el formidable y poderoso vigilante de Ciudad Gótica se convierte en salvador moderno y el más aclamado de Metropolis, mientras el mundo parece abrumarse por saber a qué tipo de héroe realmente necesita. Mientras Batman (Affleck) y Superman (Cavill) se encuentran en guerra, nace una nueva amenaza, la cual pondrá al mundo entero en peligro como nunca antes se había visto.","true","true","../assets/ACCION/Accion-.jpg","accion"),
        new Peliculas ("Terror a 47 Metros: Segundo Ataque",40,"Esta secuela de '47 Meters Down'traslada la mortífera acción de los tiburones desde México a Brasil, y seguirá a un grupo de chicas en busca de aventuras en la costa de Recife. Con la esperanza de salir del rutinario sendero turístico, las chicas escuchan algo acerca de unas ruinas submarinas ocultas, pero descubren que bajo las olas turquesas su Atlantis secreta no está completamente deshabitada.","true","false","../assets/ACCION/222495_173x256.jpg","accion"),
        new Peliculas ("Violent Night",50, "Cuando un equipo de mercenarios irrumpe en Nochebuena dentro de un complejo familiar adinerado y toma como rehenes a todos los que están dentro, no estaban preparados para un defensor sorpresa: Santa Claus (David Harbour) está en el edificio y a punto de demostrar por qué este Santa Claus, no es ningún santo.","true", "true", "../assets/ACCION/accion-navidad.jpg","accion"),
        new Peliculas ("Sin novedad en el frente",60,"Cuando Paul, de 17 años, se une al frente occidental en la Primera Guerra Mundial, su entusiasmo se derrumba rápidamente ante la dura realidad de la vida en las trincheras","true","true","../assets/TERROR/ACCION-SIN-NOVEDAD.jpg","accion"),
        new Peliculas ("Blackout",70,"Tras despertar en un hospital de México sin idea de cómo llegó allí, un hombre descubre que un cártel lo persigue y debe luchar para encontrar la verdad... y rápido","true","true","../assets/ACCION/ACCION-BLACKOUT.jpg","accion"),
        new Peliculas ("Super Mario Bros: La Película",80,"Película de animación basada en la franquicia de videojuegos Super Mario Bros. de Nintendo. Estará producida por Shigeru Miyamoto, creador de la licencia, y la producirá y animará Illumination Entertainment (Los Minion)","true","true","../assets/INFANTILES/INFANTILES-SUPERMARIO.jpg","infantil"),
        new Peliculas ("Las Aventuras de Tommy",90,"Un gato llamado Blanket lleva mucho tiempo viviendo en un apartamento de gran altura en la ciudad con su hijo, Cape. Un día, curioso por el mundo exterior, Cape decide salir de casa y se embarca en una aventura para encontrar el legendario paraíso de los gatos. Para encontrar a su hijo, Blanket debe superar su miedo y reconciliarse con su pasado, con la ayuda de una guacamaya.","true","true","../assets/INFANTILES/INFANTIL-AVENTURASTOMMY.jpg","infantil"),
        new Peliculas ("Angry Birds 2 La Película",100,"Secuela de la película animada Angry Birds: La película (2016) que está dirigida por Thurop Van Orman (The Marvelous Misadventures of Flapjack) y John Rice (Rick y Morty). Por su parte, Peter Ackerman (The Americans, Ice Age 3: El origen de los dinosaurios) firma el guión de esta secuela basada en el famoso videojuego para móviles desarrollado por Rovio Entertainment. Vuelven a la carga Red, el pájaro de color rojo con problemas de mal genio, y sus amigos Chuck, el pájaro amarillo hiperactivo, y Bomb, el pájaro negro muy volátil. En esta segunda parte, los pájaros protagonistas y los intrigantes cerdos de color verde llevarán su conflicto a un nuevo nivel. Y es que, aparecerá una nueva y malvada villana: Zeta, un pájaro que vive en una isla helada. Cuando Zeta lance una bola de hielo sobre la isla en la que se encuentran Red y compañía, nuestros protagonistas tendrán que hacer frente a esta nueva amenaza.","true","true","../assets/INFANTILES/INFANTILES-ANGRY.jpg","infantil"),
        new Peliculas ("Mi Villano Favorito 3",110,"Mi villano favorito recibió una sorpresiva noticia al enterarse que tiene un hermano gemelo y fueron separados al nacer. Mientras se preparaba para enfrentar al nuevo villano Balthazar Bratt, Gru recibió la noticia que lo dejó sin habla. El nuevo hermano de Gru de nombre Dru vive en Freedonia donde heredó una enorme granja y es muy social, simpático y galán, a diferencia de Gru quien es conocido por ser un hombre gruñón pero con un gran corazón. Gru y Dru fueron separados al nacer, su padre se quedó con Dru y Gru creció junto a su madre, ambos tienen un gran parecido físico que es imposible negar. Cuando Gru buscó a su madre para preguntarle si era cierto lo de su hermano gemelo ella le contestó: “Cuando tú padre y yo decidimos separarnos, decidimos que cada uno se quedaría con uno de los gemelos, evidentemente a mi me tocó ser la última en escoger","true","true","../assets/INFANTILES/INFANTIL-VILLANO.jpg","infantil"),
        new Peliculas ("Raya y El Último Dragón",120,"En un reino conocido como Kumandra, una Tierra reimaginada habitada por una civilización antigua, un guerrero llamado Raya está decidido a encontrar al último dragón","true","true","../assets/INFANTILES/INFANTILES-RAYA.jpg","infantil"),
        new Peliculas ("Mal de Ojo", 135, "La misteriosa enfermedad de su hermana pequeña hará que Nala y su familia viajen a la casa de su abuela para encontrar la cura. En este lugar, ella aprenderá sobre leyendas locales de brujas que se alimentan de la sangre de los niños para permanecer por siempre jóvenes. Mientras más conoce Nala sobre estos seres diabólicos, más se convencerá de que su abuela podría ser una bruja", "true", "true", "../assets/TERROR/TERROR-MALDEOJO.jpg","terror"),
        new Peliculas ("Doblemente embarazada", 140, "Cristina, una atractiva mujer, descubre que está embarazada pocos días después de su boda. Aunque la situacióndebería ser vista como una bendición del matrimonio, la noticia cae como balde de agua fría en Cristina, pues no sabe quién podría ser el papá.","true","true","../assets/COMEDIA/DOBLEMENTE.jpg","comedia"),
        new Peliculas ("Un Papá Pirata", 150, "Ian, un adolescente de familia acomodada descubre que André, una antigua estrella de telenovelas arruinada y actual dueño alcohólico de un ruinoso negocio de botargas, es su verdadero padre. Ian decide que quiere arreglarle la vida y para eso entra a trabajar en su negocio, un lugar poblado de gente extravagante que pasa el día disfrazada de botarga, donde descubrirá el verdadero significado de la paternidad","true","true","../assets/COMEDIA/PAPAPIRATA.jpg","comedia"),
        new Peliculas ("Navidad de golpe", 160,"Tras perder la memoria esquiando, una heredera mimada termina al cuidado de un viudo desafortunado y su hija en los días previos a la Navidad. Película exclusiva de Netflix","true","true","../assets/COMEDIA/NAVIDADDEGOLPE.jpg","comedia"),
        new Peliculas("Bros: más que amigos",170,"Dos hombres con problemas de compromiso intentan una relación","true","true","../assets/COMEDIA/BROS.jpg","comedia"),
        new Peliculas("Jugando con Fuego",171,"Cuando el superintendente de bomberos, Jake Carson (John Cena) y su equipo de élite de expertos bomberos (Keegan-Michael Key, John Leguizamo y Tyler Mane) acuden al rescate de tres hermanos (Brianna Hildebrand, Christian Convery y Finley Rose Slater) durante un incendio forestal, se dan cuenta rápidamente de que ninguna capacitación podría prepararlos para su trabajo más desafiante hasta el momento: ser niñeras. Incapaces de localizar a los padres de los niños, los bomberos tienen sus vidas, trabajos e incluso su cuartel de bomberos de cabeza y aprenden rápidamente que los niños, como los incendios, son salvajes e impredecibles.","true","true","../assets/COMEDIA/JUGANDO.jpg","comedia")
    ]
    localStorage.setItem("peliculas",JSON.stringify(peliculas));
}


function createCarousel(){
    let peliculasCarousel = peliculas.filter(pelicula => pelicula.destacada == true);
    peliculasCarousel. forEach (pelicula => {
        const newItem =document.createElement ("div");
        newItem.classList.add("carousel slide");
        newItem.id= "carouselExampleControls"
        newItem.setAttribute("data-bs-ride","carousel");
           newItem.innerHTML= `
        <div class="carousel-inner" >
          <div  class="carousel-item active carousel-pag-principal" >
           <img src= "${pelicula.imagen}" class="d-block w-100 carousel-pag-principal img-fluid" alt="${pelicula.nombre}">
           //             <div class="carousel-caption d-block">
           //               <div class="style-text-carousel">
           //                 <h5>${pelicula.nombre}</h5>
           //                 <p>${pelicula.descripcion}</p>
           //                 <button type="button" class="btn btn-dark button-carousel">Ver mas</button>
           //               </div>
           //             </div>
           </div>
              </div>
          </div>
           `
           document.querySelector("#container-carousel").appendChild(newItem);
        });
    }
// <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
{/* <div class="carousel-inner" >
<div  class="carousel-item active carousel-pag-principal" >
  <img src="../assets/PORTADAS/peliculas_mas_taquilleras_5260.webp" class="d-block w-100 carousel-pag-principal img-fluid" alt="pelicula Aquaman">
  <div class="carousel-caption d-block">
    <div class="style-text-carousel">
      <h5>Aquaman</h5>
      <p>En Maine 1985, el guardián del faro Thomas Curry encuentra y rescata, durante una tormenta, seriamente herida a la princesa del reino submarino Atlantis, Atlanna y la lleva a su casa. Una vez curada Atlanna, ella y Tom comienzan un romance teniendo un hijo, Arthur, pero cuando Arthur tenía tres años, la casa es atacada por varios soldados Atlantes, Atlanna se ve obligada a abandonar a Arthur y Tom, prometiéndoles a volver de Atlantis a la superficie.</p>
      <button type="button" class="btn btn-dark button-carousel">Ver mas</button>
    </div>
    </div>
</div> */}

    function createCard (categoria, queryContainer){
        let peliculaCategoria = peliculas.filter(pelicula => pelicula.categoria == categoria);
        peliculaCategoria.forEach(pelicula => {
            const newCard=document.createElement ("div");
            newCard.classList.add ("card-style","pelicula");
            newCard.id = pelicula.id
            // newCard.classList.add ("card");
            // newCard.style.width= '18rem';
            newCard.innerHTML = `
            <img src= ${pelicula.imagen} alt= ${pelicula.nombre}>
            <div>
                <a href='http://127.0.0.1:5500/pages/detail.html#${pelicula.id}' class="btn btn-primary btn-sm button-carousel mt-2" ${pelicula.id}>Ver</a>
                <h3 class="d-none">${pelicula.nombre}</h3>
                    `
                document.querySelector(queryContainer).appendChild(newCard);
                });
            }

    function moveCarouselCard(categoria, derecha) {
        if(categoria === 'terror'){
            if(derecha){
                document.querySelector('#categoria-terror').scrollLeft+= 200;
            }else{
                document.querySelector('#categoria-terror').scrollLeft+= -200
            }
        }
        if(categoria === 'infantil'){
            if(derecha){
                document.querySelector('#categoria-infantil').scrollLeft+= 200;
            }else{
                document.querySelector('#categoria-infantil').scrollLeft+= -200
            }
        }
        if(categoria === 'accion'){
            if(derecha){
                document.querySelector('#categoria-accion').scrollLeft+= 200;
            }else{
                document.querySelector('#categoria-accion').scrollLeft+= -200
            }
        }
        if(categoria === 'comedia'){
            if(derecha){
                document.querySelector('#categoria-comedia').scrollLeft+= 200;
            }else{
                document.querySelector('#categoria-comedia').scrollLeft+= -200
            }
        }
    }    
    

            createCard("terror","#categoria-terror");
            createCard("infantil","#categoria-infantil");
            createCard("accion","#categoria-accion");
            createCard("comedia","#categoria-comedia");







// document.getElementById("buscador").addEventListener("keyup",(event)=>{
//     let infoInput= document.getElementById("buscador").value.toLowerCase();
//     console.log("texto",infoInput);
//     console.log("hola",peliculas.filter(pelicula => pelicula.nombre.includes("mal de ojo")));
//     let peliculaEncontrada= peliculas.filter(pelicula => pelicula.nombre.includes(infoInput));
//     console.log(peliculaEncontrada);
// }
// )

//     document.addEventListener("keyup",e=> {
//     if(e.target.matches("#buscador")){
//     document.querySelectorAll(".pelicula").forEach(elemento =>{
//     if ( elemento.${pelicula.nombre}.toLowerCase().includes(e.target.value.toLowerCase())){
//     elemento.classList.remove("filtro")
//     }else{
//     elemento.classList.add("filtro")
//     }
//  })
// }
// })

//! FUNCION PARA DESLOGUEARSE
const logOut =()=>{
    //BORRO DE LS EN USUARIO LOGUEADO
    localStorage.removeItem("userLogged");
    //REDIRIJO A LOGIN
    window.location.assign(window.location.origin + "/pages/login.html");
    }


    //!BUSCADOR  -------- CONSULTAR PARA CREAR FUNCION BUSCADOR
    document.addEventListener("keyup",e=> {
        if(e.target.matches("#buscador")){
        document.querySelectorAll(".pelicula").forEach(elemento =>{
            if ( elemento.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
            elemento.classList.remove("filtro")
            }else{
            elemento.classList.add("filtro")
            }
        })
        }
    })
