function elegir_opcion(){
    var opcion=document.getElementById("opc").value;
        
    if(opcion==1){
        opc_1();
    } else if (opcion==2){
        opc_2();
    }else if( opcion==3){
        opc_3();
    }else if( opcion==4){
        opc_4();
    }else if( opcion==5){
        opc_5();
    }  else{
        alert("la opcion elegida no es valida");
    }

    

}

function opc_1(){

    document.getElementById("cont1").innerHTML=" <hr> <br> \
        valor 1 : <input type='text' name='valor1' id='valor1' > \
        valor 2 : <input type='text' name='valor2' id='valor2' > \
        <input type='button' value='intro' onclick='calcular()'>\
        <div id='mens'></>                    "



}
function opc_2(){

    document.getElementById("cont1").innerHTML=" <hr> <br> \
        valor 1 : <input type='text' name='valor1' id='valor1' > \
        valor 2 : <input type='text' name='valor2' id='valor2' > \
        <input type='button' value='intro' onclick='calcular2()'>\
        <div id='mens'></>                    "
}
function opc_3(){

    document.getElementById("cont1").innerHTML=" <hr> <br> \
        valor  : <input type='text' name='valor1' id='valor1' > \
        <input type='button' value='intro' onclick='calcular3()'>\
        <div id='mens'></>                    "
}
function opc_4(){
    var vari,vari2=1,vari3="esto es un string",vari4=true;
        document.getElementById("cont1").innerHTML=" <hr> <br> \
           <table id='customers'>\
        <tr id='titulo'>\
            <td>variable </td>\
            <td>estado </td>\
            <td>resultado al imprimir variable</td>\
            <td>type of </td>\
        </tr>\
        \
        <tr>\
            <td>vari </td>\
            <td>sin iniciar</td>\
            <td>"+vari+"</td>\
            <td>"+tipovar(vari)+" </td>\
        </tr>\
        <tr>\
        <td>vari2 </td>\
        <td>iniciando un numero</td>\
        <td>"+vari2+"</td>\
        <td>"+tipovar(vari2)+" </td>\
    </tr>\
    <tr>\
        <td>vari3 </td>\
        <td>iniciando un String</td>\
        <td>"+vari3+"</td>\
        <td>"+tipovar(vari3)+" </td>\
    </tr>\
    <tr>\
        <td>vari4 </td>\
        <td>iniciando un boolean</td>\
        <td>"+vari4+"</td>\
        <td>"+tipovar(vari4)+"</td>\
    </tr>"
                  
    }

function calcular(){
    if(isNaN(document.getElementById("valor1").value) ){
        document.getElementById("mens").innerHTML=" <br> \
        <p>valor no valido "

    }else  if(isNaN(document.getElementById("valor2").value) ){
        document.getElementById("mens").innerHTML=" <br> \
        <p>valor no valido "

    }else{
    var valor1= parseInt(document.getElementById("valor1").value)
    var valor2=parseInt(document.getElementById("valor2").value)
    if (valor1>valor2){
        document.getElementById("mens").innerHTML=" <hr> <br> \
        <p> el valor 1 es mayor que el valor 2 o valor introducido no valido"
    }else{
     var i=valor1
     
    document.getElementById("mens").innerHTML=" <hr> <br> \
    <p> los siguientes valores son múltiplos de 4 y \
   no son múltiplos de 5 y  están entre dos límites que introdujo el usuario.\
      "  
  for(i=valor1;i<valor2;i++){
      if(((i%4)==0)&&((i%5)!=0)){
        imprimir(i)
      }
  
  }
    
    }
    
    }
}










function calcular2(){
    if(isNaN(document.getElementById("valor1").value) ){
        document.getElementById("mens").innerHTML=" <br> \
        <p>valor no valido "

    }else  if(isNaN(document.getElementById("valor2").value) ){
        document.getElementById("mens").innerHTML=" <br> \
        <p>valor no valido "

    }else{


    var valor1= parseInt(document.getElementById("valor1").value)
    var valor2=parseInt(document.getElementById("valor2").value)
    if (valor1>valor2){
        document.getElementById("mens").innerHTML=" <hr> <br> \
        <p> el valor 1 es mayor que el valor 2 o valor introducido no valido"
    }else{
     var i=valor1
     
    document.getElementById("mens").innerHTML=" <hr> <br> \
    <p> los siguientes valores son primos\
      "  
  for(i=valor1;i<valor2;i++){
    primo=true
     for(x=2;x<i;x++){
        if(i%x==0){
            primo=false
        }
       
       
      }
      if(primo){
        imprimir(i)
      }
      

      
  }
    
    }
}

}






function calcular3(){
    var resultado =1
    if(isNaN(document.getElementById("valor1").value)){
        document.getElementById("mens").innerHTML=" <br> \
        <p>valor no valido "

    }else{

        var valor1= parseInt(document.getElementById("valor1").value)
        document.getElementById("mens").innerHTML=" <hr> <br> \
        <p>para el numero " +valor1 +" el resultado es: "
        for(i=valor1;i>=1;i--){
            imprimir2(i)
            resultado= resultado*i
        }
        document.getElementById("mens").innerHTML += "=" + resultado;
    }
  
    
  

}


function tipovar(variable){
    var valor
    if(typeof variable === 'string'){
        valor="string"
    }
    if(typeof variable === 'number'){
        valor="number"
    }  if(typeof variable === 'boolean'){
        valor="boolean"
    }
    if(typeof variable === 'undefined'){
        valor="undefined"
    }
    return valor

}
function imprimir(valor){

    document.getElementById("mens").innerHTML += valor + "<br>";
}
function imprimir2(valor){

    document.getElementById("mens").innerHTML += valor + "*";
}
