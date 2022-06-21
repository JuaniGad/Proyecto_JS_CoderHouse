//Variable asosciado a un elemento HTML
let mostrar_nomina=document.getElementById("consulta_visualizar_nomina");

let mostrar_info_empleado=document.getElementById("consulta_buscar_empleado");

let edit_empleado=document.getElementById("consulta_editar_empleado");

let visual_suel_mensual=document.getElementById("consulta_visualizar_sueldos")

let consulta_sueldo_dolarizar=document.getElementById("consulta_suel_dolar");

//Funcion que redirige a una pagina web en el cual se visualiza por completo la nomina de empleados
function visualizar_nomina(e){
    e.preventDefault()

    location.href="impresion_nomina.html";

}

function _mostrar_empleado(e){

    e.preventDefault()

    location.href="impresion_empleado.html"

}

function _editar_empleado(e){
    e.preventDefault();

    location.href="editar_empleado.html"
}

function _visualizar_sueldos_x_mes(e){
    e.preventDefault()

    location.href="visualizar_sueldos_mensual.html";
}

function _visualizar_sueldos_especifico(e){

    e.preventDefault();

    location.href="visual_sueldo_empleado.html";

}
//Al hacer click en "IR" en la opcion de visualizar nomina ejecuta la funcion visualizar_nomina
mostrar_nomina.addEventListener("click",visualizar_nomina);

mostrar_info_empleado.addEventListener("click",_mostrar_empleado);

edit_empleado.addEventListener("click",_editar_empleado);

visual_suel_mensual.addEventListener("click",_visualizar_sueldos_x_mes);

consulta_sueldo_dolarizar.addEventListener("click",_visualizar_sueldos_especifico);