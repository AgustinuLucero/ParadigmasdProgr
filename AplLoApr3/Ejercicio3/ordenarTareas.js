export const ordenarTareas = function(tareas){
    for(let i = 0; i < tareas.length; i++){
        for(let j = i + 1; j < tareas.length; j++){
            if (tareas[j].titulo < tareas[i].titulo) {
                let aux = tareas[i];
                tareas[i] = tareas[j];
                tareas[j] = aux;
            }
        }
    }
}