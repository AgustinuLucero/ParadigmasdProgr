import promptSync from 'prompt-sync';
const leer = promptSync();

export const Tarea = function(titulo,descripcion,estado,dificultad,vencimiento,creacion){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.dificultad = dificultad;
    this.vencimiento = vencimiento;
    this.creacion = creacion;
}

export let tareas = [];

export const setTitulo = function(){
    let titulo = leer(">Ingrese el titulo: ");
    return titulo;
}

export const setDescripcion = function(){
    let descripcion = leer(">Ingrese la descripcion: ");
    return descripcion;
}

export const setEstado = function(){
    let estado = " "
    while(estado != "P" && estado != "E" && estado != "T" && estado != "C" ){
        estado = leer(">Ingrese la letra que represente su estado [P]endiente-[E]n curso-[T]erminada-[C]ancelada: ");
    }
}

export const setDificultad = function(){
    let dificultad = 0;
    while(dificultad != 1 && dificultad != 2 && dificultad != 3){
        dificultad = parseInt(leer(">Ingrese el numero que represente su dificultad [1]-Facil [2]-Medio [3]-Dificil: "));
    }
}

export const setCreacion = function(){
    let creacion = new Date();
    return creacion;
}

export const setVencimiento = function(){
    let validacionvenc = false;
    let vencimiento;

    while (!validacionvenc) {
        let venc = leer(">Ingrese el vencimiento de la tarea (AAAA-MM-DD): ");
        vencimiento = new Date(venc);
        let creacion = new Date(); //en setCreacion se crea una fecha practicamente igual, esta la hago para el control

        if (!isNaN(vencimiento.getTime()) && vencimiento > creacion) { 
            validacionvenc = true;
        } else {
        console.log("ERROR: La fecha ingresada no es válida o es anterior a la fecha de creación.\nIntente de nuevo: ");
        }
    }

    return vencimiento;
}


