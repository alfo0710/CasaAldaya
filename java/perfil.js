document.addEventListener("DOMContentLoaded", function() {
    const nombreSpan = document.getElementById("nombre");
    const apellidoSpan = document.getElementById("apellido");
    const correoSpan = document.getElementById("correo");
    const generoSpan = document.getElementById("genero");
    const logoutBtn = document.getElementById("logoutBtn");

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true" && storedUser) {
        // Rellena los datos del usuario en el perfil
        nombreSpan.textContent = storedUser.nombre;
        apellidoSpan.textContent = storedUser.apellido;
        correoSpan.textContent = storedUser.email;
        generoSpan.textContent = storedUser.genero;
    } else {
        // Si no está logueado, muestra el mensaje y redirige a la página de inicio de sesión
        alert("Debes iniciar sesión para ver esta página.");
        window.location.href = "iniciarSesion.html";
    }

    // Función para cerrar sesión
    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "index.html"; // Redirige a la página principal
    });
});

function cambiarImagen(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        // Cambiar la imagen de perfil
        const imagenPerfil = document.getElementById("imagenPerfil");
        imagenPerfil.src = e.target.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}