import {agregarTarea,tareas} from "./agregarTarea.js";
import {buscarTitulo,mostrarTitulos} from "./buscarTitulo.js";
import { ordenAlfabetico } from "./ordenAlfabetico.js";
import { detalles } from "./detalles.js";
import { instrucciones } from "./instrucciones.js";
import promptSync from "prompt-sync";

const leer = promptSync();
let op:number, indice : number;
let busqueda : string, estado:string;
op=-1;


//Menu de opciones
while(op!=0){
    instrucciones();
    op = parseInt(leer(""));
    switch(op){
        case 1:
            console.log("Desea ver las tareas en: ");
            estado = "";
            while(estado !== "P" && estado !== "E" && estado !== "T" && estado !== "C" ){
                estado = leer("[E]n curso\n[P]endiente\n[T]erminada\n[C]ancelada\nIngrese la letra(En mayuscula): ");
            }
            mostrarTitulos(tareas,estado);

            indice = parseInt(leer("Ingrese el numero correspondiente de la tarea para poder ver sus detalles(en caso de no querer ingrese el 0): "));
            if (indice == 0){
                console.log("Volviendo...");
            }else{
                try{
                    detalles(tareas,indice);
                }catch{
                    console.log('ERROR');
                }
            }
            

            leer("Presione un tecla para continuar...");
            console.clear();
            break;
        case 2:
            console.log("Eligio buscar una tarea: ");
            busqueda = leer("Ingrese un titulo: ");
            indice = buscarTitulo(tareas,busqueda);

            if(indice>=0){
                indice += 1; //para poder usar de manera optima detalles
                console.log("Tarea encontrada");
                detalles(tareas,indice);

            }else{
                console.log("Tarea no encontrada");
            }

            leer("Presione un tecla para continuar...");
            console.clear();
            break;
        case 3:
            console.log("Eligio agregar tarea");
            agregarTarea();
            ordenAlfabetico(tareas);

            leer("Presione un tecla para continuar...");
            console.clear();
            break;
        case 0:
            console.log("Saliendo...");

            leer("Presione un tecla para continuar...");
            console.log("Sistema cerrado");
            console.clear();
            break;
        default:
            console.log("Opcion Invalida");

            leer("Presione un tecla para continuar...");
            console.clear();
    }
}
