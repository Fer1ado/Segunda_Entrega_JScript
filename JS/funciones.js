
function creoId() {
    return parseInt(Math.random() * 10000)
}


class Venta{
    constructor(nom, dir, tel, mail, id){
    this.nom = nom
    this.dir = dir
    this.tel = tel
    this.mail = mail
    this.id = id
}
}


function compra() {
 
    let nombre = prompt("Ingrese su Nombre:")
    let direccion = prompt("ingrese su direcciòn:")
    let telefono = prompt("ingrese su telefono:")
    let mail = prompt("ingrese su direcciòn de E-mail:")
    let idcompra = creoId()
    
    debugger
  
    let respuesta = confirm("los datos ingresados son:" + "\n \n " + nombre + "\n " + direccion + "\n " + telefono + "\n " + mail + "\n\nSi son correctos Presiona ACEPTAR,\nSi no son correctos Presiona CANCELAR y vuelve a cargarlos")
        if(respuesta === true){ alert("tu producto sera enviado a la calle:" + "\n \n " + direccion + "\n\n Se envió un correo con la facturación a:"+ "\n\n"  + mail + "\n \n Tu número de operación es:" + "   " + idcompra)
     const nuevaventa = new Venta (nombre, direccion,telefono,mail,idcompra)} 
        if(respuesta === false){compra()}
  }


