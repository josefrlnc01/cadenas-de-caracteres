


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



function eliminarLetras (palabra, letras) {
    let nuevaPalabra = ''
    for (let i = 0; i < palabra.length; i++) {
        let esIgual = false
        for (let j = 0; j < letras.length; j++) {
            console.log(palabra[i])
            if (letras[j] === palabra[i]) {
                esIgual = true
            }  
        }
        if (esIgual) {
            continue
        } else {
            nuevaPalabra += palabra[i]
        }
    }
    return nuevaPalabra
}





function romanos (num) {
        let res = {
        texto: ''
    }

    procesarNumero(num, 1000, 'M', '', '', res)
    procesarNumero(num, 100, 'C', 'D', 'M', res)
    procesarNumero(num, 10, 'X', 'L', 'C', res)
    procesarNumero(num, 1, 'I', 'V', 'X', res)

    return res.texto

}


function procesarNumero (num, divisor, uno, cinco, diez, res) {
    let cociente = Math.floor(num / divisor)
    let digito = cociente % 10

    if (digito === 9) {
        res.texto += uno + diez
    } else if (digito > 5) {
        res.texto += cinco + uno.repeat(digito - 5)
    } else if (digito === 4) {
        res.texto += uno + cinco
    } else {
        res.texto += uno.repeat(digito)
    }

}


function cambiarNumeroDeBase (num, base) {
    let nuevoNumeroEnBaseEspecifica = []
    let comparador = num
    while (comparador > 0) {
        let resto = 0
        resto = comparador % base
        comparador = Math.floor(comparador / base)
        nuevoNumeroEnBaseEspecifica.push(resto)
    }
    return nuevoNumeroEnBaseEspecifica.reverse().join('')
}


function esPalindromo (cadena) {
    return cadena.split('').reverse().join('') === cadena.split('').join('')
}









