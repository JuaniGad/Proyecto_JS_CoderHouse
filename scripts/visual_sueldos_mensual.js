

let consultar=document.getElementById("buscar");
//Funcion que muestra la informacion de los sueldos de los empleado pagados en todo el mes junto con su id y DNI, segun el mes y año que se seleccionen. Hace modificacions en el DOM y se visualiza en pantalla
function visual_sueldo(e){
    
    e.preventDefault();
    let mes_ingresad=document.getElementById("empleado_mes").value;

    let anio_ingresado=document.getElementById("empleado_anio").value;

    let mes_ingresado=mes_ingresad.toUpperCase();

    switch(mes_ingresado){

        case "ENERO":

    if(anio_ingresado==2022){
        
            const ene22_par=JSON.parse(localStorage.getItem("ene_2022_enJSON"));
            
            let prueba=document.getElementById("divis");

            if(prueba!=null){
                prueba.remove();
            }

            const div = document.createElement("div");
            div.id="divis";
            

            const mes=document.createElement("div")

            mes.innerHTML=`
            <h2>ENERO 2022</h2>
            `;

            div.appendChild(mes);

            for (const emples of ene22_par){


                const contenedor=document.createElement("div");

                contenedor.innerHTML=`
                <h3>ID: ${emples.id}<h3>
                <ul>
                    <li>DNI: ${emples.dni}</li>
                    <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                </ul>`;

                div.appendChild(contenedor);

                document.body.appendChild(div);
            }

    }else if(anio_ingresado=2023){

        const ene23_par=JSON.parse(localStorage.getItem("ene_2023_enJSON"));

        
        let prueba=document.getElementById("divis");

        if(prueba!=null){
            prueba.remove();
        }

        const div = document.createElement("div");
        div.id="divis";
        

        const mes=document.createElement("div")

        mes.innerHTML=`
        <h2>ENERO 2023</h2>
        `;

        div.appendChild(mes);

        for (const emples of ene23_par){

            const contenedor=document.createElement("div");

            contenedor.innerHTML=`
            <h3>ID: ${emples.id}<h3>
            <ul>
                <li>DNI: ${emples.dni}</li>
                <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
            </ul>`;

            div.appendChild(contenedor);
            
            document.body.appendChild(div);
        }
    }
break;

        case "FEBRERO":

    if(anio_ingresado==2022){
            const feb22_par=JSON.parse(localStorage.getItem("feb_2022_enJSON"));
            
            let prueba=document.getElementById("divis");

            if(prueba!=null){
                prueba.remove();
            }

            const div = document.createElement("div");
            div.id="divis";
            

            const mes=document.createElement("div")

            mes.innerHTML=`
            <h2>FEBRERO 2022</h2>
            `;

            div.appendChild(mes);

            for (const emples of feb22_par){


                const contenedor=document.createElement("div");

                contenedor.innerHTML=`
                <h3>ID: ${emples.id}<h3>
                <ul>
                    <li>DNI: ${emples.dni}</li>
                    <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                </ul>`;

                div.appendChild(contenedor);

                document.body.appendChild(div);
            }

    }else if(anio_ingresado=2023){

        const feb23_par=JSON.parse(localStorage.getItem("feb_2023_enJSON"));

        
        let prueba=document.getElementById("divis");

        if(prueba!=null){
            prueba.remove();
        }

        const div = document.createElement("div");
        div.id="divis";
        

        const mes=document.createElement("div")

        mes.innerHTML=`
        <h2>FEBRERO 2023</h2>
        `;

        div.appendChild(mes);

        for (const emples of feb23_par){

            const contenedor=document.createElement("div");

            contenedor.innerHTML=`
            <h3>ID: ${emples.id}<h3>
            <ul>
                <li>DNI: ${emples.dni}</li>
                <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
            </ul>`;

            div.appendChild(contenedor);
            
            document.body.appendChild(div);
        }
    }
break;

        case "MARZO":

    if(anio_ingresado==2022){
            const mar22_par=JSON.parse(localStorage.getItem("mar_2022_enJSON"));
            
            let prueba=document.getElementById("divis");

            if(prueba!=null){
                prueba.remove();
            }

            const div = document.createElement("div");
            div.id="divis";
            

            const mes=document.createElement("div")

            mes.innerHTML=`
            <h2>MARZO 2022</h2>
            `;

            div.appendChild(mes);

            for (const emples of mar22_par){


                const contenedor=document.createElement("div");

                contenedor.innerHTML=`
                <h3>ID: ${emples.id}<h3>
                <ul>
                    <li>DNI: ${emples.dni}</li>
                    <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                </ul>`;

                div.appendChild(contenedor);

                document.body.appendChild(div);
            }

    }else if(anio_ingresado=2023){

        const mar23_par=JSON.parse(localStorage.getItem("mar_2023_enJSON"));

        
        let prueba=document.getElementById("divis");

        if(prueba!=null){
            prueba.remove();
        }

        const div = document.createElement("div");
        div.id="divis";
        

        const mes=document.createElement("div")

        mes.innerHTML=`
        <h2>MARZO 2023</h2>
        `;

        div.appendChild(mes);

        for (const emples of mar23_par){

            const contenedor=document.createElement("div");

            contenedor.innerHTML=`
            <h3>ID: ${emples.id}<h3>
            <ul>
                <li>DNI: ${emples.dni}</li>
                <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
            </ul>`;

            div.appendChild(contenedor);
            
            document.body.appendChild(div);
        }
    }
break;

        case "ABRIL":

    if(anio_ingresado==2022){
            const abr22_par=JSON.parse(localStorage.getItem("abr_2022_enJSON"));
            
            let prueba=document.getElementById("divis");

            if(prueba!=null){
                prueba.remove();
            }

            const div = document.createElement("div");
            div.id="divis";
            

            const mes=document.createElement("div")

            mes.innerHTML=`
            <h2>ABRIL 2022</h2>
            `;

            div.appendChild(mes);

            for (const emples of abr22_par){


                const contenedor=document.createElement("div");

                contenedor.innerHTML=`
                <h3>ID: ${emples.id}<h3>
                <ul>
                    <li>DNI: ${emples.dni}</li>
                    <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                </ul>`;

                div.appendChild(contenedor);

                document.body.appendChild(div);
            }

    }else if(anio_ingresado=2023){

        const abr23_par=JSON.parse(localStorage.getItem("abr_2023_enJSON"));

        
        let prueba=document.getElementById("divis");

        if(prueba!=null){
            prueba.remove();
        }

        const div = document.createElement("div");
        div.id="divis";
        

        const mes=document.createElement("div")

        mes.innerHTML=`
        <h2>ABRIL 2023</h2>
        `;

        div.appendChild(mes);

        for (const emples of abr23_par){

            const contenedor=document.createElement("div");

            contenedor.innerHTML=`
            <h3>ID: ${emples.id}<h3>
            <ul>
                <li>DNI: ${emples.dni}</li>
                <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
            </ul>`;

            div.appendChild(contenedor);
            
            document.body.appendChild(div);
        }
    }
break;

        case "MAYO":

    if(anio_ingresado==2022){
            const may_22_par=JSON.parse(localStorage.getItem("may_2022_enJSON"));
            
            let prueba=document.getElementById("divis");

            if(prueba!=null){
                prueba.remove();
            }

            const div = document.createElement("div");
            div.id="divis";
            

            const mes=document.createElement("div")

            mes.innerHTML=`
            <h2>MAYO 2022</h2>
            `;

            div.appendChild(mes);

            for (const emples of may_22_par){


                const contenedor=document.createElement("div");

                contenedor.innerHTML=`
                <h3>ID: ${emples.id}<h3>
                <ul>
                    <li>DNI: ${emples.dni}</li>
                    <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                </ul>`;

                div.appendChild(contenedor);

                document.body.appendChild(div);
            }

    }else if(anio_ingresado=2023){

        const may_23_par=JSON.parse(localStorage.getItem("may_2023_enJSON"));

        
        let prueba=document.getElementById("divis");

        if(prueba!=null){
            prueba.remove();
        }

        const div = document.createElement("div");
        div.id="divis";
        

        const mes=document.createElement("div")

        mes.innerHTML=`
        <h2>MAYO 2023</h2>
        `;

        div.appendChild(mes);

        for (const emples of may_23_par){

            const contenedor=document.createElement("div");

            contenedor.innerHTML=`
            <h3>ID: ${emples.id}<h3>
            <ul>
                <li>DNI: ${emples.dni}</li>
                <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
            </ul>`;

            div.appendChild(contenedor);
            
            document.body.appendChild(div);
        }
    }
break;

        case "JUNIO":

            if(anio_ingresado==2022){
                    const jun_22_par=JSON.parse(localStorage.getItem("jun_2022_enJSON"));
                    
                    let prueba=document.getElementById("divis");

                    if(prueba!=null){
                        prueba.remove();
                    }

                    const div = document.createElement("div");
                    div.id="divis";
                    

                    const mes=document.createElement("div")

                    mes.innerHTML=`
                    <h2>Junio 2022</h2>
                    `;

                    div.appendChild(mes);

                    for (const emples of jun_22_par){


                        const contenedor=document.createElement("div");

                        contenedor.innerHTML=`
                        <h3>ID: ${emples.id}<h3>
                        <ul>
                            <li>DNI: ${emples.dni}</li>
                            <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                        </ul>`;

                        div.appendChild(contenedor);

                        document.body.appendChild(div);
                    }

            }else if(anio_ingresado=2023){

                const jun_23_par=JSON.parse(localStorage.getItem("jun_2023_enJSON"));

                
                let prueba=document.getElementById("divis");

                if(prueba!=null){
                    prueba.remove();
                }

                const div = document.createElement("div");
                div.id="divis";
                

                const mes=document.createElement("div")

                mes.innerHTML=`
                <h2>Junio 2023</h2>
                `;

                div.appendChild(mes);

                for (const emples of jun_23_par){

                    const contenedor=document.createElement("div");

                    contenedor.innerHTML=`
                    <h3>ID: ${emples.id}<h3>
                    <ul>
                        <li>DNI: ${emples.dni}</li>
                        <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    
                    document.body.appendChild(div);
                }
            }
        break;

        
        case "JULIO":

    if(anio_ingresado==2022){
            const jul22_par=JSON.parse(localStorage.getItem("jul_2022_enJSON"));
            
            let prueba=document.getElementById("divis");

            if(prueba!=null){
                prueba.remove();
            }

            const div = document.createElement("div");
            div.id="divis";
            

            const mes=document.createElement("div")

            mes.innerHTML=`
            <h2>JULIO 2022</h2>
            `;

            div.appendChild(mes);

            for (const emples of jul22_par){


                const contjuldor=document.createElement("div");

                contjuldor.innerHTML=`
                <h3>ID: ${emples.id}<h3>
                <ul>
                    <li>DNI: ${emples.dni}</li>
                    <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                </ul>`;

                div.appendChild(contjuldor);

                document.body.appendChild(div);
            }

    }else if(anio_ingresado=2023){

        const jul23_par=JSON.parse(localStorage.getItem("jul_2023_enJSON"));

        
        let prueba=document.getElementById("divis");

        if(prueba!=null){
            prueba.remove();
        }

        const div = document.createElement("div");
        div.id="divis";
        

        const mes=document.createElement("div")

        mes.innerHTML=`
        <h2>JULIO 2023</h2>
        `;

        div.appendChild(mes);

        for (const emples of jul23_par){

            const contjuldor=document.createElement("div");

            contjuldor.innerHTML=`
            <h3>ID: ${emples.id}<h3>
            <ul>
                <li>DNI: ${emples.dni}</li>
                <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
            </ul>`;

            div.appendChild(contjuldor);
            
            document.body.appendChild(div);
        }
    }
break;

        case "AGOSTO":

    if(anio_ingresado==2022){
            const ago22_par=JSON.parse(localStorage.getItem("ago_2022_enJSON"));
            
            let prueba=document.getElementById("divis");

            if(prueba!=null){
                prueba.remove();
            }

            const div = document.createElement("div");
            div.id="divis";
            

            const mes=document.createElement("div")

            mes.innerHTML=`
            <h2>AGOSTO 2022</h2>
            `;

            div.appendChild(mes);

            for (const emples of ago22_par){


                const contagodor=document.createElement("div");

                contagodor.innerHTML=`
                <h3>ID: ${emples.id}<h3>
                <ul>
                    <li>DNI: ${emples.dni}</li>
                    <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                </ul>`;

                div.appendChild(contagodor);

                document.body.appendChild(div);
            }

    }else if(anio_ingresado=2023){

        const ago23_par=JSON.parse(localStorage.getItem("ago_2023_enJSON"));

        
        let prueba=document.getElementById("divis");

        if(prueba!=null){
            prueba.remove();
        }

        const div = document.createElement("div");
        div.id="divis";
        

        const mes=document.createElement("div")

        mes.innerHTML=`
        <h2>AGOSTO 2023</h2>
        `;

        div.appendChild(mes);

        for (const emples of ago23_par){

            const contagodor=document.createElement("div");

            contagodor.innerHTML=`
            <h3>ID: ${emples.id}<h3>
            <ul>
                <li>DNI: ${emples.dni}</li>
                <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
            </ul>`;

            div.appendChild(contagodor);
            
            document.body.appendChild(div);
        }
    }
break;


case "SEPTIEMBRE":

    if(anio_ingresado==2022){
            const sep22_par=JSON.parse(localStorage.getItem("sep_2022_enJSON"));
            
            let prueba=document.getElementById("divis");

            if(prueba!=null){
                prueba.remove();
            }

            const div = document.createElement("div");
            div.id="divis";
            

            const mes=document.createElement("div")

            mes.innerHTML=`
            <h2>SEPTIEMBRE 2022</h2>
            `;

            div.appendChild(mes);

            for (const emples of sep22_par){


                const contsepdor=document.createElement("div");

                contsepdor.innerHTML=`
                <h3>ID: ${emples.id}<h3>
                <ul>
                    <li>DNI: ${emples.dni}</li>
                    <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                </ul>`;

                div.appendChild(contsepdor);

                document.body.appendChild(div);
            }

    }else if(anio_ingresado=2023){

        const sep23_par=JSON.parse(localStorage.getItem("sep_2023_enJSON"));

        
        let prueba=document.getElementById("divis");

        if(prueba!=null){
            prueba.remove();
        }

        const div = document.createElement("div");
        div.id="divis";
        

        const mes=document.createElement("div")

        mes.innerHTML=`
        <h2>SEPTIEMBRE 2023</h2>
        `;

        div.appendChild(mes);

        for (const emples of sep23_par){

            const contsepdor=document.createElement("div");

            contsepdor.innerHTML=`
            <h3>ID: ${emples.id}<h3>
            <ul>
                <li>DNI: ${emples.dni}</li>
                <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
            </ul>`;

            div.appendChild(contsepdor);
            
            document.body.appendChild(div);
        }
    }
break;

case "OCTUBRE":

    if(anio_ingresado==2022){
            const oct22_par=JSON.parse(localStorage.getItem("oct_2022_enJSON"));
            
            let prueba=document.getElementById("divis");

            if(prueba!=null){
                prueba.remove();
            }

            const div = document.createElement("div");
            div.id="divis";
            

            const mes=document.createElement("div")

            mes.innerHTML=`
            <h2>OCTUBRE 2022</h2>
            `;

            div.appendChild(mes);

            for (const emples of oct22_par){


                const contoctdor=document.createElement("div");

                contoctdor.innerHTML=`
                <h3>ID: ${emples.id}<h3>
                <ul>
                    <li>DNI: ${emples.dni}</li>
                    <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                </ul>`;

                div.appendChild(contoctdor);

                document.body.appendChild(div);
            }

    }else if(anio_ingresado=2023){

        const oct23_par=JSON.parse(localStorage.getItem("oct_2023_enJSON"));

        
        let prueba=document.getElementById("divis");

        if(prueba!=null){
            prueba.remove();
        }

        const div = document.createElement("div");
        div.id="divis";
        

        const mes=document.createElement("div")

        mes.innerHTML=`
        <h2>OCTUBRE 2023</h2>
        `;

        div.appendChild(mes);

        for (const emples of oct23_par){

            const contoctdor=document.createElement("div");

            contoctdor.innerHTML=`
            <h3>ID: ${emples.id}<h3>
            <ul>
                <li>DNI: ${emples.dni}</li>
                <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
            </ul>`;

            div.appendChild(contoctdor);
            
            document.body.appendChild(div);
        }
    }
break;

case "NOVIEMBRE":

    if(anio_ingresado==2022){
            const nov22_par=JSON.parse(localStorage.getItem("nov_2022_enJSON"));
            
            let prueba=document.getElementById("divis");

            if(prueba!=null){
                prueba.remove();
            }

            const div = document.createElement("div");
            div.id="divis";
            

            const mes=document.createElement("div")

            mes.innerHTML=`
            <h2>NOVIEMBRE 2022</h2>
            `;

            div.appendChild(mes);

            for (const emples of nov22_par){


                const contnovdor=document.createElement("div");

                contnovdor.innerHTML=`
                <h3>ID: ${emples.id}<h3>
                <ul>
                    <li>DNI: ${emples.dni}</li>
                    <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                </ul>`;

                div.appendChild(contnovdor);

                document.body.appendChild(div);
            }

    }else if(anio_ingresado=2023){

        const nov23_par=JSON.parse(localStorage.getItem("nov_2023_enJSON"));

        
        let prueba=document.getElementById("divis");

        if(prueba!=null){
            prueba.remove();
        }

        const div = document.createElement("div");
        div.id="divis";
        

        const mes=document.createElement("div")

        mes.innerHTML=`
        <h2>NOVIEMBRE 2023</h2>
        `;

        div.appendChild(mes);

        for (const emples of nov23_par){

            const contnovdor=document.createElement("div");

            contnovdor.innerHTML=`
            <h3>ID: ${emples.id}<h3>
            <ul>
                <li>DNI: ${emples.dni}</li>
                <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
            </ul>`;

            div.appendChild(contnovdor);
            
            document.body.appendChild(div);
        }
    }
break;

case "DICIEMBRE":

    if(anio_ingresado==2022){
            const dic22_par=JSON.parse(localStorage.getItem("dic_2022_enJSON"));
            
            let prueba=document.getElementById("divis");

            if(prueba!=null){
                prueba.remove();
            }

            const div = document.createElement("div");
            div.id="divis";
            

            const mes=document.createElement("div")

            mes.innerHTML=`
            <h2>DICIEMBRE 2022</h2>
            `;

            div.appendChild(mes);

            for (const emples of dic22_par){


                const contdicdor=document.createElement("div");

                contdicdor.innerHTML=`
                <h3>ID: ${emples.id}<h3>
                <ul>
                    <li>DNI: ${emples.dni}</li>
                    <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
                </ul>`;

                div.appendChild(contdicdor);

                document.body.appendChild(div);
            }

    }else if(anio_ingresado=2023){

        const dic23_par=JSON.parse(localStorage.getItem("dic_2023_enJSON"));

        
        let prueba=document.getElementById("divis");

        if(prueba!=null){
            prueba.remove();
        }

        const div = document.createElement("div");
        div.id="divis";
        

        const mes=document.createElement("div")

        mes.innerHTML=`
        <h2>DICIEMBRE 2023</h2>
        `;

        div.appendChild(mes);

        for (const emples of dic23_par){

            const contdicdor=document.createElement("div");

            contdicdor.innerHTML=`
            <h3>ID: ${emples.id}<h3>
            <ul>
                <li>DNI: ${emples.dni}</li>
                <li>Sueldo liquidado:: ${emples.sueldo_final}</li>
            </ul>`;

            div.appendChild(contdicdor);
            
            document.body.appendChild(div);
        }
    }
break;

    default: Swal.fire("Verifique los valores ingresados.\n"+"Recuerde que las nominas comienzan desde Mayo 2022 en adelante");

    }
}

consultar.addEventListener("click",visual_sueldo);