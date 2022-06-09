//Variable asosciado a un elemento HTML
let mostrar_nomina=document.getElementById("consulta_visualizar_nomina");

//Funcion que redirige a una pagina web en el cual se visualiza por completo la nomina de empleados
function visualizar_nomina(e){
    e.preventDefault()

    location.href="impresion.html";

}

//Al hacer click en "IR" en la opcion de visualizar nomina ejecuta la funcion visualizar_nomina
mostrar_nomina.addEventListener("click",visualizar_nomina);