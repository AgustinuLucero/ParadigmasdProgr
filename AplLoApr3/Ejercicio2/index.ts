//import{Operaciones} from "./Operaciones.js";
import { instrucciones } from "./instrucciones.js";
import {Calculadora} from "./Calculadora.js";
import promptSync from 'prompt-sync';
const leer = promptSync();

let calculadora = new Calculadora();
let op = -1,resultado,numeros;

while(op!=0 ){
    console.log("CALCULADORA");
    instrucciones();
    op=parseInt(leer("Ingrese una opcion: "));
    switch(op){
        case 1:
            calculadora.ingresaNumeros();
            numeros = calculadora.getNumero();
            resultado = calculadora.suma(numeros);
            console.log(`Resultado = ${resultado}`);

            leer("Presione una tecla...");
            console.clear();
            break;
        case 2:
            calculadora.ingresaNumeros();
            numeros = calculadora.getNumero();
            resultado = calculadora.resta(numeros);
            console.log(`Resultado = ${resultado}`);

            leer("Presione una tecla...");
            console.clear();
            break;
        case 3:
            calculadora.ingresaNumeros();
            numeros = calculadora.getNumero();
            resultado = calculadora.multiplicacion(numeros);
            console.log(`Resultado = ${resultado}`);

            leer("Presione una tecla...");
            console.clear();
            break;
        case 4:
            calculadora.ingresaNumeros();
            numeros = calculadora.getNumero();
            resultado = calculadora.division(numeros);
            if(resultado == 0){
                console.log("Division por cero");
            }else{
                console.log(`Resultado = ${resultado}`);
            }
            
            leer("Presione una tecla...");
            console.clear();
            break;
        case 0:
            console.log("Saliendo...");
            leer("Presione una tecla...");
            console.clear();
            break;
        default:
            console.log("ERROR");
            leer("Presione una tecla...");
            console.clear();
    }
}



