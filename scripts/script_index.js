//Usuario y contrasenia preestablecidos
let user_1 = new User("Pedro15", "123456");

//Arrays para guardar los usuarios y contrasenia
const lista_users = [];

//Pusheo en primer instancia los preestablecidos
lista_users.push(user_1);

//Transformo el array a tipo String para poder guardarlo correctamente en el localstorage
const lista_users_enJSON = JSON.stringify(lista_users);

//Verifica si ya esta creada la clave
let verifica = JSON.parse(localStorage.getItem("lista_users_enJSON"));
//Si no esta creada entonces la crea y la inicia, caso contrario no hace nada
verifica == null &&
  localStorage.setItem("lista_users_enJSON", lista_users_enJSON);

//Respuesta de la pregunta secreta.
let respuesta = "Toby";

//Variable vinculada al elemento cuyo ID es login
let logea = document.getElementById("login");

//Variable vinculada al elemento cuyo ID es restart
let cambiar = document.getElementById("restart");

//Funcion Restablecer(Permite cambiar el usuario y la contrasenia para logearse a la pagina)
function restablecer() {
  Swal.fire({
    title: "Está seguro desea aniadir un nuevo usuario y contrasenia?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
    
  }).then((result) => {

    if (result.isConfirmed) {
      //Si la persona confirma que quiere restablecer los datos se ejecuta el ciclo if
        Swal.fire(
          "Para restrablecer usuario y contrasenia , responda la siguiente pregunta de seguridad"
        );

        let pregunta = prompt("¿Que nombre tenia su primer mascota?");

        //Si responde correctamente se le asigna nuevos valores al usuario y contrasenia
        if (pregunta == respuesta) {
          usuario = prompt(
            "Ingrese su nuevo nombre de usuario \n (Minimo 7 caracteres)"
          );

          contrasenia = prompt(
            "Ingrese su nueva contrasenia \n (Minimo 7 caracteres)"
          );

          let repetirContrasenia = prompt("Repita su contrasenia"); //Se solicita que confirme su contrasenia

          //Variable que da la longitud de el usuario
          let uLargo = parseInt(usuario.length);

          //Variable que da la longitud de la contrasenia
          let cLargo = parseInt(contrasenia.length);

          if (
            contrasenia == repetirContrasenia &&
            usuario != "" &&
            contrasenia != "" &&
            cLargo > 6 &&
            uLargo > 6
          ) {
            //Se verifica que usuario y contrasenia no sean vacios,que la confirmacion de contrasenia coincida, y que tengan minimo 7 caracteres

            //Se crea el objeto perteneciente a la clase User
            let nuevo_user = new User(usuario, contrasenia);

            const lista_user_par = JSON.parse(
              localStorage.getItem("lista_users_enJSON")
            );

            //Pusheo el nuevo objeto creado
            lista_user_par.push(nuevo_user);

            //Transformo a String
            const lista_user_st = JSON.stringify(lista_user_par);

            //Almaceno en el Local Storage con la misma clave
            localStorage.setItem("lista_users_enJSON", lista_user_st);

            //Alerta de creacion correcta de usuario y contrasenia
            Swal.fire("Nuevo usuario y contrasenia creados");
            
          } else {

            Swal.fire(

              "Su usuario y contrasenia no cumple con los requisito requeridos,ADIOS"
            );
          }
        } else {
          //En caso que la respuesta a la pregunta secreta sea incorrecta sale alerta de ADIOS

          Swal.fire(
            "Respuesta incorrecta, intente nuevamente mas tarde, ADIOS"
          );
        }
    }
  });
}

//Funcion Validacion(Cuando se apreta el boton "ingresar" se ejecuta la validacion)
function validacion(e) {
  e.preventDefault();

  let ingreso = document.getElementById("user").value;

  let clave = document.getElementById("pass").value;

  const users_par = JSON.parse(localStorage.getItem("lista_users_enJSON"));
  //Recorro el array obtenido anteriormente y si coinciden el user y la pass con los ingresados entonces redirijo a la pagina de inicio, caso contrario alert de datos incorrectos
  for (i = 0; i < users_par.length; i++) {
    if (ingreso == users_par[i].user && clave == users_par[i].pass) {
      Swal.fire({
        title: "Bienvenido",
        text: "Usuario y contrasenia correctos",
        icon: "success",
        showconfirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          location.href = "inicio.html";
        }
      });

      break;

      //Si termino de reccorrer el array y no hay coincidencia muestro el alerta de datos ingresados incorrecto
    } else if (
      i == users_par.length - 1 &&
      ingreso != users_par[i].user &&
      clave != users_par[i].pass
    ) {
      Swal.fire({
        title: "Error",
        text: "Usuario y contrasenia incorrectos",
        icon: "error",
        showconfirmButtonText: "Ok",
      });
    }
  }
}

function restart() {
  document.querySelector("form").reset();
}
// Las funciones validacion y restablecer se ejecutan al hacer click.
logea.addEventListener("click", validacion);

cambiar.addEventListener("click", restablecer);
