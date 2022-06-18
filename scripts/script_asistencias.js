//Array de los meses donde se cargaran los nuevos objetos creado de ASISTENCIAS

//2022
const enero_22=[];
const febrero_22=[];
const marzo_22=[];
const abril_22=[];
const mayo_22=[];
const junio_22=[];
const julio_22=[];
const agosto_22=[];
const septiembre_22=[];
const octubre_22=[];
const noviembre_22=[];
const diciembre_22=[];

//2023
const enero_23=[];
const febrero_23=[];
const marzo_23=[];
const abril_23=[];
const mayo_23=[];
const junio_23=[];
const julio_23=[];
const agosto_23=[];
const septiembre_23=[];
const octubre_23=[];
const noviembre_23=[];
const diciembre_23=[];

//Array para almacenar un objeto
const array_objeto=[""];

//Asoscio el input a una variable para luego ejecutar mas adelante con una funcion
let verificars=document.getElementById("empleado_verificar");

let cargar_asistencia=document.getElementById("cargar_asistencias");

function verificador(e){

    //Evita el evento por default
    e.preventDefault();

    //Tomo el valor colocado en el input y lo asigno a una variable
    let id_dni=document.getElementById("empleado_buscar").value;

    const list_empl_par=JSON.parse(localStorage.getItem("lista_empleados_enJSON"))

    //Hago una busqueda de ese valor en el array correspondiente que tiene la lista de empleados
    let busqueda_id=list_empl_par.some((empleado)=>empleado.id===id_dni);

    let busqueda_dni=list_empl_par.some((empleado)=>empleado.dni===id_dni);

    //Si encuentra el empleado entonces avisa que puede continuar sino se solicita cargarlo.
    busqueda_dni || busqueda_id ? Swal.fire("El empleado se encuentra registrado, puede continuar") : Swal.fire("El empleado no se encuentra cargado en la nomina, primero debe cargarlo en la nomina") ;


}

function cargar_completar_datos(e){

    //Tomo el valor colocado en el input y lo asigno a una variable
    let id_dni=document.getElementById("empleado_buscar").value;

    const list_empl_pars=JSON.parse(localStorage.getItem("lista_empleados_enJSON"))

    //Hago una busqueda de ese valor en el array correspondiente que tiene la lista de empleados tomada del LocalStorage
    let busqueda_id=list_empl_pars.some((empleado)=>empleado.id===id_dni);
  
    let busqueda_dni=list_empl_pars.some((empleado)=>empleado.dni===id_dni);

    e.preventDefault();

    if(busqueda_id || busqueda_dni){

        //Funcion que si se encontro el empleado me pushea la "lista_efimera" el objeto solo con los datos que necesito que son ID,DNI Y SUELDO
        busqueda_id_dni(busqueda_dni,busqueda_id,id_dni)

        //Tomo los valores colocados en el HTML y lo asigno a variables(Seran utilizadas luego para completar el objeto)
    
        let cargar_mes=document.getElementById("empleado_mes").value;
    
        let cargar_ausentes=document.getElementById("empleado_ausentes").value;
       
        let cargar_tarde=document.getElementById("empleado_tardes").value;
       
        let cargar_horas_extras=document.getElementById("empleado_horas_extras").value;
    
        let cargar_anio=document.getElementById("empleado_anio").value;
       
        let id_efimero=lista_efimera[0].id;
    
        let dni_efimero=lista_efimera[0].dni;
    
        let sueldo_efimero=lista_efimera[0].sueldo;

        let emple_presentismo=0

        if(cargar_tarde<3 && cargar_ausentes==0){

         emple_presentismo= 5000;

        }

        if(validar_todo(cargar_tarde) && validar_todo(cargar_horas_extras) && validar_todo(cargar_ausentes)){

            Swal.fire("Los datos son correctos, y cumplen su formato")

            let sueldo_final=parseInt(sueldo_efimero)+parseInt(emple_presentismo)+((parseInt(sueldo_efimero)/30/8)*parseInt(cargar_horas_extras).toFixed(2));
           
            //Creo un objeto y completo sus datos con los valores ingresados
            let empleado_asistencia=new Asistencias(id_efimero,dni_efimero,sueldo_efimero,cargar_anio,cargar_mes,cargar_ausentes,cargar_tarde,cargar_horas_extras,emple_presentismo,sueldo_final);
               
            //Lo paso a un array que hara de reserva
            array_objeto[0]=empleado_asistencia;
    
            //Finalmente pusheo el empleado en el mes y anio que el usuario halla seleccionado
            if(cargar_anio==2022){
    
                listado_mes_2022(cargar_mes);
    
            }else if(cargar_anio==2023){
    
                listado_mes_2023(cargar_mes);
    
            }

        }else{

            Swal.fire("Revise los datos cargados y su formato.")

        }                 

    }else{
        
        Swal.fire("El empleado que quiere actualizar no se encuentra en la nomina , primero debe cargarlo")

    }
}
//Funcion que si se encontro el empleado me pushea la la "lista_efimera" el objeto solo con los datos que necesito que son ID,DNI Y SUELDO
function busqueda_id_dni(a,b,c){

    if(a){

        const list_empl_pars_ef=JSON.parse(localStorage.getItem("lista_empleados_enJSON"))

        //Creo un Array al cual le va a ir asignado el empleado verificado 
    const lista_previa=list_empl_pars_ef.filter((empleado)=>empleado.dni.includes(c));    
        
        //Se toma del empleado cargado anteriormente en lista_previa solo los datos que se necesitan y se ingresa el nuevo objeto en lista efimera.
        lista_efimera=lista_previa.map(elemento=>{

        return  {
            id:elemento.id,
            dni:elemento.dni,
            sueldo:elemento.sueldo     
        }
    })

    }else if(b){

        const lista_previa=list_empl_pars_ef.filter((empleado)=>empleado.id.includes(c));
    
        lista_efimera=lista_previa.map(elemento=>{
    
            return  {
                id:elemento.id,
                dni:elemento.dni,
                sueldo:elemento.sueldo     
            }
        })
    }
}

