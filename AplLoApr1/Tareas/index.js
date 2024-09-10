import {agregarTarea,ordenAlfabetico,tareas} from "./agregarTarea.js";
import {buscarTitulo,mostrarTitulos,detalles} from "./buscar.js";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

let op=-1,eleccion,indice;


//Instrucciones
const instrucciones = function(){
    console.log("Ingrese una opcion:");
    console.log("[1] Ver tarea");
    console.log("[2] Buscar tarea");
    console.log("[3] Agregrar tarea");
    console.log("[0] Salir");
}


//Registrar tareas
while(op!=0){
    instrucciones();
    op = parseInt(prompt(""));
    switch(op){
        case 1:
            let estado;
            console.log("Desea ver las tareas en: ");
            console.log("[E]n curso\n[P]endiente\n[T]erminada\n[C]ancelada\nIngrese la letra(En mayuscula): ");
            while(estado !== "P" && estado !== "E" && estado !== "T" && estado !== "C"){
                estado = prompt("Ingrese el estado ([P]endiente, [E]n curso, [T]erminado, [C]ancelada): ");
            }
            mostrarTitulos(tareas,eleccion);
            indice = parseInt(prompt("Ingrese el numero correspondiente de la tarea para poder ver sus detalles(en caso de no querer ingrese el 0): "));
            if (indice != 0){
                detalles(tareas,indice);
            }
            

            prompt("Presione un tecla para continuar...");
            console.clear();
            break;
        case 2:
            console.log("Eligio buscar una tarea: ");
            let busqueda = prompt("Ingrese un titulo: ");
            indice = buscarTitulo(tareas,busqueda);
            if(indice>0){
                console.log("Tarea encontrada");
                detalles(tareas,indice);
            }
            prompt("Presione un tecla para continuar...");
            console.clear();
            break;
        case 3:
            console.log("Eligio agregar tarea");
            agregarTarea();
            ordenAlfabetico(tareas);
            prompt("Presione un tecla para continuar...");
            console.clear();
            break;
        case 0:
            console.log("Saliendo...");

            prompt("Presione un tecla para continuar...");
            console.log("Sistema cerrado");
            console.clear();
            break;
        default:
            console.log("Opcion Invalida");
            prompt("Presione un tecla para continuar...");
            console.clear();
    }
}

