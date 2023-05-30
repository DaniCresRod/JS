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

//Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.

Carro={
    Marca: "John Deere",
    Tipo: "Vendimia",
    Puertas: 1,
    Color: "Amarillo",
    Dueño:{
        Nombre: "Manolo",
        Apellido: "Escobar"
    }
}
  
console.log(Carro);

//Crear una función que devuelva la marca del carro.
function MarcaDelCarro(elObjeto){
    document.querySelector(".Objetos article p:nth-of-type(1)").innerText="La marca del carro es: "+elObjeto.Marca;
    console.log(elObjeto.Marca);
}

MarcaDelCarro(Carro);

//Crear una función que devuelva la cantidad de puertas que tiene el carro.
function PuertasDelCarro(elObjeto){
    document.querySelector(".Objetos article p:nth-of-type(2)").innerText="Nº de puertas: "+elObjeto.Puertas;
    console.log(elObjeto.Puertas);
}

PuertasDelCarro(Carro);

//Crear una función que devuelva un atributo del objeto anidado.
function DueñoDelCarro(elObjeto){
    document.querySelector(".Objetos article p:nth-of-type(3)").innerText="El dueño del carro es: "+elObjeto.Dueño.Nombre +" "+ elObjeto.Dueño.Apellido;
    console.log(elObjeto.Dueño.Nombre +" "+ elObjeto.Dueño.Apellido);
}

DueñoDelCarro(Carro);


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
        anadir(parseInt(document.getElementById("anadirAArray").value));
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
document.getElementById("btnNumeroMayor")
.addEventListener("click", function(){    
    obtenerMaximo(array10Numeros);
});

function obtenerMaximo(arrayPaciente){    
    arrayPaciente.sort(function(a,b){return a-b});
    document.querySelector(".ArraysSec article:nth-of-type(5) p").innerText=" El numero mas alto del array es: "+arrayPaciente[arrayPaciente.length-1];   
    console.log(arrayPaciente[arrayPaciente.length-1]);
}

//Crear una función que devuelva el número menor de un array.
function obtenerMinimo(arrayPaciente){
    arrayPaciente.sort(function(a,b){return a-b});
    document.querySelector(".ArraysSec article:nth-of-type(6) p").innerText=" El numero mas bajo del array es: "+arrayPaciente[0];   
    console.log(arrayPaciente[0]);
}

document.getElementById("btnNumeroMenor")
.addEventListener("click", function(){
    obtenerMinimo(array10Numeros);
});

//Crear un función que convierta en minúsculas todas las letras de un texto.
document.getElementById("arrayMinusculas").addEventListener("blur", function(){
    let fraseDeLaCajaDeTexto=document.getElementById("arrayMinusculas").value.toLowerCase();
    document.querySelector(".ArraysSec article:nth-of-type(7) p").innerText="Pasado a minusculas seria: "+fraseDeLaCajaDeTexto;   
    console.log(fraseDeLaCajaDeTexto);    
});

//Crear una función que convierta en mayúsculas todas las letras de un texto.
document.getElementById("arrayMayusculas").addEventListener("blur", function(){
    let fraseDeLaCajaDeTexto=document.getElementById("arrayMayusculas").value.toUpperCase();
    document.querySelector(".ArraysSec article:nth-of-type(8) p").innerText="Pasado a mayusculas seria: "+fraseDeLaCajaDeTexto;   
    console.log(fraseDeLaCajaDeTexto);    
});

//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.
let arrayDeNombres=[];
document.getElementById("arrayNombres").addEventListener("blur", function(){
    arrayDeNombres.push(document.getElementById("arrayNombres").value[0].toUpperCase() + (document.getElementById("arrayNombres").value).substring(1));
    document.querySelector(".ArraysSec article:nth-of-type(9) p").innerText="El array queda: "+arrayDeNombres;   
    console.log(arrayDeNombres);
    document.getElementById("arrayNombres").value="";
});

//Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
document.getElementById("btnMensaje").addEventListener("click", function(){
    if(document.getElementById("btnMensaje").innerText==="Click Aqui"){
        document.getElementById("btnMensaje").innerText="Hola Chavaleria!"
    }
    else{
        document.getElementById("btnMensaje").innerText="Click Aqui"
    }    
});

//Cambiar el contenido de un elemento HTML mediante JavaScript.
document.getElementById("btnCambiarH4").addEventListener("click", function(){    
        document.querySelector("#DOMSection article:nth-of-type(2) p").innerHTML=
        document.querySelector("#DOMSection article:nth-of-type(2) p").innerText+"... y me veo "+
        "<span Style='font-weight: Bold'>cambiado!</span>";

        document.getElementById("btnCambiarH4").disabled=true;
});

//Ocultar y mostrar elementos HTML utilizando JavaScript.
document.getElementById("btnOcultar").addEventListener("click", function(){

    document.getElementById("btnOcultar").style.visibility = "hidden";
});

