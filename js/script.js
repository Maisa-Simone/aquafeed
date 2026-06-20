function mostrarSenha(id) {

    let campo = document.getElementById(id);


    if (campo.type === "password") {

        campo.type = "text";

    } else {

        campo.type = "password";

    }

}