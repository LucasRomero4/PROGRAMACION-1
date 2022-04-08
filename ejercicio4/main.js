function calcular_area_circ(r1) {
    //calculamos el area de un circulo

    const resultado = Math.PI * Math.pow(r1, 2)
    return resultado


}
function mostrar_area() {
    //seleccionamos por id el input


    const radio = document.getElementById("radio1").value

    //ejecutamos la funcion y enviamos un dato y recibimos una respuesta de calcular_area_circ()
    const respuesta = calcular_area_circ(radio)
    alert(respuesta)

}