



//definicion de funcion de calculo
function calcular() {
    //variables de unidad de medida
    let ualto = document.getElementById("unidadAlto").value;
    let uancho = document.getElementById("unidadAncho").value;
    let ulargo = document.getElementById("unidadLargo").value;
  
    //variables de longitud
    let alto = document.getElementById("longitudAlto").value;
    let ancho = document.getElementById("longitudAncho").value;
    let largo = document.getElementById("longitudLargo").value;

    //variable resultado de calculo
    let rpariclaft = document.getElementById("reParcialFt");
  
    //1ra condicional de formulas
    if (ualto === "in" && uancho === "in" && ulargo === "in") {
        rpariclaft.textContent = ((alto * ancho / largo) * 100).toFixed(2);
        console.log(rpariclaft.textContent.toFixed(2));
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

}



  /*
  H Altura
  J ancho
  L largo
  */