/* Agregando reglas de validación para campos de entrada */
$(function () {
    /*Metodo validate() para determinar como son validados los valores de entrada */
    $("form[name='basic']").validate({
        /*Parametro rules es un objeto con elementos que vamos a validar */
        rules: {
            nombre: {
                /*Función de retroceso que regrese true */
                required: true,
                /* Establece un valor de 3 que fuerza al usuario a ingresae al menos 3 caracteres */
                minlength: 3
            },

            apellido: {
                /*Función de retroceso que regrese true */
                required: true,
                /* Establece un valor de 3 que fuerza al usuario a ingresae al menos 3 caracteres */
                minlength: 3
            },

            edad: {
                /*Función de retroceso que regrese true */
                required: true,
                number: true
            },

            correo: {
                /*Función de retroceso que regrese true */
                required: true,
                email: true
            },

            mensaje: {
                /*Función de retroceso que regrese true */
                required: true
            }

        },

        /*Creación de nuestros propios mensajes */
        /*Establecemos mediante un objeto "messages" para los campos de entrada */
        messages: {
            nombre: {
                /*Muestra un mensaje de error */
                required: "Ingrese su nombre",
                minlength: "El nombre debe tener al menos 3 caracteres"
            },

            apellido: {
                /*Muestra un mensaje de error */
                required: "Ingrese su apellido",
                minlength: "El apellido debe tener al menos 3 caracteres"
            },
            edad: {
                /*Muestra un mensaje de error */
                required: "Ingrese su edad",
                min: "mayor de edad"
            },
            correo: {
                /*Muestra un mensaje de error */
                required: "Ingrese su dirección de correo",
                email: "El correo electrónico debe estar en el formato: abc@domain.tld"
            },
            mensaje: {
                /*Muestra un mensaje de error */
                required: "Ingrese el mensaje que desea enviar"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});