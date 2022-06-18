let divcopia=document.getElementById("copia");
let buscar=document.getElementById("empleado_iniciar");
let dolarizar=document.getElementById("sueldo_dolarizar");

//Tomo el valor del dolar obtenido desde una api y luego lo almacenoen el LocalStorage para ser usado mas adelante, ademas inserto los valores obtenidos del dolar en el archivo HTML para que el usuario pueda verlos.
fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
.then( (resp) => resp.json() )
.then( (data) => {
    
    const info_dolares=data;

    let dolar_oficial_compra=parseInt(info_dolares[0].casa.compra);
    let dolar_oficial_venta=parseInt(info_dolares[0].casa.venta);

    let promedio_ofi=(dolar_oficial_compra+dolar_oficial_venta)/2;

    let dolar_blue_compra=parseInt(info_dolares[1].casa.compra);
    let dolar_blue_venta=parseInt(info_dolares[1].casa.venta);

    let promedio_blue=(dolar_blue_compra+dolar_blue_venta)/2;

    let div_dolar=document.getElementById("dolares");

    const blue_st=JSON.stringify(promedio_blue);
    const ofi_st=JSON.stringify(promedio_ofi);

    localStorage.setItem("dolar_blue",blue_st);
    localStorage.setItem("dolar_ofi",ofi_st);

    div_dolar.innerHTML=`
        <div>Dolar Blue:</div>
        <div id="dolar_blue">${promedio_blue}</div>
        <div>Dolar Oficial</div>
        <div id="dolar_oficial">${promedio_ofi}</div>
    `
    
})
//Funcion de busqueda del sueldo final del empleado 
function busq_sueld_mensual(e){

    e.preventDefault()

    let mes_selec=document.getElementById("empleado_mes").value;
    let anio=document.getElementById("empleado_anio").value;
    let dni_emp=document.getElementById("empleado_buscar").value;

    console.log(mes_selec);
    console.log(anio);
    //Si encuentra el sueldo final del empleado entonces lo agrega a al index y lo almacena en el local storage ya que luego va a ser utilizado
    switch(mes_selec){

        case"Enero":
        if(anio=2022){

            const ene22_par=JSON.parse(localStorage.getItem("ene_2022_enJSON"));

            for (i = 0; i < ene22_par.length; i++) {

                if (ene22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(ene22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${ene22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${ene22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${ene22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == ene22_par.length - 1 && ene22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const ene23_par=JSON.parse(localStorage.getItem("ene_2023_enJSON"));

            for (i = 0; i < ene23_par.length; i++) {
                
                if (ene23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(ene23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${ene23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${ene23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${ene23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == ene23_par.length - 1 && ene23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;

        case"Febrero":
        if(anio=2022){

            const feb22_par=JSON.parse(localStorage.getItem("feb_2022_enJSON"));

            for (i = 0; i < feb22_par.length; i++) {

                if (feb22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(feb22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${feb22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${feb22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${feb22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == feb22_par.length - 1 && feb22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const feb23_par=JSON.parse(localStorage.getItem("feb_2023_enJSON"));

            for (i = 0; i < feb23_par.length; i++) {
                
                if (feb23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(feb23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${feb23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${feb23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${feb23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == feb23_par.length - 1 && feb23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;

        case"Marzo":
        if(anio=2022){

            const mar22_par=JSON.parse(localStorage.getItem("mar_2022_enJSON"));

            for (i = 0; i < mar22_par.length; i++) {

                if (mar22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(mar22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${mar22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${mar22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${mar22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == mar22_par.length - 1 && mar22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const mar23_par=JSON.parse(localStorage.getItem("mar_2023_enJSON"));

            for (i = 0; i < mar23_par.length; i++) {
                
                if (mar23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(mar23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${mar23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${mar23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${mar23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == mar23_par.length - 1 && mar23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;

        case"Abril":
        if(anio=2022){

            const abr22_par=JSON.parse(localStorage.getItem("abr_2022_enJSON"));

            for (i = 0; i < abr22_par.length; i++) {

                if (abr22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(abr22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${abr22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${abr22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${abr22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == abr22_par.length - 1 && abr22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const abr23_par=JSON.parse(localStorage.getItem("abr_2023_enJSON"));

            for (i = 0; i < abr23_par.length; i++) {
                
                if (abr23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(abr23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${abr23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${abr23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${abr23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == abr23_par.length - 1 && abr23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;

        case"Mayo":
        if(anio=2022){

            const may22_par=JSON.parse(localStorage.getItem("may_2022_enJSON"));

            for (i = 0; i < may22_par.length; i++) {

                if (may22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(may22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${may22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${may22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${may22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == may22_par.length - 1 && may22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const may23_par=JSON.parse(localStorage.getItem("may_2023_enJSON"));

            for (i = 0; i < may23_par.length; i++) {
                
                if (may23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(may23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${may23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${may23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${may23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == may23_par.length - 1 && may23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;

        case"Junio":
        if(anio=2022){

            const jun22_par=JSON.parse(localStorage.getItem("jun_2022_enJSON"));

            for (i = 0; i < jun22_par.length; i++) {

                if (jun22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(jun22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${jun22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${jun22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${jun22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == jun22_par.length - 1 && jun22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const jun23_par=JSON.parse(localStorage.getItem("jun_2023_enJSON"));

            for (i = 0; i < jun23_par.length; i++) {
                
                if (jun23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(jun23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${jun23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${jun23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${jun23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == jun23_par.length - 1 && jun23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;

        case"Julio":
        if(anio=2022){

            const jul22_par=JSON.parse(localStorage.getItem("jul_2022_enJSON"));

            for (i = 0; i < jul22_par.length; i++) {

                if (jul22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(jul22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${jul22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${jul22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${jul22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == jul22_par.length - 1 && jul22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const jul23_par=JSON.parse(localStorage.getItem("jul_2023_enJSON"));

            for (i = 0; i < jul23_par.length; i++) {
                
                if (jul23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(jul23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${jul23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${jul23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${jul23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == jul23_par.length - 1 && jul23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;

        case"Agosto":
        if(anio=2022){

            const ago22_par=JSON.parse(localStorage.getItem("ago_2022_enJSON"));

            for (i = 0; i < ago22_par.length; i++) {

                if (ago22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(ago22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${ago22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${ago22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${ago22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == ago22_par.length - 1 && ago22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const ago23_par=JSON.parse(localStorage.getItem("ago_2023_enJSON"));

            for (i = 0; i < ago23_par.length; i++) {
                
                if (ago23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(ago23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${ago23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${ago23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${ago23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == ago23_par.length - 1 && ago23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;

        case"Septiembre":
        if(anio=2022){

            const sep22_par=JSON.parse(localStorage.getItem("sep_2022_enJSON"));

            for (i = 0; i < sep22_par.length; i++) {

                if (sep22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(sep22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${sep22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${sep22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${sep22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == sep22_par.length - 1 && sep22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const sep23_par=JSON.parse(localStorage.getItem("sep_2023_enJSON"));

            for (i = 0; i < sep23_par.length; i++) {
                
                if (sep23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(sep23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${sep23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${sep23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${sep23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == sep23_par.length - 1 && sep23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;

        case"Octubre":
        if(anio=2022){

            const oct22_par=JSON.parse(localStorage.getItem("oct_2022_enJSON"));

            for (i = 0; i < oct22_par.length; i++) {

                if (oct22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(oct22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${oct22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${oct22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${oct22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == oct22_par.length - 1 && oct22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const oct23_par=JSON.parse(localStorage.getItem("oct_2023_enJSON"));

            for (i = 0; i < oct23_par.length; i++) {
                
                if (oct23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(oct23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${oct23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${oct23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${oct23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == oct23_par.length - 1 && oct23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;

        case"Noviembre":
        if(anio=2022){

            const nov22_par=JSON.parse(localStorage.getItem("nov_2022_enJSON"));

            for (i = 0; i < nov22_par.length; i++) {

                if (nov22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(nov22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${nov22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${nov22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${nov22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == nov22_par.length - 1 && nov22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const nov23_par=JSON.parse(localStorage.getItem("nov_2023_enJSON"));

            for (i = 0; i < nov23_par.length; i++) {
                
                if (nov23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(nov23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${nov23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${nov23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${nov23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == nov23_par.length - 1 && nov23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;

        case"Diciembre":
        if(anio=2022){

            const dic22_par=JSON.parse(localStorage.getItem("dic_2022_enJSON"));

            for (i = 0; i < dic22_par.length; i++) {

                if (dic22_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(dic22_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${dic22_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${dic22_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${dic22_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == dic22_par.length - 1 && dic22_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }else if(anio=2023){
            
            const dic23_par=JSON.parse(localStorage.getItem("dic_2023_enJSON"));

            for (i = 0; i < dic23_par.length; i++) {
                
                if (dic23_par[i].dni == dni_emp) {

                    const sueldo_st=JSON.stringify(dic23_par[i].sueldo_final);
                    localStorage.setItem("sueldo_final",sueldo_st);

                  divcopia.innerHTML = `
                      <h3>ID: ${dic23_par[i].id}<h3>
                      <ul>
                          <li>DNI: ${dic23_par[i].dni}</li>
                          <li id="sueldo_final">Sueldo final: ${dic23_par[i].sueldo_final}</li>
                      </ul>`;
          
                  break;

                } else if (i == dic23_par.length - 1 && dic23_par[i].dni != dni_emp) {
          
                  divcopia.innerHTML = `
                  
                  <h3>El empleado con DNI: ${dni_emp} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
          
                }
              }

        }
        break;
    } 

}

//Funcion que toma del local Storage los valores almacenados del dolar y del sueldo final del empleado, luego hace la conversion y lo muestra en pantalla agregandolo al html.
function dolarizar_todo(e){

    e.preventDefault();

    let blue=JSON.parse(localStorage.getItem("dolar_blue"));
    let oficial=JSON.parse(localStorage.getItem("dolar_ofi"));

    let sueldo_fin=JSON.parse(localStorage.getItem("sueldo_final"))

    let conver=document.getElementById("conversion");

    let sueldo_blue=(sueldo_fin/blue).toFixed(2);
    let sueldo_ofi=(sueldo_fin/oficial).toFixed(2);

    conver.innerHTML=`
    <ul>
        <li>Sueldo en dolar oficial: ${sueldo_ofi}</li>
        <li>Sueldo en dolar blue: ${sueldo_blue}</li>
    <ul>
    `


}

buscar.addEventListener("click",busq_sueld_mensual);

dolarizar.addEventListener("click",dolarizar_todo);


