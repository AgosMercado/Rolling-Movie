class User2{
    constructor(id, name, age, email, password){
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password
    }
}
const users2 =[
    new User2(25, "Agostina Mercado", 29, "agosmercado@gmail.com", 123456789),
    new User2(24, "Gisel Hemsy", 28, "ghemsy@gmail.com", 123456788),
    new User2(23, "Gabriel Rodriguez", 27, "gabz89.gr@gmail.com", 123456787),
    new User2(22, "Nicolas Peralta", 26, "peralta.j.nicolas@gmail.com", 123456786),
    new User2(21, "David Fernandez", 25, "davidfmamani@gmail.com", 123456785)
]
const login = (e)=>{
    e.preventDefault(); 
    const email = document.getElementById ('values-Email1').value;
    const password = document.getElementById('values-Password1').value;
    const userfound= users2.find(user=>user.email===email && user.password===password);
    if(userfound){
        const isOk= userfound.password===password
        if(isOk);{
        alert('bienvenido');}
    }else{
        alertMessage2('datos invalidos');
    }
}

function alertMessage2 (message,queryContainer){
    let alertMessage = document.createElement('div');
    alertMessage.classList.add('alert','alert-danger','mt-4');
    alertMessage.innerText = message;
    let container= document.querySelector(queryContainer);
    container.appendchild(alertMessage);
    setTimeout(()=>{
        alertMessage2.remove()
    },3000)
}