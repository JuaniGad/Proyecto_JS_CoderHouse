class Asistencias{

    constructor(id,dni,sueldo,anio,mes,ausentes,tardes,horas_extras,presentismo,sueldo_final){

        this.id=id;
        this.dni=dni;
        this.anio=anio;
        this.mes=mes;
        this.ausentes=ausentes; 
        this.tardes=tardes;
        this.horas_extras=horas_extras;
        this.presentismo=presentismo;
        this.sueldo=sueldo;
        this.sueldo_final=sueldo_final;

    }

    
    get get_sueldo(){

        return sueldo;
    

    }

    
    get get_id(){
        
        return this.id

    }

    
    get get_dni(){
    
        return this.dni;

    }

    
    get get_anio(){

        return this.anio;

    }

    
    get get_mes(){

        return this.mes;

    }

    
    get get_ausentes(){

        return this.ausentes;

    }

    
    get get_tardes(){

        return this.tardes;

    }

    
    get get_horas_extras(){

        return this.horas_extras;

    }

    
    get get_presentismo(){

        return this.presentismo;

    }

    
    get get_sueldo_final(){

        return this.sueldo_final;

    }










}