//Crear un array de 10 nombres.
let arrayReyesGodos=["Leovigildo", "Recaredo", "Liuva", "Witerico", "Gundemaro", "Sisebuto", "Suintila", "Sisenando", "Rencesvinto", "Witiza" ];
document.querySelector("#MasArrays article:nth-of-type(1) p").innerHTML=arrayReyesGodos;

//Crear una función que imprima en pantalla una lista con los nombres del array de nombres.

function MostrarListaNombres(elArray){
    let cabezaLista=document.createElement("ul");
    document.querySelector("#MasArrays article:nth-of-type(2)").appendChild(cabezaLista);

    elArray.forEach(function(x){
        document.querySelector("#MasArrays article:nth-of-type(2) ul").appendChild(document.createElement("li")).innerText=x;

    });
}

document.getElementById("btnMostarLista").addEventListener("click", function(){MostrarListaNombres(arrayReyesGodos)}); 

//Crear un array de números.
let array10Numeros2=[0, 6, 28, 73, 496, 8128, 33550336, 8589869056, 137438691328, 2305843008139952128 ];
document.querySelector("#MasArrays article:nth-of-type(3) p").innerHTML=array10Numeros2;
console.log(array10Numeros2);

//Crear una función que pinte en pantalla cuántos números tiene el array de números.

function MedirArray(elArray){
    document.querySelector("#MasArrays article:nth-of-type(4) p").innerText="Nº de elementos del array: "+elArray.length;
    console.log("Nº de elementos del array: "+elArray.length);
}
document.getElementById("btnContarArray").addEventListener("click", function(){MedirArray(array10Numeros2)}); 

//Crea los nodos necesarios para imprimir un formulario.

let etiquetaForm=document.querySelector("#MasArrays article:nth-of-type(5)").appendChild(document.createElement("form"));
etiquetaForm.setAttribute("action", "mailto:teDiTodoMiAmor@love.com");
etiquetaForm.setAttribute("method", "POST");
etiquetaForm.setAttribute("enctype", "text/plain");

let etiquetaInput=etiquetaForm.appendChild(document.createElement("input"));
//etiquetaInput.setAttribute("value", "Hola, quiero ser un formulario");
etiquetaInput.value="Hola, quiero ser un formulario";
etiquetaInput.setAttribute("size", 35);

let botonEnviar=etiquetaForm.appendChild(document.createElement("button"));
botonEnviar.setAttribute("type", "submit");
botonEnviar.innerText="Enviar";

let botonBorrar=etiquetaForm.appendChild(document.createElement("button"));
botonBorrar.setAttribute("type", "reset");
botonBorrar.innerText="Borrar";

//Crea los nodos necesarios para imprimir una tabla.

let laTabla=document.createElement("table");
let laCabecera=document.createElement("th");
let laFila=document.createElement("tr");
let laCelda=document.createElement("td");

//Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes keys: id, name, status, species, type, gender
let arrayKeys=["id", "name", "status", "species", "type", "gender"];
let arrayId=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayName=arrayReyesGodos;
let arrayStatus=["muerto", "muerto", "muerto", "muerto", "muerto","muerto","muerto","muerto","muerto","muerto"];
let arraySpecies=["Godo", "Godo","Godo","Godo","Godo","Godo","Godo","Godo","Godo","Godo",];
let arrayType=["A+", "A-", "B+", "B-", "AB+", "AB-", "0+", "0-", "0+", "0+"];
let arrayGender=["M","M","M","M","M","M","M","M","M","M"]

let Objeto={
    id:"",
    name:"",
    status:"",
    species:"",
    type:"",
    gender:""
}

let arrayObjetos=[];

for(var i=0; i<10; i++){

    let elObjeto=Object.create(Objeto);

    elObjeto.id=arrayId[i];
    elObjeto.name=arrayName[i];
    elObjeto.status=arrayStatus[i];
    elObjeto.species=arraySpecies[i];
    elObjeto.type=arrayType[i];
    elObjeto.gender=arrayGender[i];

    arrayObjetos.push(elObjeto);
}
//document.querySelector("#MasArrays article:nth-of-type(7) p").innerHTML;
console.log(arrayObjetos);

//Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.
let miTabla=document.querySelector("#MasArrays article:nth-of-type(8) p").appendChild(laTabla);
let filaCabecera=miTabla.appendChild(document.createElement("tr"));

for(let i=0; i<arrayKeys.length; i++){
    filaCabecera.appendChild(document.createElement("th")).innerText=arrayKeys[i];
    console.log(arrayKeys[i]);
}

for(let i=0; i<arrayObjetos.length; i++){
    let estaFila=miTabla.appendChild(document.createElement("tr"));
    for(let clave in arrayObjetos[i]){
        estaFila.appendChild(document.createElement("td")).innerText=arrayObjetos[i][clave];
    }
}

