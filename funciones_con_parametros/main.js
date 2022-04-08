function calcular_division(d1,d2) {
    const resultado= d1 / d2
    
   return resultado
}

function mostrar_resultado(params) {
    //forma 1
   const dato1= document.getElementById("inp_dato1").value
   //forma 2
    const dato2= document.querySelector("#inp_dato2").value
    //invocamos a la funcion (ejecutamos) pero ademas le enviamos dos datos (parametros)
    //ademas recibimos una respuesta de calcular_division()
    const respuesta= calcular_division(dato1, dato2)
    alert(respuesta)
}