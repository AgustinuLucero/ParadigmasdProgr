import {menuOp,menuTareas} from "./instrucciones.js";
import {agregarTarea} from "./agregarTarea.js";
import {buscarTitulo,encontrarTitulo} from "./buscarTitulo.js";
import {mostrarTareas,tareasPorEstados} from "./mostrarTareas.js";
import {ordenarTareas} from "./ordenarTareas.js";
import {tareas} from "./Tareas.js";
import {detalles} from "./detalles.js";
import promptSync from 'prompt-sync';

const leer = promptSync();
let op = -1,elecc;

while(op != 0){
    menuOp();
    op = parseInt(leer("Ingrese una opcion :"));
    switch(op){
        case 1:
            elecc = -1;
            let eleccion;

            console.log("Eligio ver tareas\nQue tareas deseas ver?");
            menuTareas();

            while(elecc < 0 || elecc > 5){
                elecc = parseInt(leer("Ingrese un opcion: "));
            }
            
            switch(elecc){
                case 1:
                    mostrarTareas(tareas);
                    break;
                case 2:
                    eleccion = "P";
                    tareasPorEstados(tareas,eleccion);
                    break;
                case 3:
                    eleccion = "E";
                    tareasPorEstados(tareas,eleccion);
                    break;
                case 4:
                    eleccion = "T";
                    tareasPorEstados(tareas,eleccion);
                    break;
                case 5:
                    eleccion = "C";
                    tareasPorEstados(tareas,eleccion);
                    break;
                case 0:
                    console.log("Volviendo...");
                    break;
            }
            
            leer("Presione un tecla para continuar...");
            console.clear();
            break;
        case 2:
            console.log("Eligio Buscar Tarea");
            let aBuscar = buscarTitulo();
            let indice = encontrarTitulo(tareas,aBuscar);
            if(indice>0){
                detalles(tareas,indice);
            }else{
                console.log("No se encontro la tarea :(");
            }
            
            leer("Presione un tecla para continuar...");
            console.clear();
            break;
        case 3:
            agregarTarea();
            ordenarTareas(tareas);
            leer("Presione un tecla para continuar...");
            console.clear();
            break;
        case 0:
            console.log("Saliendo..");
            leer("Presione un tecla para continuar...");
            console.clear();
            break;
        default:
            console.log("ERROR");
            leer("Presione un tecla para continuar...");
            console.clear();
    }
}