function CambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;

}
function agregarElemento(idelementopadre, html) {
    document.getElementById(idelementopadre).innerHTML = html;
}
function eliminarElemento(idElemento) {
    document.getElementById(idElemento).remove();
}
function ocultarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'none';
}

function mostrarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'block';
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado;

    switch (tipo) {
        case '+':
            resultado = sumar(num1, num2);
            break;
        case '-':
            resultado = restar(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operación inválida";
    }

    document.getElementById('id_resultado').innerText = resultado;
}
function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;

}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 != 0) return num1 / num2
    else return "nan";

}

function fundamentosJS() {
    /*Tipos de variables*/
    var nombre = "Rensso"; //antigua, ya es consideradda obsoleta
    let apellido = "Parra"; //variables cambiantes
    let apellido2 = 15;
    apellido2 = "Alban"
    let arreglo = [1, 2, 3, 4, 5, 6]
    let diaSemana = ['lunes', 'martes', 'miercoles', 'jueves', '...']
    const IVA = 12.8;
    console.log('Fundamentos de JS');
    console.log(nombre);
    console.log(IVA);
    console.log(arreglo);
    //Arreglos
    const arreglosDiasSemana = ['Lunes', 'Martes', 'Miercoles']
    arreglosDiasSemana.push('Jueves');
    console.log(arreglosDiasSemana);
    arreglosDiasSemana.unshift('Dias');
    console.log(arreglosDiasSemana);
    console.log(arreglosDiasSemana[0]);
    console.log("Manejo de nulos, undefiend y vacio");
    arreglosDiasSemana.push(null);
    arreglosDiasSemana.push('');
    console.log(arreglosDiasSemana[5]);
    console.log(arreglosDiasSemana[6]);
    console.log(arreglosDiasSemana[7]);

    const numerosPares = [2, 4, 6, 8, 9];
    const numerosImpares = [1, 3, 5, 7, 11];
    const numerosTotales = numerosImpares.concat(numerosPares)
    console.log(numerosTotales);

    /*Sentencias de Control*/
    let edad = 24;
    if (edad >= 18) {
        console.log('Es mayor de Edad');
    } else {
        console.log('Es menor de edad');
    }

    let dia = 'Lunes';
    switch (dia) {
        case 'Lunes':
            console.log('Es Lunes');
            break;
        case 'martes':
            console.log('Es martes');
            break;
        default:
            console.log("No es ninguno de esos días");
    }

    for (let i = 0; i <= 5; i++) {
        console.log(i);

    }

    const frutas = ['manzana', 'Sandia', 'papaya', 'narannja'];
    for (let fruta of frutas) {
        console.log(fruta);
    }
    /*Manejo de objetos */
    const profesor = {
        nombre: 'Rensso',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito',
    }
    console.log(profesor);
    console.log(profesor.nombre);
    profesor.apellido = "Vasquez";
    console.log(profesor);

    if(profesor.ciudad === "Quito"){
        console.log('Es quiteño')
    }
    if(profesor.edad !== 24){
        console.log("es diferemte de 24");

    }else{
        console.log('Es 25')
    }
    for(let clave in profesor){
        console.log(clave);
        console.log(profesor[clave])

    }
}