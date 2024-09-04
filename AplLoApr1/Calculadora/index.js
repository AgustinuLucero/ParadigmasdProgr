const prompt = require("prompt-sync")({sigint: true});

function opciones(){
    console.log("Ingrese el numero respectivo para realizar la operacion:");
    console.log("[1] +\n[2] -\n[3] *\n[4] / \n[0] Salir del programa");
}

let resultado,num=-1,op,i;

console.log("|CALCULADORA|");
while(op!=0){
    opciones();
    op = parseInt(prompt("Ingrese una opcion: "));
    switch(op){
        case 1:
            resultado=0;
            console.log("Para terminar ingrese una tecla que no sea un numero par apoder sumar los numeros ingresados");
            while(true){
                num = parseFloat(prompt(">Ingrese un numero: "));
                if(isNaN(num)){
                    break;
                }
                resultado = resultado + num;
            }
            console.log(`El resultado es: ${resultado}`);
            prompt("Presione un tecla para continuar...");
            console.clear();
            break;
        case 2:
            resultado=0;
            i=0;
            console.log("Para terminar ingrese 0 par apoder restar los numeros ingresados");

            while(true){
                num = parseFloat(prompt(">Ingrese un numero: "));
                if(isNaN(num)){
                    break;
                }

                if(i==0){
                    resultado = num; //para que no quede en numero negativo desde el principio
                    i++;
                }else{
                    resultado = resultado - num;
                }
                
            }

            console.log(`El resultado es: ${resultado}`);
            prompt("Presione un tecla para continuar...");
            console.clear();
            break;
        case 3:
            resultado=0;
            console.log("Para terminar ingrese 0 par apoder multiplicar los numeros ingresados");
            while(true){
                num = parseFloat(prompt(">Ingrese un numero: "));
                if(isNaN(num)){
                    break;
                }
                resultado = resultado * num;
            }
            console.log(`El resultado es: ${resultado}`);
            prompt("Presione un tecla para continuar...");
            console.clear();
            break;
        case 4:
            resultado=0;
            i=0;
            console.log("Para terminar ingrese 0 par apoder dividir los numeros ingresados");
            while(true){
                num = parseFloat(prompt(">Ingrese un numero: "));
                if(isNaN(num)){
                    break;
                }
                if(i==0){
                    resultado = num; //para que no quede todo en cero
                    i++;
                }else{
                    resultado = resultado / num;
                }
            }
            console.log(`El resultado es: ${resultado}`);

            prompt("Presione un tecla para continuar...");
            console.clear();
            break;
        case 0:
            console.log("Nos vemos ;)");
            prompt("Presione un tecla para continuar...");
            console.clear();
            break;
        default:
            console.log("Opcion Invalida :(");
            prompt("Presione un tecla para continuar...");
            console.clear();
    }
}
