
let nombre = prompt("Ingrese su nombre");
let precio = 600
let bienvenida = "Bienvenido/a " + nombre;
alert(bienvenida);
function mostrarTotal(perros, paseos){
    alert ("$" + (perros * paseos) * precio + " por semana")
}
let barrio = prompt("En que barrio reside?"); {
    
    if (barrio === "zona sur") {
        alert("ok")
        let perros = prompt("Cuantos perros tiene?")
        if (isNaN(perros)) {
            alert("Debe ingresar numeros.")
        }
        else {
            let paseos = prompt("Cuantos paseos por semana desea contratar?")
            if (isNaN(paseos)) {
                alert("Debe ingresar numeros.")
            }
            else{
                alert("Su presupuesto es el siguiente:")
            mostrarTotal(perros,paseos)
            }
            
        }
        
    }
    else if (barrio === "rada tilly") {
        alert("ok")
        let perros = prompt("Cuantos perros tiene?")
        if (isNaN(perros)) {
            alert("Debe ingresar numeros.")
        }
        else {
            let paseos = prompt("Cuantos paseos por semana desea contratar?")
            if (isNaN(paseos)) {
                alert("Debe ingresar numeros.")
            }
            else{
                alert("Su presupuesto es el siguiente:")
            mostrarTotal(perros,paseos)
            }
            
        }
    }
    else if (barrio === "centro"){
        alert("ok")
        let perros = prompt("Cuantos perros tiene?")
        if (isNaN(perros)) {
            alert("Debe ingresar numeros.")
        }
        else {
            let paseos = prompt("Cuantos paseos por semana desea contratar?")
            if (isNaN(paseos)) {
                alert("Debe ingresar numeros.")
            }
            else{
                alert("Su presupuesto es el siguiente:")
            mostrarTotal(perros,paseos)
            }
            
        }
    }

    else if (barrio == ""){
        alert("No ingreso ningun barrio")
    }

    else{
        alert("Lo sentimos, no disponemos paseadores en su zona")
    }
}

