import { Tarea } from "./Tarea.js";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

export let tareas:Tarea[] = [];

let titulo:string,descripcion:string,estado:string,leervenc:string;
let dificultad:number;
let validacionvenc: boolean;

export const agregarTarea = function():void{
    const creacion : Date = new Date();

    titulo = prompt("Ingrese el titulo de la tarea: ");
    
    descripcion = prompt("Ingrese la descripcion de la tarea: ");

    estado = prompt("Ingrese el estado con la letra correspondiente ([P]endiente, [E]n curso, [T]erminado, [C]ancelada): ");
    while(estado !== "P" && estado !== "E" && estado !== "T" && estado !== "C"){
        estado = prompt("Ingrese el estado ([P]endiente, [E]n curso, [T]erminado, [C]ancelada): ");
    }

    dificultad = parseInt(prompt("Ingrese la dificultad [1],[2],[3]): "));
    while(dificultad != 1 && dificultad !=2 && dificultad !=3){
        dificultad = parseInt(prompt("Ingrese la dificultad [1],[2],[3]): "));
    }

    validacionvenc = false;
    let vencimiento : Date = new Date();

    while (!validacionvenc) {
        leervenc = prompt("Ingresa el vencimiento de la tarea (AAAA-MM-DD): ");
        vencimiento = new Date(leervenc);
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

