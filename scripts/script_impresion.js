//Creacion de nodos para visualizar los empleados de la nomina en una pagina web
const lista_parse=JSON.parse(localStorage.getItem("lista_empleados_enJSON"));

if(lista_parse==null){

    Swal.fire("No hay empleados cargados en la nomina");
    
}else{

    for (const emples of lista_parse){

        let contenedor=document.createElement("div");

        contenedor.innerHTML=`
        <h3>ID: ${emples.id}<h3>
        <ul>
            <li>Nombre: ${emples.nombre}</li>
            <li>Apellido: ${emples.apellido}</li>
            <li>DNI: ${emples.dni}</li>
            <li>Fecha de nacimiento: ${emples.nacimiento}</li>
            <li>Localidad: ${emples.localidad}</li>
            <li>Direccion: ${emples.calle} ${emples.altura} </li>
            <li>Telefono: ${emples.telefono}</li>
            <li>Puesto: ${emples.puesto}</li>
            <li>Fecha de alta: ${emples.fecha_alta}</li>
        </ul>`;

        document.body.appendChild(contenedor);
    }
}