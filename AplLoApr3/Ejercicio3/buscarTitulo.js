import promptSync from 'prompt-sync';
const leer = promptSync();


export const buscarTitulo = function(){
    let tituloBuscar = leer("Ingrese el titulo a buscar: ");
    return tituloBuscar;
}

export const encontrarTitulo=function(tareas,titulo){
    for(let i=0;i<tareas.length;i++){
        if(tareas[i].titulo === titulo){
            return i;
        }
    }
    return -1;
}