import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

export let tareas = [];

export const agregarTarea = function(){
    const creacion = new Date();

    let titulo = prompt("Ingrese el titulo de la tarea: ");
    
    let descripcion = prompt("Ingrese la descripcion de la tarea: ");

    let estado = prompt("Ingrese el estado con la letra correspondiente ([P]endiente, [E]n curso, [T]erminado, [C]ancelada): ");
    while(estado !== "P" && estado !== "E" && estado !== "T" && estado !== "C"){
        let estado = prompt("Ingrese el estado ([P]endiente, [E]n curso, [T]erminado, [C]ancelada): ");
    }

    let dificultad = prompt("Ingrese la dificultad [1],[2],[3]): ");
    while(dificultad != 1 && dificultad !=2 && dificultad !=3){
        let dificultad = prompt("Ingrese la dificultad [1],[2],[3]): ");
    }


    let validacionvenc = false;
    let vencimiento;

    while (!validacionvenc) {
        let vencimiento = prompt("Ingresa el vencimiento de la tarea (AAAA-MM-DD): ");
        vencimiento = new Date(vencimiento);
        
        if (!isNaN(vencimiento.getTime()) && vencimiento > creacion) { 
            validacionvenc = true;
        } else {
        console.log("ERROR: La fecha ingresada no es válida o es anterior a la fecha de creación.\nIntente de nuevo: ");
        }
    }


    const tarea={
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        dificultad: dificultad,
        creacion: creacion,
        vencimiento: vencimiento
    };
    
    tareas.push(tarea);
}


export const ordenAlfabetico = function(tareas){
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