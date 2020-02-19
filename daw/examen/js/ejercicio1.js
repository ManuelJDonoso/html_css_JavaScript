var grupo=[]
var mayor
var menor 
var media 
var pares=0
var texto=""
var nombre
var posicion

var num=prompt("¿cuantos deseas introducir", "solo numeros")
for(i=0;i<num;i++){
a= prompt("introducle el " + (i+1 )+" numero")
grupo.push(a)

}
mayor=Math.max.apply(null,grupo)
menor=Math.min.apply(null,grupo)
var a=0
for(i=0;i<num;i++){
    a += parseInt(grupo[i]) 
    
    }
  
    media = (a/num)

    for(i=0;i<num;i++){
        j=parseInt(grupo[i]) 
        if(j%2==0){
            pares++
        }
       
        
        }
       
        texto ="<h1>el mayor de todos es " + mayor + "</h1><h1>"+" el menor de todos es " + menor+  "</h1><h1>"+" la media  de todos es " + media + "</h1><h1>"+" hay " + pares + "  numeros que son pares"
 
    

        document.write(texto)
        nombre=prompt("<h1> introduce tu nombre y apellidos", "manuel donoso perez</h1> ")
        nombre1=nombre.split(" ",)
        document.write("<h1> Tu nombre es "+nombre1[0]+"</h1>")
        document.write("<h1> Tu primer apellido es "+nombre1[1]+"</h1>")
        document.write("<h1> Tu segundo apellido es "+nombre1[2]+"</h1>")
        for(i=0;i<nombre.length;i++){

            if(nombre[i]=="a"||nombre[i]=="e"||nombre[i]=="i"||nombre[i]=="oa"||nombre[i]=="u")
         
            posicion=i
            break
        }
        document.write("<h1> la primera vocal de tu nombre esta en la posicion "+posicion+"</h1>")







             

