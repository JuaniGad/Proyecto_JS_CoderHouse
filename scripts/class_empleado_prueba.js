class Empleado_prueba{

    constructor(obj){

        this.nombre=obj.nombre;
        this.apellido=obj.apellido;
        this.dni=obj.dni;
        this.nacimiento=obj.nacimiento;
        this.localidad=obj.localidad;
        this.calle=obj.calle;
        this.altura=obj.altura;
        this.telefono=obj.telefono;
        this.puesto=obj.puesto;
        this.sueldo=obj.sueldo;
        this.id=this.apellido+" "+this.nombre;
        this.fecha_alta=obj.fecha_alta;
        this.fecha_baja=obj.fecha_baja;

    }

    //Funcion que retorna la informacion del objeto creado a partir de la clase Empleados

    devolucion(){

        return "Nombre del empleado: "+this.nombre +"\n"+"Apellido del empleado: "+this.apellido+"\n"+"DNI: "+ this.dni+"\n"+"Fecha de nacimiento: "+this.nacimiento+"\n"+"Localidad: "+this.localidad+"\n"+"Domicilio: "+this.calle+ " N°: "+ this.altura+"\n"+"Telefono: "+this.telefono+"\n"+"Puesto: "+this.puesto+"\n"+"Sueldo: "+this.sueldo+"\n";
    }

    //Metodos get y set para definir los datos de los objetos creados a partir de la clase Empleados

    get get_dni(){

        return this.dni;
    }

    set_dni(_dni){

        this.dni=_dni;

    }
    
    get get_nombre(){

        return this.nombre;
    }

    set_nombre(nomb){

        this.nombre=nomb;

    }

    get get_apellido(){

        return this.apellido;
    }

    set_apellido(apel){
        
        this.apellido=apel;

    }

    get get_nacimiento(){

        return this.nacimiento;

    }

    set_nacimiento(nac){

        this.nacimiento=nac;

    }

    get get_localidad(){

        return this.localidad;

    }
    
    set_localidad(loc){

        this.localidad=loc;

    }

    get get_calle(){

        return this.calle=calle;

    }

    set_calle(cal){

        this.calle=cal;

    }

    get get_altura(){

        return this.altura;

    }

    set_altura(alt){

        this.altura=alt;

    }

    get get_telefono(){

        return this.telefono;

    }

    set_telefono(tel){

        this.telefono=tel;

    }

    get get_puesto(){

        return this.puesto;

    }

    set_puesto(pue){

        this.puesto=pue;

    }

    get get_sueldo(){

        return this.sueldo;

    }

    set_sueldo(suel){

        this.sueldo=suel;

    }

    get get_id(){

        return this.id;

    }

    set_id(_id){

        this.id=_id

    }

    get get_fecha_alta(){
        
        return this.fecha_alta;

    }

    set_fecha_alta(fec_alt){

        this.fecha_alta=fec_alt;

    }

    get get_fecha_baja(){

        return fecha_baja;

    }

    set_fecha_baja(fec_baj){
        
        this.fecha_baja=fec_baj;
    }

}