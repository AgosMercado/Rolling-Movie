class user{
    constructor(id, name, age, email, password){
        this.id = id 
        this.name = name
        this.age = age
        this.email = email
        this.password = password
    }
}
const users =[
    new User(25, "Agostina Mercado", 29, "agosmercado@gmail.com", 123456789),
    new User(24, "Gisel Hemsy", 28, "ghemsy@gmail.com", 123456788),
    new User(23, "Gabriel Rodriguez", 27, "gabz89.gr@gmail.com", 123456787),
    new User(22, "Nicolas Peralta", 26, "peralta.j.nicolas@gmail.com", 123456786),
    new User(21, "David Fernandez", 25, "davidfmamani@gmail.com", 123456785)
]
const login = (e)=>{
    e.prevenetDefault(); 
    const email = getElementById ('values-Email1').value;
    const password = getElementById('values-Password1').value;
    const userfound= user.find(user=>user.email===email && user.password===password);
    if(userfound){
        const isOk= userfound.password===password
        if(isOk);{
        alert('bienvenido');}
    }else{
        alertMessage('datos invalidos');
    }
}

function alertMessage (message,queryContainer){
    let alertMessage = document.createElement('div');
    alertMessage.classList.add('alert','alert-danger','mt-4');
    alertMessage.innerText = message;
    let container= document.querySelector(queryContainer);
    container.appendchild(alertMessage);
    setTimeout(()=>{
        alertMessage.remove()
    },3000)
}