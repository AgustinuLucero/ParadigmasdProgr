import { Tarea } from "./Tarea.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

export const detalles = function(tareas:Tarea[],elegida:number):void{
    let i: number, eleccion : number;
    i = elegida-1; //como se muestran de 1 a n le resto 1 
    eleccion = - 1;

    console.log(`Titulo: ${tareas[i].titulo}`);
    console.log(`Descripcion: ${tareas[i].descripcion}`);
    console.log(`Estado: ${tareas[i].estado}`);
    console.log(`Dificultad: [${tareas[i].dificultad}] `);
    console.log(`Vencimiento: ${tareas[i].vencimiento}`);
    console.log(`Ultima edicion: ${tareas[i].creacion}`);
    
    while(eleccion!=0 && eleccion !=1){
        eleccion = parseInt(prompt("Desea editarla ingrese [1], desea volver [0]: "));
    }
 
    if(eleccion == 1){
        console.log("Para cada atributo deje en blanco para mantener la actual.");
        let nuevTit:string,nuevDesc:string,nuevEst:string,nuevDif:string,nuevFecha:string;
        
        nuevTit = prompt("Ingrese el nuevo título (o deje en blanco para mantener el actual): ");
        if (nuevTit !== "") {
            tareas[i].titulo = nuevTit;
        }

        nuevDesc = prompt("Ingrese la nueva descripción: ");
        if (nuevDesc !== "") {
            tareas[i].descripcion = nuevDesc;
        }

        nuevEst = prompt("Ingrese el nuevo estado ([P]endiente, [E]n curso, [T]erminado, [C]ancelada): ");
        if (nuevEst !== "") {
            tareas[i].estado = nuevEst;
        }

        nuevDif = prompt("Ingrese la nueva dificultad [1],[2],[3]: ");
        if (nuevDif !== "") {
            tareas[i].dificultad = parseInt(nuevDif);
        }

        nuevFecha = prompt("Ingrese la nueva fecha de vencimiento (AAAA-MM-DD): ");
        if (nuevFecha !== "") {
            const fecha = new Date(nuevFecha);
            if (!isNaN(fecha.getTime())) {
                tareas[i].vencimiento = fecha;
            } else {
                console.log("Fecha no válida.");
            }
        }

    }else{
        console.log("Volviendo...");
        return;
    }
}