//Carga el empleado en el mes correspondiente segun el anio
function listado_mes_2022(mes){
    
    switch (mes) {
      case "Enero":
        //Verifico el Local Storage para ver si ya hay datos almacenados, si los hay lo parseo
        const ene_2022_par = JSON.parse(
          localStorage.getItem("ene_2022_enJSON")
        );

        //Si no hay datos almacenados entonces cargo el objeto y lo pushe en un array par aluego transforene todo en String y almacenarlo en el Local Storage con la clave correspondiente
        if (ene_2022_par == null) {
          enero_22.push(array_objeto[0]);

          const enero_22_st = JSON.stringify(enero_22);

          localStorage.setItem("ene_2022_enJSON", enero_22_st);

          Swal.fire("Carga exitosa");

          //Si ya hay datos en el local storage, primero verifico que el empleado no se encuentre ya cargado, de ser asi doy aviso que ya se encuentra cargado caso contrario pusheo en el array de objetos parseado al inicio y luego lo transformo en String para almacenarlo en el Local Storage nuevamente con la misma clave.
        } else {
          for (i = 0; i < ene_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;
            if (dni_a_buscar == ene_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              ene_2022_par.push(array_objeto[0]);

              const ene_2022_st = JSON.stringify(ene_2022_par);

              localStorage.setItem("ene_2022_enJSON", ene_2022_st);
            }
          }
        }

        break;

      case "Febrero":
        const feb_2022_par = JSON.parse(
          localStorage.getItem("feb_2022_enJSON")
        );

        if (feb_2022_par == null) {
          febrero_22.push(array_objeto[0]);

          const febrero_22_st = JSON.stringify(febrero_22);

          localStorage.setItem("feb_2022_enJSON", febrero_22_st);

          Swal.fire("Carga exitosa");

        } else {
          for (i = 0; i < feb_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;
            if (dni_a_buscar == feb_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              feb_2022_par.push(array_objeto[0]);

              const feb_2022_st = JSON.stringify(feb_2022_par);

              localStorage.setItem("feb_2022_enJSON", feb_2022_st);
            }
          }
        }

        break;

      case "Marzo":
        const mar_2022_par = JSON.parse(
          localStorage.getItem("mar_2022_enJSON")
        );

        if (mar_2022_par == null) {
          marzo_22.push(array_objeto[0]);

          const marzo_22_st = JSON.stringify(marzo_22);

          localStorage.setItem("mar_2022_enJSON", marzo_22_st);

          Swal.fire("Carga exitosa");

        } else {
          for (i = 0; i < mar_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;
            if (dni_a_buscar == mar_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              mar_2022_par.push(array_objeto[0]);

              const mar_2022_st = JSON.stringify(mar_2022_par);

              localStorage.setItem("mar_2022_enJSON", mar_2022_st);
            }
          }
        }

        break;

      case "Abril":
        const abr_2022_par = JSON.parse(
          localStorage.getItem("abr_2022_enJSON")
        );

        if (abr_2022_par == null) {
          abril_22.push(array_objeto[0]);

          const abril_22_st = JSON.stringify(abril_22);

          localStorage.setItem("abr_2022_enJSON", abril_22_st);

          Swal.fire("Carga exitosa");

        } else {
          for (i = 0; i < abr_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;
            if (dni_a_buscar == abr_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              abr_2022_par.push(array_objeto[0]);

              const abr_2022_st = JSON.stringify(abr_2022_par);

              localStorage.setItem("abr_2022_enJSON", abr_2022_st);
            }
          }
        }

        break;

      case "Mayo":
        const may_2022_par = JSON.parse(
          localStorage.getItem("may_2022_enJSON")
        );

        if (may_2022_par == null) {
          mayo_22.push(array_objeto[0]);

          const mayo_22_st = JSON.stringify(mayo_22);

          localStorage.setItem("may_2022_enJSON", mayo_22_st);

          Swal.fire("Carga exitosa");

        } else {
          for (i = 0; i < may_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;
            if (dni_a_buscar == may_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              may_2022_par.push(array_objeto[0]);

              const may_2022_st = JSON.stringify(may_2022_par);

              localStorage.setItem("may_2022_enJSON", may_2022_st);
            }
          }
        }

        break;

      case "Junio":
        const jun_2022_par = JSON.parse(
          localStorage.getItem("jun_2022_enJSON")
        );

        if (jun_2022_par == null) {
          junio_22.push(array_objeto[0]);

          const jun_22_st = JSON.stringify(junio_22);

          localStorage.setItem("jun_2022_enJSON", jun_22_st);

          Swal.fire("Carga exitosa");
        } else {
          for (i = 0; i < jun_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;

            if (dni_a_buscar == jun_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              jun_2022_par.push(array_objeto[0]);

              const jun_2022_st = JSON.stringify(jun_2022_par);

              localStorage.setItem("jun_2022_enJSON", jun_2022_st);

              Swal.fire("Carga exitosa");
            }
          }
        }

        break;

      case "Julio":
        const jul_2022_par = JSON.parse(
          localStorage.getItem("jul_2022_enJSON")
        );

        if (jul_2022_par == null) {
          julio_22.push(array_objeto[0]);

          const jul_22_st = JSON.stringify(julio_22);

          localStorage.setItem("jul_2022_enJSON", jul_22_st);

          Swal.fire("Carga exitosa");
        } else {
          for (i = 0; i < jul_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;

            if (dni_a_buscar == jul_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              jul_2022_par.push(array_objeto[0]);

              const jul_2022_st = JSON.stringify(jul_2022_par);

              localStorage.setItem("jul_2022_enJSON", jul_2022_st);
            }
          }
        }

        break;

      case "Agosto":
        const ago_2022_par = JSON.parse(
          localStorage.getItem("ago_2022_enJSON")
        );

        if (ago_2022_par == null) {
          agosto_22.push(array_objeto[0]);

          const ago_22_st = JSON.stringify(agosto_22);

          localStorage.setItem("ago_2022_enJSON", ago_22_st);

          Swal.fire("Carga exitosa");
        } else {
          for (i = 0; i < ago_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;

            if (dni_a_buscar == ago_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              ago_2022_par.push(array_objeto[0]);

              const ago_2022_st = JSON.stringify(ago_2022_par);

              localStorage.setItem("ago_2022_enJSON", ago_2022_st);
            }
          }
        }
        break;

      case "Septiembre":
        const sep_2022_par = JSON.parse(
          localStorage.getItem("sep_2022_enJSON")
        );

        if (sep_2022_par == null) {
          septiembre_22.push(array_objeto[0]);

          const sep_22_st = JSON.stringify(septiembre_22);

          localStorage.setItem("sep_2022_enJSON", sep_22_st);

          Swal.fire("Carga exitosa");
        } else {
          for (i = 0; i < sep_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;

            if (dni_a_buscar == sep_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              sep_2022_par.push(array_objeto[0]);

              const sep_2022_st = JSON.stringify(sep_2022_par);

              localStorage.setItem("sep_2022_enJSON", sep_2022_st);
            }
          }
        }
        break;

      case "Octubre":
        const oct_2022_par = JSON.parse(
          localStorage.getItem("oct_2022_enJSON")
        );

        if (oct_2022_par == null) {
          octubre_22.push(array_objeto[0]);

          const oct_22_st = JSON.stringify(octubre_22);

          localStorage.setItem("oct_2022_enJSON", oct_22_st);

          Swal.fire("Carga exitosa");
        } else {
          for (i = 0; i < oct_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;

            if (dni_a_buscar == oct_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              oct_2022_par.push(array_objeto[0]);

              const oct_2022_st = JSON.stringify(oct_2022_par);

              localStorage.setItem("oct_2022_enJSON", oct_2022_st);
            }
          }
        }
        break;

      case "Noviembre":
        const nov_2022_par = JSON.parse(
          localStorage.getItem("nov_2022_enJSON")
        );

        if (nov_2022_par == null) {
          noviembre_22.push(array_objeto[0]);

          const nov_22_st = JSON.stringify(noviembre_22);

          localStorage.setItem("nov_2022_enJSON", nov_22_st);

          Swal.fire("Carga exitosa");
        } else {
          for (i = 0; i < nov_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;

            if (dni_a_buscar == nov_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              nov_2022_par.push(array_objeto[0]);

              const nov_2022_st = JSON.stringify(nov_2022_par);

              localStorage.setItem("nov_2022_enJSON", nov_2022_st);
            }
          }
        }
        break;

      case "Diciembre":
        const dic_2022_par = JSON.parse(
          localStorage.getItem("dic_2022_enJSON")
        );

        if (dic_2022_par == null) {
          diciembre_22.push(array_objeto[0]);

          const dic_22_st = JSON.stringify(diciembre_22);

          localStorage.setItem("dic_2022_enJSON", dic_22_st);

          Swal.fire("Carga exitosa");
        } else {
          for (i = 0; i < dic_2022_par.length; i++) {
            let dni_a_buscar = document.getElementById("empleado_buscar").value;

            if (dni_a_buscar == dic_2022_par[i].dni) {
              Swal.fire("El empleado ya se encuentra cargado en el mes");
            } else {
              dic_2022_par.push(array_objeto[0]);

              const dic_2022_st = JSON.stringify(dic_2022_par);

              localStorage.setItem("dic_2022_enJSON", dic_2022_st);
            }
          }
        }
        break;

      default:
        Swal.fire("El mes no esta en curso");
    }
    
    


}

