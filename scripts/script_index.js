//Usuario para ingresar a la pagina
let usuario = "Pedro15";

//Clave para ingresar a la pagina
let contrasenia = "123456";

//Respuesta de la pregunta secreta
let respuesta = "Toby";

//Variable vinculada al elemento cuyo ID es login
let logea=document.getElementById("login");

//Variable vinculada al elemento cuyo ID es restart
let cambiar=document.getElementById("restart");

//Funcion Restablecer(Permite cambiar el usuario y la contraseña para logearse a la pagina)
function restablecer(){
    
  let aviso=confirm("Desea restablecer la contrasenia y el usuario?");

  //Si la persona confirma que quiere restablecer los datos se ejecuta el ciclo if
  if(aviso==true){

      alert("Para restrablecer usuario y contrasenia , responda la siguiente pregunta de seguridad");

      let pregunta=prompt("¿Que nombre tenia su primer mascota?");

      //Si responde correctamente se le asigna nuevos valores al usuario y contrasenia
      if(pregunta==respuesta){

          usuario=prompt("Ingrese su nuevo nombre de usuario \n (Minimo 7 caracteres)");

          contrasenia=prompt("Ingrese su nueva contrasenia \n (Minimo 7 caracteres)");

          let repetirContrasenia=prompt("Repita su contrasenia"); //Se solicita que confirme su contrasenia
          
          //Variable que da la longitud de el usuario
          let uLargo=parseInt(usuario.length);

          //Variable que da la longitud de la contrasenia    
          let cLargo=parseInt(contrasenia.length);

          if(contrasenia==repetirContrasenia && usuario!="" && contrasenia!="" && cLargo>6 && uLargo>6){//Se verifica que usuario y contrasenia no sean vacios,que la confirmacion de contrasenia coincida, y que tengan minimo 7 caracteres

              alert("Usuario y Contraseña restablecidos");

          }else{

            alert("Su usuario y contrasenia no cumple con los requisito requeridos,ADIOS");

          }
        }else{//En caso que la respuesta a la pregunta secreta sea incorrecta sale alerta de ADIOS

          alert("Respuesta incorrecta, intente nuevamente mas tarde, ADIOS");
      }
  }
  
  
}

//Funcion Validacion(Cuando se apreta el boton "ingresar" se ejecuta la validacion)
function validacion(e) {

  e.preventDefault();

  let ingreso = document.getElementById("user").value;

  let clave = document.getElementById("pass").value;

  if (ingreso == usuario && clave == contrasenia) {

    alert("Usuario y contrasenia correctos, BIENVENIDO");

    location.href="inicio.html";

  } else {

    alert("Usuario y Contraseña incorrectos");

  }
}

function restart(){

  document.querySelector("form").reset();
  
}
// Las funciones validacion y restablecer se ejecutan al hacer click.
logea.addEventListener("click",validacion);

cambiar.addEventListener("click",restablecer);

