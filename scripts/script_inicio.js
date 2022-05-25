let carga_empleado=document.getElementById("menu_cargar");

let carga_asistencias=document.getElementById("asistencias");

function menu_carga_empleado(e){

    e.preventDefault();

    location.href="cargar_empleado.html"

}

function menu_carga_asistencias(e){

    e.preventDefault();

    location.href="asistencias.html"

}

function menu_sueldos(e){

    e.preventDefault();

    location.href=""

}

function menu_consultas(e){

    e.preventDefault();

    location.href=""

}

carga_empleado.addEventListener("click",menu_carga_empleado);

carga_asistencias.addEventListener("click",menu_carga_asistencias);

