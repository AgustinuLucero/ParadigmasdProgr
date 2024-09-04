import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });
import { tareas } from "./agregarTarea.js";

export const buscarTitulo = function(tareas, busqueda){
    for(let i = 0 ; i<tareas.length;i++){
        if(tareas[i].titulo == busqueda){
            return i+1; //para que pueda ingresar a la funcion detalles y no cambie la tarea
        }
    }
    return -1;
}

export const mostrarTitulos = function(tareas,eleccion){
    console.log("Las tareas son:");
    for(let i=0;i<tareas.length;i++){
        if(tareas.estado == eleccion){
            console.log(`[${i+1}] ${tareas[i].titulo}`);
        }
    }
}

export const detalles = function(tareas,elegida){
    let i = elegida-1;
    let eleccion = -1;
     console.log(`Titulo: ${tareas[i].titulo}`);
     console.log(`Descripcion: ${tareas[i].descripcion}`);
     console.log(`Estado: ${tareas[i].estado}`);
     console.log(`Dificultad: [${tareas[i].dificultad}] `);
     console.log(`Vencimiento: ${tareas[i].vencimiento}`);
     
     while(eleccion!=0 && eleccion !=1){
         eleccion = parseInt(prompt("Desea editarla ingrese [1], desea volver [0]: "));
     }
 
     if(eleccion == 1){
         let nuevoTitulo = prompt("Ingrese el nuevo título (o deje en blanco para mantener el actual): ");
         if(nuevoTitulo === "") {
             nuevoTitulo = tareas[i].titulo;
         } else if(nuevoTitulo === " ") {
             nuevoTitulo = "";
         }
         tareas[i].titulo = nuevoTitulo;
 
         console.log("Para cada atributo deje en blanco para mantener la actual o espacio para dejarlo en blanco.");
         let nuevaDescripcion = prompt("Ingrese la nueva descripción: ");
         if(nuevaDescripcion === "") {
             nuevaDescripcion = tareas[i].descripcion;
         } else if(nuevaDescripcion === " ") {
             nuevaDescripcion = "";
         }
         tareas[i].descripcion = nuevaDescripcion;
 
         let nuevoEstado = prompt("Ingrese el nuevo estado ([P]endiente, [E]n curso, [T]erminado, [C]ancelada): ");
         if(nuevoEstado === "") {
             nuevoEstado = tareas[i].estado;
         } else if(nuevoEstado === " ") {
             nuevoEstado = "";
         }
         tareas[i].estado = nuevoEstado;
 
         let nuevaDificultad = prompt("Ingrese la nueva dificultad [1],[2],[3]: ");
         if(nuevaDificultad === "") {
             nuevaDificultad = tareas[i].dificultad;
         } else if(nuevaDificultad === " ") {
             nuevaDificultad = "";
         }
         tareas[i].dificultad = nuevaDificultad;
 
         let nuevoVencimiento = prompt("Ingrese la nueva fecha de vencimiento (AAAA-MM-DD): ");
         if(nuevoVencimiento === "") {
             nuevoVencimiento = tareas[i].vencimiento;
         } else if(nuevoVencimiento === " ") {
             nuevoVencimiento = "";
         } else {
             nuevoVencimiento = new Date(nuevoVencimiento);
         }
         tareas[i].vencimiento = nuevoVencimiento;
     }else{
         return;
     }
     
 
 }