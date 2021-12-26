const Login = () => {
    var settings = {
        "url": "http://localhost:8080/api/usuarios",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "usuario": $("#user").val(),
            "clave": $("#pass").val()
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        if (response.length > 0) {
            window.location.href = "http://localhost:1411/Inicio";
        }
        else {
            alert("Usuario incorrecto");
        }
    });



}

