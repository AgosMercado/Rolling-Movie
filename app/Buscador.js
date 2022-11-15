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