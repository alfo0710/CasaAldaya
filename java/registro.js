document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;  // Nueva línea para obtener el apellido
    const email = document.getElementById("email").value;
    const password = document.getElementById("newPassword").value;
    const genero = document.getElementById("genero").value;

    const user = {
        nombre: nombre,
        apellido: apellido,  // Se agrega el apellido al objeto user
        email: email,
        password: password,
        genero: genero
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");  // Marca el usuario como logueado
    window.location.href = "iniciarSesion.html";  // Redirige a la página principal
});




document.addEventListener("DOMContentLoaded", function() {
    const iconoUsuario = document.getElementById("iconoUsuario");
    const menuOpciones = document.getElementById("menuOpciones");

    iconoUsuario.addEventListener("click", function() {
        // Mostrar u ocultar el menú desplegable
        if (menuOpciones.style.display === "none" || menuOpciones.style.display === "") {
            menuOpciones.style.display = "block";
        } else {
            menuOpciones.style.display = "none";
        }
    });

    // Cerrar el menú al hacer clic fuera de él
    window.addEventListener("click", function(event) {
        if (!iconoUsuario.contains(event.target) && !menuOpciones.contains(event.target)) {
            menuOpciones.style.display = "none";
        }
    });
});
