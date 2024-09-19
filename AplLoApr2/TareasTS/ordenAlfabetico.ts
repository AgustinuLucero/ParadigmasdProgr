import { Tarea } from "./Tarea.js";

export const ordenAlfabetico = function(tareas:Tarea[]):void{
    for (let i = 0; i < tareas.length; i++) {
        for (let j = i + 1; j < tareas.length; j++) {
            if (tareas[j].titulo < tareas[i].titulo) {
                let aux = tareas[i];
                tareas[i] = tareas[j];
                tareas[j] = aux;
            }
        }
    }
}