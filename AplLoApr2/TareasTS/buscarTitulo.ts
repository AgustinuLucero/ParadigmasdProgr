import { Tarea } from "./Tarea.js";

export const buscarTitulo = function(tareas:Tarea[], busqueda:string):number{
    for(let i = 0 ; i<tareas.length;i++){
        if(tareas[i].titulo == busqueda){
            return i;
        }
    }
    return -1;
}

export const mostrarTitulos = function(tareas:Tarea[],eleccion:string):void{
    console.log("Las tareas son:");
    for(let i=0;i<tareas.length;i++){
        if(tareas[i].estado == eleccion){
            console.log(`[${i+1}] ${tareas[i].titulo}`); //para que enumere las tareas de 1 a n
        }
    }
}

