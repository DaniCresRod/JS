//Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por
//la pantalla del navegador y la consola.
let variableNumero1=1;
let variableNumero2=2;
let variableString1="Hola";
let variableString2="Caracola";
let variableBooleana=true;
const nodoP=document.createElement("p");

let arrayVariables=[variableNumero1, variableNumero2, variableString1, variableString2, variableBooleana];

for(let i=0; i<arrayVariables.length; i++){
    
    const nodoP=document.createElement("p");
    let nuevoParrafo=document.querySelector(".variables > article:nth-of-type(1)").appendChild(nodoP);
    nuevoParrafo.innerHTML=arrayVariables[i];

    console.log(arrayVariables[i]);
}

//De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones
//matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).
//Deberás imprimir el resultado por la pantalla del navegador y la consola

let arrayResultados=[];

for(let i=0;i<arrayVariables.length;i++){
    arrayResultados.push(typeof(arrayVariables[i]));

    if(typeof(arrayVariables[i])==="number"){
    const nodoP=document.createElement("p"); 
    let nuevoParrafo=document.querySelector(".variables > article:nth-of-type(2)").appendChild(nodoP);
    nuevoParrafo.innerHTML=arrayVariables[i]+" es de tipo "+arrayResultados[i];

    console.log(arrayVariables[i]+" es de tipo "+arrayResultados[i]);

    }

    else if(typeof(arrayVariables[i])==="string"){
    const nodoP=document.createElement("p"); 
    let nuevoParrafo=document.querySelector(".variables > article:nth-of-type(4)").appendChild(nodoP);
    nuevoParrafo.innerHTML=arrayVariables[i]+" es de tipo "+arrayResultados[i];

    console.log(arrayVariables[i]+" es de tipo "+arrayResultados[i]);

    }
    
}

let arrayOperaciones=[  arrayVariables[0]+arrayVariables[1],
                        arrayVariables[0]-arrayVariables[1],
                        arrayVariables[0]*arrayVariables[1],
                        arrayVariables[0]/arrayVariables[1],
                       ];

let arraySimbolos=[" + ", " - ", " * ", " / "];

for(let i=0;i<arrayOperaciones.length;i++){
    const nodoP=document.createElement("p");    
    let nuevoParrafo=document.querySelector(".variables > article:nth-of-type(3)").appendChild(nodoP);
    nuevoParrafo.innerHTML=arrayVariables[0]+ arraySimbolos[i] + arrayVariables[1]+" = "+arrayOperaciones[i];   
    console.log(arrayVariables[0]+ arraySimbolos[i] + arrayVariables[1]+" = "+arrayOperaciones[i]);
} 

//De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas
//cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.

let nuevoParrafo=document.querySelector(".variables > article:nth-of-type(5)").appendChild(nodoP);
nuevoParrafo.innerHTML=arrayVariables[2]+ arraySimbolos[0] + arrayVariables[3]+" = "+arrayVariables[2] + arrayVariables[3];   
console.log(arrayVariables[2]+ arraySimbolos[0] + arrayVariables[3]+" = "+arrayVariables[2] + arrayVariables[3]);

//Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"
//con un parámetro para el nombre. 

function saludo(cualquiera){
    let nuevoParrafo=document.querySelector(".funciones > article:nth-of-type(1) p");
    nuevoParrafo.innerHTML= "Hola "+cualquiera;   
    console.log("Hola "+cualquiera);
}

let nombre=document.getElementById("Nombre");
nombre.addEventListener("blur", function(){ saludo(nombre.value)});

//Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás
//imprimir el resultado por la pantalla del navegador y la consola.

let numeros=document.querySelectorAll(".funciones input:nth-of-type(n+2):nth-of-type(-n+3");
numeros.forEach(x=>x.addEventListener("blur", function(){ suma(numeros[0].value, numeros[1].value)}));

function suma(num1, num2){

    let nuevoParrafo=document.querySelector(".funciones > article:nth-of-type(2) p");

    if(num1==="")num1=0;
    if(num2==="")num2=0;

    if(!isNaN(parseInt(num1)) && !isNaN(parseInt(num2)) ){
        let suma=parseInt(num1)+parseInt(num2);
        
        nuevoParrafo.innerHTML= "La suma de "+num1+" y "+num2+" es "+suma;
        console.log("La suma de "+num1+" y "+num2+" es "+suma);
    }
    else{
        nuevoParrafo.innerHTML= "La suma de "+num1+" y "+num2+" es "+num1+num2+", pero no son numeros";
        console.log("La suma de "+num1+" y "+num2+" es "+num1+num2+", pero no son numeros");
    }
}

//Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla
//del navegador y la consola.

let numeroPOI=document.getElementById("NumeroPOI");

function ParOImpar(numero){
    if(numero%2==0){
        return "par";
    }
    else{
        return "impar";
    }
}

numeroPOI.addEventListener("blur", function(){
    if(isNaN(parseInt(numeroPOI.value))){
        document.getElementById("ParImpar").innerText=numeroPOI.value+" no es un numero";
    }
    else{
        document.getElementById("ParImpar").innerText=numeroPOI.value+" es "+ParOImpar(numeroPOI.value);
    }    
});

//Crear un array de 10 números
let array10Numeros=[];

for(let i=0; i<10; i++){
    array10Numeros.push(i);
}

let aObjetivo=document.querySelector(".ArraysSec article:nth-of-type(1)");
aObjetivo.appendChild(document.createElement("p")).innerHTML=array10Numeros;
console.log(array10Numeros);

//Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)

let pObjetivo=document.querySelector(".ArraysSec article:nth-of-type(2)").appendChild(document.createElement("p"));

for(let i=0; i<array10Numeros.length; i++){
    
    pObjetivo.innerHTML= pObjetivo.textContent + array10Numeros[i];
    console.log(array10Numeros[i]);
}

//Crear una función que añada un número al array

document.getElementById("anadirAArray").addEventListener("blur", function(){

    if(isNaN(parseInt(document.getElementById("anadirAArray").value))){
        document.querySelector(".ArraysSec article:nth-of-type(3) p").innerText="No has introducido un numero";
    }
    else{
        anadir(document.getElementById("anadirAArray").value);
        console.log(array10Numeros);
        document.querySelector(".ArraysSec article:nth-of-type(3) p").innerText=array10Numeros;
    }
} );

function anadir(numero){
    array10Numeros.push(numero);
}

//Crear una función que elimine los números pares de ese array.
function EliminaPares(arrayPaciente){
    arrayPaciente.forEach((x, index)=>{
        if(x%2==0){
            arrayPaciente.splice(index, 1);
        }        
    });
}

document.getElementById("btnEliminarPares")
.addEventListener("click", function(){
    EliminaPares(array10Numeros);
    document.querySelector(".ArraysSec article:nth-of-type(4) p").innerText=array10Numeros;
    console.log(array10Numeros);
});

//Crear una función que devuelva el número mayor de un array.
function obtenerMaximo(arrayPaciente){
    arrayPaciente.sort();
    document.querySelector(".ArraysSec article:nth-of-type(5) p").innerText=arrayPaciente[arrayPaciente.length-1];   
    console.log(arrayPaciente[arrayPaciente.length-1]);
}



