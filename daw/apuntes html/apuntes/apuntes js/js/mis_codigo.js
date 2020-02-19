alert("hola alumno");

var nombre=prompt("introduce el nombre por favor "); //abrer un cuadro de texto que pide un dato

//arrays

var miarray=["elemento numero",12,"elemento strin",true,"elemen...."];
//segunda forma
var miarray2=new Array("elemento numero",12,"elemento strin",true,"elemen....");
//aceder al elemento array

alert(miarray[1]);//esto devolveria 12 porq 12 es el elemento 1
alert(miarray.length);//devuelve el tamaño del array
//añadir elemento al array al princio
miarray.push("elemento1","elemento2","...");
//añadir elemento al array al final
miarray.unshift("elemento1","elemento2","...");
//elimina elemento al array al final

miarray.pop();
//elimina elemento al array al final
miarray.shift();
//

//selecionar un elemento del documento y guardarlo en una variable
var miboton=document.getElementById("nombre_elemento");
miboton.style.width="300px";//en la web hay un boton  y con esta propiedad cambiamos el tamaño de ancho

//condicionales
/*
if(condicion){

}
else{


}
*/

/*
== igual que
!= difeerente que
> mayor que
< menor que
>= mayot o igual
<= menor o igual
=== estrectametne igual que(comprueba tambien tipo)
!== estrictamente diferente que ...(comprueba tipos)
&& Y logico
||o logico
*/

//convierte un string en a entero
//parseInt(numero)

//isNaN(comprueva si es un numero)
//typeof(variable)comprueba el tipo de la variable

//bucles

//WHILE

/*
while(condicion){

}

*/

// DO WHILE

/*
Do{
codigo

}while(condicion);



*/



//Math.random()  devuenve un numero aleatorio entre 0 y 1
//Math.round(Math.random()*100) round redondea el numero introducido


//bucle for

/*
 for(var i=0 ;i<10;i++) {
    
}
*/

//FUNCIONES

function nombre_funcion(){
//codigo a ejecutar

}

//para llamarla 
//nombre_funcion();

//funcion date (fecha actual)
var hoy=new Date();


//EVENTOS


var imagenes=document.querySelectorAll("#elemento_id etiqueta_hija")

//FUNCIONES JQUERY
.html() //capaz de manipular las etiquetas
.text()
.append()
.prepend()
.after()
.before()


ejemmplo

$("#elemtoid").html(<p>texto....</p>); //con esto todo el texto dentro del elemento id es sustituido por <p>.....
$("#elemtoid").append(<p>texto....</p>); //agrega despues del ultimo elemento id el texto<p>.....
$("#elemtoid").append(<p>texto....</p>); //agrega el primer  elemento id el texto<p>.....
$("#elemtoid").before(<p>texto....</p>); //agrega antes elemento id el texto<p>.....
$("#elemtoid").after(<p>texto....</p>); //agrega despues del elemento id el texto<p>.....

/*
.remove() elimina un elemento de la pagina web
.remplaceWith() remplaza un elemento de la pagina web por otro
*/ 

var z=getElementById("cerrar");

z.addEventListener