function guardar() {
    validarCampos();
}

function validarCampos() {
    let nombre = document.getElementById('id_nombre').value;
    let apellido = document.getElementById('id_apellido').value;
    let email = document.getElementById('id_email').value;


    if (nombre === "") {
        mostrarMensaje('Nombre es obligatorio');
        mostrarAsterisco('id_error_nombre');

        if (apellido === "") {
            mostrarMensaje('Nombre y Apellido es obligatorio');
            mostrarAsterisco('id_error_apellido');

            if (email === "") {
                mostrarMensaje('Nombre y Apellido Email es obligatorio');
                mostrarAsterisco('id_error_apellido');
                return;
            }
        }
        return;

    }


    if (apellido === "") {
        mostrarMensaje('Apellido es obligatorio');
        mostrarAsterisco('id_error_apellido');

    }

    if (email === "") {
        mostrarMensaje('Email es obligatorio');
        mostrarAsterisco('id_error_email');
        return;
    }
    if (!validarEmail(email)) {
        mostrarMensaje('Email no valido');
        mostrarAsterisco('id_error_email');
        return;
    }
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById('msg-error');
    mensaje.innerText = msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = '*';
}

function limpiarMensajes() {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = "";
    mensaje.style.display = 'none';

    const erroresAs = document.querySelectorAll('.error_as');
    erroresAs.forEach(e => e.innerText = "");
}