function listado_mes_2023(mes){
    
    switch (mes){ 

        case "Enero":

            const ene_2023_par=JSON.parse(localStorage.getItem("ene_2023_enJSON"));

            if(ene_2023_par==null){

                enero_23.push(array_objeto[0]);

                const ene_23_st=JSON.stringify(enero_23);

                localStorage.setItem("ene_2023_enJSON",ene_23_st);

                Swal.fire("Carga exitosa")

            }else{

                for(i=0;i<ene_2023_par.length;i++){

                    let dni_a_buscar=document.getElementById("empleado_buscar").value;

                    if(dni_a_buscar==ene_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                                
                    }else{

                        ene_2023_par.push(array_objeto[0]);
                        
                        const ene_2023_st=JSON.stringify(ene_2023_par);

                        localStorage.setItem("ene_2023_enJSON",ene_2023_st);

                    }  
                }
            }        
        break;

        case "Febrero":

            const feb_2023_par=JSON.parse(localStorage.getItem("feb_2023_enJSON"));

            if(feb_2023_par==null){

                febrero_23.push(array_objeto[0]);

                const feb_23_st=JSON.stringify(febrero_23);

                localStorage.setItem("feb_2023_enJSON",feb_23_st);

                Swal.fire("Carga exitosa")

            }else{

                for(i=0;i<feb_2023_par.length;i++){

                    let dni_a_buscar=document.getElementById("empleado_buscar").value;

                    if(dni_a_buscar==feb_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                                
                    }else{

                        feb_2023_par.push(array_objeto[0]);
                        
                        const feb_2023_st=JSON.stringify(feb_2023_par);

                        localStorage.setItem("feb_2023_enJSON",feb_2023_st);

                    }  
                }
            }             
        break;

        case "Marzo":

            const mar_2023_par=JSON.parse(localStorage.getItem("mar_2023_enJSON"));

            if(mar_2023_par==null){

                marzo_23.push(array_objeto[0]);

                const mar_23_st=JSON.stringify(marzo_23);

                localStorage.setItem("mar_2023_enJSON",mar_23_st);

                Swal.fire("Carga exitosa")

            }else{

                for(i=0;i<mar_2023_par.length;i++){

                    let dni_a_buscar=document.getElementById("empleado_buscar").value;

                    if(dni_a_buscar==mar_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                                
                    }else{

                        mar_2023_par.push(array_objeto[0]);
                        
                        const mar_2023_st=JSON.stringify(mar_2023_par);

                        localStorage.setItem("mar_2023_enJSON",mar_2023_st);

                    }  
                }
            }             
        break;

        case "Abril":

            const abr_2023_par=JSON.parse(localStorage.getItem("abr_2023_enJSON"));

            if(abr_2023_par==null){

                abril_23.push(array_objeto[0]);

                const abr_23_st=JSON.stringify(abril_23);

                localStorage.setItem("abr_2023_enJSON",abr_23_st);

                Swal.fire("Carga exitosa")

            }else{

                for(i=0;i<abr_2023_par.length;i++){

                    let dni_a_buscar=document.getElementById("empleado_buscar").value;

                    if(dni_a_buscar==abr_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                                
                    }else{

                        abr_2023_par.push(array_objeto[0]);
                        
                        const abr_2023_st=JSON.stringify(abr_2023_par);

                        localStorage.setItem("abr_2023_enJSON",abr_2023_st);

                    }  
                }
            }        
        break;

        case "Mayo":

            const may_2023_par=JSON.parse(localStorage.getItem("may_2023_enJSON"));

            if(may_2023_par==null){

                mayo_23.push(array_objeto[0]);

                const mayo_23_st=JSON.stringify(mayo_23);

                localStorage.setItem("may_2023_enJSON",mayo_23_st);

                Swal.fire("Carga exitosa")

            }else {

                for(i=0;i<may_2023_par.length;i++){

                let dni_a_buscar=document.getElementById("empleado_buscar").value;
                    if(dni_a_buscar==may_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                    
                    }else{

                        may_2023_par.push(array_objeto[0]);
                        
                        const may_2023_st=JSON.stringify(may_2023_par);
        
                        localStorage.setItem("may_2023_enJSON",may_2023_st);
        
                    }  

                }
            }

        break;

        case "Junio":

                const jun_2023_par=JSON.parse(localStorage.getItem("jun_2023_enJSON"));

                if(jun_2023_par==null){

                    junio_23.push(array_objeto[0]);

                    const jun_23_st=JSON.stringify(junio_23);

                    localStorage.setItem("jun_2023_enJSON",jun_23_st);

                    
                    Swal.fire("Carga exitosa")


            }else{

                for(i=0;i<jun_2023_par.length;i++){

                let dni_a_buscar=document.getElementById("empleado_buscar").value;

                    if(dni_a_buscar==jun_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                            
                    }else{

                     jun_2023_par.push(array_objeto[0]);
                    
                     const jun_2023_st=JSON.stringify(jun_2023_par);

                     localStorage.setItem("jun_2023_enJSON",jun_2023_st);

                    
                     Swal.fire("Carga exitosa")


                    }
                }
            }
        
        break;

        case "Julio":


            const jul_2023_par=JSON.parse(localStorage.getItem("jul_2023_enJSON"));

            if(jul_2023_par==null){

                julio_23.push(array_objeto[0]);

                const jul_23_st=JSON.stringify(julio_23);

                localStorage.setItem("jul_2023_enJSON",jul_23_st);

                Swal.fire("Carga exitosa")

            }else{
                for(i=0;i<jul_2023_par.length;i++){

                    let dni_a_buscar=document.getElementById("empleado_buscar").value;

                    if(dni_a_buscar==jul_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                            
                    }else{

                        jul_2023_par.push(array_objeto[0]);
                        
                        const jul_2023_st=JSON.stringify(jul_2023_par);

                        localStorage.setItem("jul_2023_enJSON",jul_2023_st);

                    }    
                }  
            }  

        break;

        case "Agosto":


            const ago_2023_par=JSON.parse(localStorage.getItem("ago_2023_enJSON"));

            if(ago_2023_par==null){

                agosto_23.push(array_objeto[0]);

                const ago_23_st=JSON.stringify(agosto_23);

                localStorage.setItem("ago_2023_enJSON",ago_23_st);

                Swal.fire("Carga exitosa")

            }else{

                for(i=0;i<ago_2023_par.length;i++){

                    let dni_a_buscar=document.getElementById("empleado_buscar").value;

                    if(dni_a_buscar==ago_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                                
                    }else{
                                
                        ago_2023_par.push(array_objeto[0]);
                            
                        const ago_2023_st=JSON.stringify(ago_2023_par);

                        localStorage.setItem("ago_2023_enJSON",ago_2023_st);

                    }
                }
            }
        break;

        case "Septiembre":

            const sep_2023_par=JSON.parse(localStorage.getItem("sep_2023_enJSON"));

            if(sep_2023_par==null){

                septiembre_23.push(array_objeto[0]);

                const sep_23_st=JSON.stringify(septiembre_23);

                localStorage.setItem("sep_2023_enJSON",sep_23_st);

                Swal.fire("Carga exitosa")

            }else{

                for(i=0;i<sep_2023_par.length;i++){

                    let dni_a_buscar=document.getElementById("empleado_buscar").value;

                    if(dni_a_buscar==sep_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                                
                    }else{

                        sep_2023_par.push(array_objeto[0]);
                        
                        const sep_2023_st=JSON.stringify(sep_2023_par);

                        localStorage.setItem("sep_2023_enJSON",sep_2023_st);

                    }  
                }
            }        
        break;

        case "Octubre":

            const oct_2023_par=JSON.parse(localStorage.getItem("oct_2023_enJSON"));

            if(oct_2023_par==null){

                octubre_23.push(array_objeto[0]);

                const oct_23_st=JSON.stringify(octubre_23);

                localStorage.setItem("oct_2023_enJSON",oct_23_st);

                Swal.fire("Carga exitosa")

            }else{

                for(i=0;i<oct_2023_par.length;i++){

                    let dni_a_buscar=document.getElementById("empleado_buscar").value;

                    if(dni_a_buscar==oct_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                                
                    }else{

                        oct_2023_par.push(array_objeto[0]);
                        
                        const oct_2023_st=JSON.stringify(oct_2023_par);

                        localStorage.setItem("oct_2023_enJSON",oct_2023_st);

                    }  
                }
            }             
        break;

        case "Noviembre":

            const nov_2023_par=JSON.parse(localStorage.getItem("nov_2023_enJSON"));

            if(nov_2023_par==null){

                noviembre_23.push(array_objeto[0]);

                const nov_23_st=JSON.stringify(noviembre_23);

                localStorage.setItem("nov_2023_enJSON",nov_23_st);

                Swal.fire("Carga exitosa")

            }else{

                for(i=0;i<nov_2023_par.length;i++){

                    let dni_a_buscar=document.getElementById("empleado_buscar").value;

                    if(dni_a_buscar==nov_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                                
                    }else{

                        nov_2023_par.push(array_objeto[0]);
                        
                        const nov_2023_st=JSON.stringify(nov_2023_par);

                        localStorage.setItem("nov_2023_enJSON",nov_2023_st);

                    }  
                }
            }             
        break;

        case "Diciembre":

            const dic_2023_par=JSON.parse(localStorage.getItem("dic_2023_enJSON"));

            if(dic_2023_par==null){

                diciembre_23.push(array_objeto[0]);

                const dic_23_st=JSON.stringify(diciembre_23);

                localStorage.setItem("dic_2023_enJSON",dic_23_st);

                Swal.fire("Carga exitosa")

            }else{

                for(i=0;i<dic_2023_par.length;i++){

                    let dni_a_buscar=document.getElementById("empleado_buscar").value;

                    if(dni_a_buscar==dic_2023_par[i].dni){

                        Swal.fire("El empleado ya se encuentra cargado en el mes")
                                
                    }else{

                        dic_2023_par.push(array_objeto[0]);
                        
                        const dic_2023_st=JSON.stringify(dic_2023_par);

                        localStorage.setItem("dic_2023_enJSON",dic_2023_st);

                    }  
                }
            }        
        break;
    }
    
    


}

function validar_todo(dato){

    if(dato=="" || isNaN(dato)){
  
      return false;
  
    }else if(dato!="" && !isNaN(dato)){
  
      return true;
  
    }
}

verificars.addEventListener("click",verificador);

cargar_asistencia.addEventListener("click",cargar_completar_datos);