import promptSync from 'prompt-sync';
const leer = promptSync();

export class Numero{
    
    private numeros:number[];

    constructor(){
        this.numeros = [];
    }

    ingresaNumeros(){
        let num,seg = '';
        console.log("Ingrese [*] para dejar de ingresar numeros, sino cualquier tecla");
        while(seg != '*'){
            num = parseFloat(leer(">Ingrese un numero: "));
            this.numeros.push(num);
            seg=leer("Sigue?([*]-No) ");
        }
    }

    getNumero(){
        return this.numeros;
    }

}