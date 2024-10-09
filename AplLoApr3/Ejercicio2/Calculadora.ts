import { Numero } from './Numero.js';

export class Calculadora extends Numero{
    public suma = function(numeros:number[]):number{
        let resultado=0;
        for(let i = 0;i < numeros.length;i++){
            resultado = resultado + numeros[i];
        }
        return resultado;
    }

    public resta = function(numeros:number[]):number{
        let resultado=numeros[0];
        for(let i = 1;i < numeros.length;i++){
            resultado = resultado - numeros[i];
        }
        return resultado;
    }

    public division = function(numeros:number[]):number{
        let resultado=numeros[0];
        for(let i = 1;i < numeros.length;i++){
            if(numeros[i] == 0){
                return 0;
            }
            resultado = resultado / numeros[i];
        }
        return resultado;
    }

    public multiplicacion = function(numeros:number[]):number{
        let resultado=numeros[0];
        for(let i = 1;i < numeros.length;i++){
            resultado = resultado * numeros[i];
        }
        return resultado;
    }
}