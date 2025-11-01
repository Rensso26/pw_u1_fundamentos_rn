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

        function evaluarOperacion(tipo){
            
            let num1 = parseFloat(document.getElementById('id_n1').value)
            let num2 = parseFloat(document.getElementById('id_n2').value)
            let resultado
            switch(tipo){
                case('+'): resultado = sumar(num1,num2);
                // case('-'): restar(num1,num2);
                // case('*'): multiplicar(num1,num2);
                // case('/'): dividir (num1,num2);
            }
            document.getElementById('id_resultado').innerText = resultado;
        }
        function sumar(num1, num2){
            return num1 + num2;
        }

        function restar(num1 ,num2){
            return num1 - num2;

        }

        function multiplicar(num1, num2){
            return num1 * num2;
        }

        function dividir(num1, num2){
            if(num2 != 0) return num1/num2
            else return "nan";

        }