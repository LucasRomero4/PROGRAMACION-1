function calcular_area() {
    const base = document.getElementById("base_1").value
    const base2 = document.getElementById("base_2").value
    const altura = document.getElementById("altura_1").value

    const resultado = ((parseInt(base)+parseInt(base2))* parseInt(altura))/2

    alert (resultado)
    
}