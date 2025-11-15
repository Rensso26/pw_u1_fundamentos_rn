function guardar() {
    validarCampos();
}
function validarCampos() {
    let nombre = document.getElementById('cd_name').value;

    if (nombre === null) {

    }
}
function mostrarMensaje(msg) {
    let mensaje = document.getElementById('msg-error');
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = '*';
}
