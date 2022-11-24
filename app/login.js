class User{
    constructor(id, name, age, email, password, admin){
        this.id = id,
        this.name = name,
        this.age = age,
        this.email = email,
        this.password = password,
        this.admin = admin
    }
}

//* traigo admins de LS
let users = JSON.parse(localStorage.getItem("admins"));
const login = (e)=>{
    e.preventDefault();
    const email = document.getElementById('values-email-login').value;
    const password = document.getElementById('values-password-login').value;
    const userFound = users.find(user=>user.email==email);
    let errorsObject = validationLogin(email, password); //traigo el "objeto Errores" de la funcion
    let errorsKeys = Object.keys(errorsObject);  //Traigo el array de propiedades del objeto Errores
    let errorsValues = Object.values(errorsObject); //Traigo el array de valores del objeto errores
    if (errorsKeys.length==0){
        console.log("entro a");
    if(userFound && userFound.password==password){
        //GUARDO EL USUARIO EN LS
        localStorage.setItem("userLogged",JSON.stringify(userFound));
        console.log(userFound);
        window.location.assign(window.location.origin + "/pages/pagprincipal.html");
        console.log("entro");
    }else{
        alertMessage ("Los datos ingresados son incorrectos","#div-form");
    }}else{
        console.log("holis");
        errorsValues.map(error=>{
        alertMessage (error,"#div-form");
        // document.getElementById("formLogin").reset();
    })}
}



// //!FUNCION PARA CREAR UN ALERT EN UN CONTENEDOR Y LUEGO DE DOS SEGUNDOS SE BORRE
function alertMessage (message,queryContainer){
    let alertMessage = document.createElement('div'); 
    alertMessage.classList.add("style-message2","my-1");
    // alertMessage.setAttribute('role','alert');
    alertMessage.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>${message}`;
    let containerMessage= document.querySelector(queryContainer);
    containerMessage.appendChild(alertMessage);
    setTimeout(()=>{
        alertMessage.remove()
    },3000)
}




const validationLogin = (email, password)=>{ 
    console.log(email);
    console.log(password);
    let errors = {};
    let emailOk = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    if(!emailOk) errors.email = " Verifica el email ingresado";
    console.log(emailOk);
    let passwordOk = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if(!passwordOk) errors.password = " Verifica la contraseña ingresada";
    console.log(errors); 
    return errors;
}


const validationRegister2 = (email2)=>{  
    let errors = {};
    let emailOk = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email2);
    if(!emailOk) errors.email = " Verifica el email ingresado";
    return errors;
}
const validationForgetPassword = (e)=>{
    e.preventDefault()
    let email2 = document.getElementById("password-email-value").value;
    let errorsObject = validationRegister2(email2); //traigo el "objeto Errores" de la funcion
    let errorsKeys = Object.keys(errorsObject);  //Traigo el array de propiedades del objeto Errores
    let errorsValues = Object.values(errorsObject); //Traigo el array de valores del objeto errores
    if (errorsKeys.length==0){
        alertMessage (" ¡Listo! Te enviamos un email con instrucciones para recuperar tu contraseña","#container-alertMessage2");
    }else{
        errorsValues.map(error=>{
            alertMessage (error,"#container-alertMessage2");
        })
    }
}