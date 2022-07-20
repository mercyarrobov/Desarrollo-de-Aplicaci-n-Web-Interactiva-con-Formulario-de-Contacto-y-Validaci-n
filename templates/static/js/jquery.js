$(function () {
    $("form[name='basic']").validate({
        rules: {

            nombre: {
                required: true,
                minlength: 3
            },

            apellido: {
                required: true,
                minlength: 3
            },

            edad: {
                required: true,
                number: true
            },

            correo: {
                required: true,
                email: true
            },

            mensaje: {
                required: true
            }

        },

        messages: {
            nombre: {
                required: "Ingrese su nombre",
                minlength: "El nombre debe tener al menos 3 caracteres"
            },

            apellido: {
                required: "Ingrese su apellido",
                minlength: "El apellido debe tener al menos 3 caracteres"
            },
            edad: {
                required: "Ingrese su edad",
                min: "mayor de edad"
            },
            correo: {
                required: "Ingrese su dirección de correo",
                email: "El correo electrónico debe estar en el formato: abc@domain.tld"
            },
            mensaje: {
                required: "Ingrese el mensaje que desea enviar"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});