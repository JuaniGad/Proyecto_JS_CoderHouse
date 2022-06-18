//Asoscio el input a una variable para luego ejecutar mas adelante con una funcion
let verificars=document.getElementById("empleado_verificar");

let editor=document.getElementById("empleado_guardar_cambios")


function verificador(e){

    //Evita el evento por default
    e.preventDefault();

    //Tomo el valor colocado en el input y lo asigno a una variable
    let id_dni=document.getElementById("empleado_editar").value;

    const list_empl_par=JSON.parse(localStorage.getItem("lista_empleados_enJSON"))

    //Hago una busqueda de ese valor en el array correspondiente que tiene la lista de empleados
    let busqueda_id=list_empl_par.some((empleado)=>empleado.id===id_dni);

    let busqueda_dni=list_empl_par.some((empleado)=>empleado.dni===id_dni);

    //Si encuentra el empleado entonces avisa que puede continuar sino se solicita cargarlo.

    busqueda_dni || busqueda_id ? Swal.fire("El empleado se encuentra registrado, puede continuar") : Swal.fire("El empleado no se encuentra cargado en la nomina, primero debe cargarlo en la nomina") ;

}

function editar(e){
    
    e.preventDefault();

    const empleados_list=[]

    const list_empl_par=JSON.parse(localStorage.getItem("lista_empleados_enJSON"));

    for (const emplea_nuevo of list_empl_par){

    empleados_list.push(new Empleado_prueba(emplea_nuevo));

    }

    let posicion=devuelve_posicion(empleados_list);

    let dato_a_editar=document.getElementById("empleado_ediciones").value;

    let nuevo_valor=document.getElementById("empleado_cambio").value;

    validar_dato(nuevo_valor);

    if(validar_dato(nuevo_valor)){
        switch(dato_a_editar){

            case "Nombre":

                empleados_list[posicion].set_nombre(nuevo_valor)

                empleados_list[posicion].id=empleados_list[posicion].apellido+" "+empleados_list[posicion].nombre;

                Swal.fire("Nombre modificado exitosamente");

            break;

            case "Apellido":

                empleados_list[posicion].set_apellido(nuevo_valor);

                empleados_list[posicion].id=empleados_list[posicion].apellido+" "+empleados_list[posicion].nombre;

                Swal.fire("Apellido modificado exitosamente");

            break;

            case "DNI":

                empleados_list[posicion].set_dni(nuevo_valor)

                Swal.fire("DNI modificado exitosamente");

            break;

            case "Localidad":

                empleados_list[posicion].set_localidad(nuevo_valor)

                Swal.fire("Localidad modificada exitosamente");

            break;

            case "Calle":

                empleados_list[posicion].set_calle(nuevo_valor)

                Swal.fire("Calle modificada exitosamente");

            break;

            case "Altura":

                empleados_list[posicion].set_altura(nuevo_valor)

                Swal.fire("Altura modificada exitosamente");

            break;

            case "Telefono":

                empleados_list[posicion].set_telefono(nuevo_valor)

                Swal.fire("Telfono modificado exitosamente");

            break;

            case "Puesto":

                empleados_list[posicion].set_puesto(nuevo_valor)

                Swal.fire("Puesto modificado exitosamente");

            break;

            case "Sueldo":

                empleados_list[posicion].set_sueldo(nuevo_valor)

                Swal.fire("Sueldo modificado exitosamente");

            break;

        }

        const empleados_list_st=JSON.stringify(empleados_list);

        localStorage.setItem("lista_empleados_enJSON",empleados_list_st);
    }else{

        Swal.fire("Debe ingresar un nuevo valor para poder editar correctamente");

    }


}

function devuelve_posicion(array_busqueda){

    for(i=0;i<array_busqueda.length;i++){
    
        let dni_id=document.getElementById("empleado_editar").value;

        if(array_busqueda[i].dni==dni_id || array_busqueda[i].id==dni_id){

            return i;
        }

    }

}

function validar_dato(dato){

    if(dato==""){
  
      return false;
  
    }else{
  
      return true;
  
    }
  }
verificars.addEventListener("click",verificador);

editor.addEventListener("click",editar);