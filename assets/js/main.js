function resizeHeaderOnScroll() {
  var distanciaY = window.pageYOffset || document.documentElement.scrollTop;

  /*
  window.pageYOffset:  devuelve los píxeles del documento actual.
  scrollTop : devuelve el número de píxeles contenido de un elemento se desplaza verticalmente.
  */

  var limite = 100;
  var elNav = document.getElementById('navegador'); 

  if (distanciaY > limite) {
    elNav.classList.add("el-navegador");
    elNav.classList.remove("el-menu");
  }else{
    elNav.classList.remove("el-navegador");
    elNav.classList.add("el-menu");    
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);




var boton = document.getElementById("btn-send");
boton.addEventListener("click", function(e){
  e.preventDefault();
  
  var nombre = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var nombreValido = document.getElementsByClassName("form-ingreso")[0];
  var emailValido = document.getElementsByClassName("form-ingreso")[1];
  var phoneValido = document.getElementsByClassName("form-ingreso")[2];
  var mensajeValido = document.getElementsByClassName("form-ingreso")[3];



      if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(name))){
      var respuestaNom = document.createElement("span");  
      respuestaNom.classList.add("el-span")
      var textoNom = document.createTextNode("•  La primera letra debe ser en mayúscula");
      respuestaNom.appendChild(textoNom);   
      nombreValido.appendChild(respuestaNom);
     }  


      if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email))) {
        var respuestaEmail = document.createElement("span");  
        respuestaEmail.classList.add("el-span")
        var textoEmail = document.createTextNode("•  Ingrese su correo correctamente");
        respuestaEmail.appendChild(textoEmail);   
        emailValido.appendChild(respuestaEmail);
      }



      if(!(/\+569[0-9]{8}/.test(phone))){
        var respuestaPhone = document.createElement("span");  
        respuestaPhone.classList.add("el-span")
        var textoPhone = document.createTextNode("•  Ingrese su teléfono correctamente");
        respuestaPhone.appendChild(textoPhone);   
        phoneValido.appendChild(respuestaPhone);      
      }
     


      if(message == ""){
        var respuestaMensaje = document.createElement("span");  
       respuestaMensaje.classList.add("el-span")
        var textoMensaje = document.createTextNode("•  Ingrese su mensaje");
        respuestaMensaje.appendChild(textoMensaje);   
        mensajeValido.appendChild(respuestaMensaje);
      }


 })