
import{Tarea,tareas,setTitulo,setDescripcion,setEstado,setDificultad,setCreacion,setVencimiento,} from "./Tareas.js";

let titulo,descripcion,estado,dificultad,creacion,vencimiento;

export const agregarTarea = function(){
    console.log("Llene los detalles de la tarea:");
    titulo = setTitulo();
    descripcion = setDescripcion();
    estado = setEstado();
    dificultad = setDificultad();
    vencimiento = setVencimiento();
    creacion = setCreacion();

    let tarea = new Tarea(titulo,descripcion,estado,dificultad,vencimiento,creacion);
    tareas.push(tarea);
}

