//Aray que va a conetener los empleados cargados
const lista_empleados=[];

//Transformo el array a tipo String para poder guardarlo correctamente en el localstorage
const lista_empleados_enJSON=JSON.stringify(lista_empleados);

let verificar=JSON.parse(localStorage.getItem("lista_empleados_enJSON"));

//Si no esta creada entonces la crea y la inicia, caso contrario no hace nada
if(verificar==null){

  //Almaceno en el local storage ya en formato string el array
  localStorage.setItem("lista_empleados_enJSON",lista_empleados_enJSON);
}


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
    //Primero se verifica que no este ya cargado el empleado en caso de ser asi no deja cargarlo y avisa que ya se encuentra en la nomina
    if(existe(dni)==true){

      alert("El empleado ya se encuentra cargado en la nomina")
      
      //En caso que no se encuentre cargado se validan los datos cargados
    } else if(validar_dato(nombre) && validar_dato(apellido) && validar_dato(dni) && validar_dato(nacimiento) && validar_dato(localidad) && validar_dato(calle) && validar_dato(altura) && validar_dato(telefono) && validar_dato(puesto) && validar_dato(sueldo) && validar_dato(sueldo)){
           
        let empleado = new Empleado(nombre,apellido,dni,nacimiento,localidad,calle,altura,telefono,puesto,sueldo,id,fecha_alta);

        const lista_empleado_par=JSON.parse(localStorage.getItem("lista_empleados_enJSON"));

        lista_empleado_par.push(empleado);

        const lista_empleados_st=JSON.stringify(lista_empleado_par);

        localStorage.setItem("lista_empleados_enJSON",lista_empleados_st);

        let mostrar=empleado.devolucion();

        //Aviso de carga correcta
        let confirmacion=confirm("Carga completada exitosamente "+"\n"+"\n"+mostrar);

        //Ejecucion de funcion restart para limpiar las celdas completadas y permitir el ingreso de nuevos datos
          restart(e)
      
      } else{
        
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

//Verifica si el empleado ya se encuentra cargado en la nomina o no. Devuelve true si se encuentra cargado
function existe(dni_cargado){

  const emple_par=JSON.parse(localStorage.getItem("lista_empleados_enJSON"));

  console.log(emple_par);
  
  for(i=0;i<emple_par.length;i++){
  
    if(dni_cargado==emple_par[i].dni){

      return true

    }

  }
}
//Al hacer click en el boton cargar empleado , se ejecuta la funcion cargar empleado
cargar.addEventListener("click",cargar_empleado);

//Formula para limpiar los datos de las celdas.
reset.addEventListener("click",restart);

