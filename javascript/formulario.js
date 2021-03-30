 var nombre = document.getElementById('nombre');
 var apellido = document.getElementById('apellido');
 var correo = document.getElementById('correo');

 cadenaAnalizar = nombre.toString(); 

 function enviarformulario(){
     console.log('enviar formulario')
     if (nombre.value.length <= 0 || apellido.value.length <= 0 || correo.value.length <= 0 ) {
         alert("Ingrese datos completos", "Nombre, Apellido y correo")          

     }    
}
