class Empleado{

    constructor(nombre,apellido,dni,nacimiento,localidad,calle,altura,telefono,puesto,sueldo,id,fecha_alta,fecha_baja){

        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.nacimiento=nacimiento;
        this.localidad=localidad;
        this.calle=calle;
        this.altura=altura;
        this.telefono=telefono;
        this.puesto=puesto;
        this.sueldo=sueldo;
        this.id=id;
        this.fecha_alta;
        this.fecha_baja;

    }

    //Funcion que retorna la informacion del objeto creado a partir de la clase Empleados

    devolucion(){

        return "Nombre del empleado: "+this.nombre +"\n"+"Apellido del empleado: "+this.apellido+"\n"+"DNI: "+ this.dni+"\n"+"Fecha de nacimiento: "+this.nacimiento+"\n"+"Localidad: "+this.localidad+"\n"+"Domicilio: "+this.calle+ " N°: "+ this.altura+"\n"+"Telefono: "+this.telefono+"\n"+"Puesto: "+this.puesto+"\n"+"Sueldo: "+this.sueldo+"\n";
    }

    //Metodos get y set para definir los datos de los objetos creados a partir de la clase Empleados

    get get_nombre(){

        return this.nombre;
    }

    set set_nombre(nombre){

        this.nombre=nombre;

    }

    get get_apellido(){

        return this.apellido;
    }

    set set_apellido(apellido){
        
        this.apellido=apellido;

    }

    get get_nacimiento(){

        return this.nacimiento;

    }

    set set_nacimiento(nacimiento){

        this.nacimiento=nacimiento;

    }

    get get_localidad(){

        return this.localidad;

    }
    
    set set_localidad(localidad){

        this.localidad=localidad;

    }

    get get_calle(){

        return this.calle=calle;

    }

    set set_calle(calle){

        this.calle=calle;

    }

    get get_altura(){

        return this.altura;

    }

    set set_altura(altura){

        this.altura=altura;

    }

    get get_telefono(){

        return this.telefono;

    }

    set set_telefono(telefono){

        this.telefono=telefono;

    }

    get get_puesto(){

        return this.puesto;

    }

    set set_puesto(puesto){

        this.puesto=puesto;

    }

    get get_sueldo(){

        return this.sueldo;

    }

    set set_sueldo(sueldo){

        this.sueldo=sueldo;

    }

    get get_id(){

        return this.id;

    }

    set set_id(id){

        this.id=id

    }

    get get_fecha_alta(){
        
        return this.fecha_alta;

    }

    set set_fecha_alta(fecha_alta){

        this.fecha_alta=fecha_alta;

    }

    get get_fecha_baja(){

        return fecha_baja;

    }

    set set_fecha_baja(fecha_baja){
        
        this.fecha_baja=fecha_baja;
    }

}