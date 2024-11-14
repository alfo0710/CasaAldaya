document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("isLoggedIn", "true");  // Marca el usuario como logueado
        window.location.href = "index.html";  // Redirige a la página principal
    } else {
        alert("Correo o contraseña incorrectos.");
    }
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
