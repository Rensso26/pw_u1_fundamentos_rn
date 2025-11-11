
function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    if (elemento.innerText === '0' || elemento.innerText.includes('Error')) {
        elemento.innerText = valor;
    } else {
        elemento.innerText = elemento.innerText + valor;
    }
}

function limpiarDisplay() {
    let elemento = document.getElementById('display');
    elemento.innerText = '0';
}

function borrarUltimo() {
    let elemento = document.getElementById('display');
    let contenido = elemento.innerText;
    if (contenido.length > 1) {
        elemento.innerText = contenido.slice(0, -1);
    } else {
        elemento.innerText = '0';
    }
}

function calcular() {
    const display = document.getElementById('display');
    const operacion = display.innerText;

    let operador = '';
    let operandos = [];

    if (operacion.includes('+')) {
        operador = '+';
        operandos = operacion.split('+');
    } else if (operacion.includes('-')) {
        operador = '-';
        operandos = operacion.split('-');
    } else if (operacion.includes('*')) {
        operador = '*';
        operandos = operacion.split('*');
    } else if (operacion.includes('/')) {
        operador = '/';
        operandos = operacion.split('/');
    } else if (operacion.includes('%')) {
        operador = '%';
        operandos = operacion.split('%');
    } else {
        return;
    }

    if (operandos.length !== 2 || operandos[0] === '' || operandos[1] === '') {
        display.innerText = 'Error: Sintaxis';
        return;
    }

    const num1 = parseFloat(operandos[0]);
    const num2 = parseFloat(operandos[1]);
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultado = 'Error: Div por 0';
            } else {
                resultado = num1 / num2;
            }
            break;
        case '%':
            resultado = num1 * (num2 / 100);
            break;
        default:
            display.innerText = 'Error: Operador';
            return;
    }

    display.innerText = resultado;
}
