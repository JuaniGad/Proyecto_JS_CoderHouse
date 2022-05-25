//Aray que va a conetener los empleados cargados
const lista_empleados=[];

//Variable para cargar empleado
let cargar=document.getElementById("empleado_cargar");

let reset=document.getElementById("formulario_reset");

function validar_dato(dato){

  if(dato==""){

    return false;

  }else{

    return true;

  }
}
//Toma los valores colocados en los inputs y los valida con la fucnion validar datos, si todo es correcto y cumple las condiciones, entonces crea el Objeto empleado y lo agrega a un Array
function cargar_empleado(e){

    e.preventDefault();
      //Datos de los empleados, los toma de los colocados en los inputs del archivo HTML

      let nombre=document.getElementById("empleado_nombre").value;

      let apellido=document.getElementById("empleado_apellido").value;
      
      let dni=document.getElementById("empleado_dni").value;
      
      let nacimiento=document.getElementById("empleado_nacimiento").value;
      
      let localidad=document.getElementById("empleado_localidad").value;
      
      let calle=document.getElementById("empleado_calle").value;
      
      let altura=document.getElementById("empleado_altura").value;
      
      let telefono=document.getElementById("empleado_telefono").value;
      
      let puesto=document.getElementById("empleado_puesto").value;
      
      let id=apellido+" "+nombre;
      
      let fecha_alta=document.getElementById("empleado_alta").value;

      let sueldo=salario(puesto);
    //Validacion de datos
    if(validar_dato(nombre) && validar_dato(apellido) && validar_dato(dni) && validar_dato(nacimiento) && validar_dato(localidad) && validar_dato(calle) && validar_dato(altura) && validar_dato(telefono) && validar_dato(puesto) && validar_dato(sueldo) && validar_dato(sueldo)){

      let empleado = new Empleado(nombre,apellido,dni,nacimiento,localidad,calle,altura,telefono,puesto,sueldo,id,fecha_alta);

      //Agrego el empleado al array
      lista_empleados.push(empleado);

      let mostrar=empleado.devolucion();

      //Aviso de carga correcta
      let confirmacion=confirm("Carga completada exitosamente "+"\n"+mostrar);

        //Ejecucion de funcion restart para limpiar las celdas completadas y permitir el ingreso de nuevos datos
        restart(e)

    }else{

      alert("Revise los datos cargados");

    }
  }

//En funcion del puesto seleccionado se le asigna un sueldo al empleado, en caso de colocar "otro" , se ejecuta una ventana emergente para que coloque el monto.
function salario(posicion){

  if(posicion=="Administrativo"){
    
    return 90000;

  }else if(posicion=="Vendedor"){

    return 45000;

  }else{
    let otro_sueldo=parseInt(prompt("Ingrese el suldo del puesto"));

    let validar=isNaN(otro_sueldo);


    if(otro_sueldo!="" && validar==false){

      return otro_sueldo;
    
    }
  }
}

function restart(e){
  e.preventDefault();

  document.querySelector("form").reset();
  
}

//Al hacer click en el boton cargar empleado , se ejecuta la funcion cargar empleado
cargar.addEventListener("click",cargar_empleado);

//Formula para limpiar los datos de las celdas.
reset.addEventListener("click",restart);
