


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


function repeticionDeCadena (s, n) {
    let nuevaCadena = ''
    let contador = 1
    while (contador <= n) {
        nuevaCadena += s + ' '
        contador++
    }

    return nuevaCadena
}





function validadorPassword (pass) {
    const mayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
        'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    const minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
        'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    
    const especiales = ['!','@','#','$','%','^','&','*']
    const arrayDeString = pass.split('')
    let longitudNecesaria = false
    let hayMayuscula = false
    let hayMinuscula = false
    let haySimbolo = false
    let hayNumero = false

    if (arrayDeString.length > 6) longitudNecesaria = true
    for (let char of pass) {
        if (mayusculas.includes(char)) hayMayuscula = true
        if (minusculas.includes(char)) hayMinuscula = true
        if (especiales.includes(char)) haySimbolo = true
    }
    
    for (let i = 0; i < 9; i++) {
        if (arrayDeString.includes(i.toString())) hayNumero = true
    }

    return longitudNecesaria && hayMayuscula && hayMinuscula && hayNumero && haySimbolo
}

function generadorDePassword (longitud) {
    let pass = ''
    let sP = 0
    //Obtención de array de mayúsculas y minúsculas desde el código de caracteres
    const mayusculas = Array.from({length : 25}, (_, i) => String.fromCharCode(65 + i))
    const especiales = ['!','@','#','$','%','^','&','*']
    const minusculas = Array.from({length : 25}, (_, i) => String.fromCharCode(97 + i))
    let actual = ''
    let esMinuscula = true
    let esMayuscula = true
    let esEspecial = true
    while (sP <= longitud) {
        let indice = 0
            actual = ''
            indice = Math.floor(Math.random() * 10)
            
            if (esMinuscula && !esEspecial) {
                actual = mayusculas[indice]
                esMinuscula = false
                esMayuscula = true
            } else if (esMayuscula && !esEspecial) {
                actual = minusculas[indice]
                esMayuscula = false
                esMinuscula = true
                esEspecial = true
            } else if (esEspecial) {
                actual = especiales[indice]
                esEspecial = false
                esMinuscula = true
            }
            
            pass += actual
        sP++
    }
    return pass
}

const pass = generadorDePassword(15)






