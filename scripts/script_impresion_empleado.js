const lista_parse = JSON.parse(localStorage.getItem("lista_empleados_enJSON"));

let divcopia = document.getElementById("copia");
let input_texto = document.getElementById("empleado_busqueda");

input_texto.addEventListener("keyup", () => {
//Evemto que a medida que se va escribiendo el dni en el input muestra si se encuentra o no, en caso de encontrarlo procede a mostrar la informacion detallada del empleado
  let dni_emp = document.getElementById("empleado_busqueda").value;

  if (lista_parse == null) {

    Swal.fire("No hay empleados cargados en la nomina");

  } else {
    for (i = 0; i < lista_parse.length; i++) {
      if (lista_parse[i].dni == dni_emp) {
        divcopia.innerHTML = `
            <h3>ID: ${lista_parse[i].id}<h3>
            <ul>
                <li>Nombre: ${lista_parse[i].nombre}</li>
                <li>Apellido: ${lista_parse[i].apellido}</li>
                <li>DNI: ${lista_parse[i].dni}</li>
                <li>Fecha de nacimiento: ${lista_parse[i].nacimiento}</li>
                <li>Localidad: ${lista_parse[i].localidad}</li>
                <li>Direccion: ${lista_parse[i].calle} ${lista_parse[i].altura} </li>
                <li>Telefono: ${lista_parse[i].telefono}</li>
                <li>Puesto: ${lista_parse[i].puesto}</li>
                <li>Fecha de alta: ${lista_parse[i].fecha_alta}</li>
                <li>Sueldo base: ${lista_parse[i].sueldo}</li>
            </ul>`;

        break;
      } else if (i == lista_parse.length - 1 && lista_parse[i].dni != dni_emp) {

        divcopia.innerHTML = `
        
        <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en la nomina<h3>`;

      }
    }
  }
});
