export const mostrarTareas = function(tareas){
    for(let i = 0;i< tareas.length;i++){
        tareas[i].mostrarDetalles();
    }
} 

export const tareasPorEstados= function(tareas,estado){
    for(let i = 0;i< tareas.length;i++){
        if(titulo[i].estado == estado){
            tareas[i].mostrarDetalles();
        }
    }
}

export const mostrarDetalles = function(tareas,i){
    console.log(
        `Titulo: ${tareas[i].titulo}\n
        Descripción: ${tareas[i].descripcion}\n
        Estado: ${tareas[i].estado}\n
        Dificultad: ${tareas[i].dificultad}\n
        Vencimiento: ${tareas[i].vencimiento}\n
        Ultima Modificacion: ${tareas[i].creacion}`
    );
}