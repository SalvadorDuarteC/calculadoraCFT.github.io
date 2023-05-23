//variabld de costo de ft3
let precio;
let inputNombre;
//definicion de funcion de calculo
function calcular() {
    //declaracion de variable vacia
    let rpariclaft;

    //variable resultado de calculo
    rpariclaft = document.getElementById("piesPieza1");

    //variables de unidad de medida
    let ualto = document.getElementById("unidadAlto").value;
    let uancho = document.getElementById("unidadAncho").value;
    let ulargo = document.getElementById("unidadLargo").value;
  
    //variables de longitud
    let alto = document.getElementById("longitudAlto").value;
    let ancho = document.getElementById("longitudAncho").value;
    let largo = document.getElementById("longitudLargo").value;

    
  
    //1ra condicional de formulas
    if (ualto === "in" && uancho === "in" && ulargo === "in") {
        rpariclaft.textContent = ((alto * ancho / largo) * 100).toFixed(2);
        
    } 

    //2da condicional de formulas
    if (ualto === "in" && uancho === "in" && ulargo === "ft") {
        rpariclaft.textContent = ((alto * ancho * largo) / 12).toFixed(2);
    }

    //3ra condicional de formulas
    if (ualto === "in" && uancho === "in" && ulargo === "cm") {
        rpariclaft.textContent = ((alto * ancho) * (largo / 30.48) /12).toFixed(2);
    }

    //4ta condicional de formulas
    if (ualto === "mm" && uancho === "in" && ulargo === "ft") {
        rpariclaft.textContent = (((alto / 25.4) * ancho * largo) / 12).toFixed(2);
    }

    //5ta condicional de formulas
    if (ualto === "mm" && uancho === "in" && ulargo === "cm") {
        rpariclaft.textContent = (((alto / 25.4)* ancho) * (largo / 30.48) / 12).toFixed(2);
    }

    //6ta condicional de formulas
    if (ualto === "mm" && uancho === "cm" && ulargo === "ft") {
        rpariclaft.textContent = (((alto / 25.4) * (ancho / 2.54) * largo) / 12).toFixed(2);
    }

    //7ma condicional de formulas
    if (ualto === "mm" && uancho === "cm" && ulargo === "cm") {
        rpariclaft.textContent = (((alto / 25.4) * (ancho / 25.4) * (largo / 3.048)) / 12).toFixed(2);
    }

    //8va condicional de formulas
    if (ualto === "mm" && uancho === "in" && ulargo === "in") {
        rpariclaft.textContent = ((((alto / 25.4) * ancho) * (largo / 12)) / 12).toFixed(2);
    }  

    //se retorna el valor en numero para poder utilizarlo fuera
    return parseFloat(rpariclaft.textContent);
}

//definicion de funcion de costo
function costo() {
    let rpariclaft = calcular();
    let precioUnidad = rpariclaft * precio;
    precioUnidad = document.getElementById("costoPieza1").textContent = "$" + precioUnidad;
}

//funcion para leer el inputNombre y asignarlo a la lista
function nombrePieza(){
    let nombreMostrar = document.getElementById("inputNombre").value;
    document.getElementById("nombrePieza1").textContent = nombreMostrar;
}


//funcion llamada con el boton
function calculoYcosto() {
    precio = document.getElementById("precioMaterial").value;
    costo();
    nombrePieza();
}

