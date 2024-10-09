import promptSync from 'prompt-sync';
const leer = promptSync();

export const detalles = function(tareas,elegida){
    let i = elegida;
    let eleccion = -1;

    tareas[i].mostrarDetalles();
     
    while(eleccion!=0 && eleccion !=1){
        eleccion = parseInt(leer("Desea editarla?  Si-ingrese [1], No- ingrese [0]: "));
    }
 
    if(eleccion == 1){
        let nuevacreacion = new Date();
        creacion[i].creacion = nuevacreacion;
        let nuevoTitulo = leer("Ingrese el nuevo título (o deje en blanco para mantener el actual): ");
        if(nuevoTitulo === "") {
            nuevoTitulo = tareas[i].titulo;
        } else if(nuevoTitulo === " ") {
            nuevoTitulo = "";
        }

        tareas[i].titulo = nuevoTitulo;
 
        console.log("Para cada atributo deje en blanco para mantener la actual o espacio para dejarlo en blanco.");
        let nuevaDescripcion = leer("Ingrese la nueva descripción: ");
        if(nuevaDescripcion === "") {
            nuevaDescripcion = tareas[i].descripcion;
        } else if(nuevaDescripcion === " ") {
            nuevaDescripcion = "";
        }

        tareas[i].descripcion = nuevaDescripcion;
 
        let nuevoEstado = leer("Ingrese el nuevo estado ([P]endiente, [E]n curso, [T]erminado, [C]ancelada): ");
        if(nuevoEstado === "") {
            nuevoEstado = tareas[i].estado;
        } else if(nuevoEstado === " ") {
            nuevoEstado = "";
        }
        
        tareas[i].estado = nuevoEstado;
 
        let nuevaDificultad = leer("Ingrese la nueva dificultad [1],[2],[3]: ");
        if(nuevaDificultad === "") {
            nuevaDificultad = tareas[i].dificultad;
        } else if(nuevaDificultad === " ") {
            nuevaDificultad = "";
        }

        tareas[i].dificultad = nuevaDificultad;
 
        let nuevoVencimiento = leer("Ingrese la nueva fecha de vencimiento (AAAA-MM-DD): ");
        if(nuevoVencimiento === "") {
            nuevoVencimiento = tareas[i].vencimiento;
        } else if(nuevoVencimiento === " ") {
            nuevoVencimiento = "";
        } else {
            nuevoVencimiento = new Date(nuevoVencimiento);
        }
        tareas[i].vencimiento = nuevoVencimiento;
    }else{
        console.log("Volviendo...");
    }
}