


function eliminarBlancos (c) {
    let i = 0 //Contador de cadena actual
    let nuevaCadena = ''
    while (i < c.length) {
        if (c[i] !== ' ') {
            nuevaCadena += c[i]
        }
        i++
    }

    return nuevaCadena
}


function antesODespuesDeM (char) {
    return char > 'M' ? 'Va después' : 'Va antes'
}

console.log(antesODespuesDeM('Z'))

function estanEnOrdenAlfabetico (char1, char2) {
    return char1 < char2 ? 'Hay orden alfabético' : 'No hay orden alfabético'
}


console.log(estanEnOrdenAlfabetico('c', 'B'))
  let cadena = 'hola mundo'

function encontrarOcurrenciaYModificar (cadena, subcadena) {
    let nuevaCadena = ''
    let indice = 0
    if (cadena.includes(subcadena)) {
        indice = cadena.indexOf(subcadena)
    }
    for (let i = 0; i < indice; i++) {
        nuevaCadena += cadena[i]
    }


    for (let i = 0; i < subcadena.length; i++) {
        nuevaCadena += '*'
    }


    for (let i = (indice + subcadena.length); i < cadena.length; i++) {
        nuevaCadena += cadena[i]
    }
    


    return nuevaCadena
    
}


function contarNumeroDeOcurrencias (sub1,cadena) {
    let contadorOcurrencias = 0
  
    for (let i = 0; i < cadena.length; i++) {
        let ocurrencia = true
        for (let j = 0; j < sub1.length; j++) {
            if (cadena[i + j] !== sub1[j]) {
                ocurrencia = false
            }
        }

        if (ocurrencia) {
            contadorOcurrencias++
        }
    }

    return {
        contadorOcurrencias
    }
}


console.log(contarNumeroDeOcurrencias('ene', 'penelopenero'))