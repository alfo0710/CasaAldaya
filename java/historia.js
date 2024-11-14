document.addEventListener("DOMContentLoaded", function() {
    const iconoUsuario = document.getElementById("iconoUsuario");
    const nombreUsuarioSpan = document.getElementById("nombreUsuario");
    const menuOpciones = document.getElementById("menuOpciones");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true" && storedUser) {
        // Muestra el nombre del usuario
        nombreUsuarioSpan.textContent = storedUser.nombre;

        // Asigna el icono basado en el género del usuario
        if (storedUser.genero === "mujer") {
            iconoUsuario.src = "img/mujer.png";
        } else if (storedUser.genero === "varon") {
            iconoUsuario.src = "img/hombre.png";
        } else {
            iconoUsuario.src = "img/usuario.png";
        }

        // Configura las opciones del menú para usuario logueado
        menuOpciones.innerHTML = `
            <a href="perfil.html">Ir a Perfil</a>
            <a href="#" id="cerrarSesion">Cerrar Sesión</a>
        `;

        // Evento para cerrar sesión
        document.getElementById("cerrarSesion").addEventListener("click", function(event) {
            event.preventDefault();
            localStorage.removeItem("isLoggedIn");
            window.location.reload();  // Recarga la página
        });
    } else {
        // Si no está logueado, muestra las opciones para iniciar sesión y registrarse
        nombreUsuarioSpan.textContent = "";  // No muestra ningún nombre
        menuOpciones.innerHTML = `
            <a href="iniciarSesion.html">Iniciar Sesión</a>
            <a href="registrarse.html">Registrarse</a>
        `;
        iconoUsuario.src = "img/usuario.png";  // Icono predeterminado
    }

    // Evento para mostrar/ocultar el menú desplegable al hacer clic en el icono de usuario
    iconoUsuario.addEventListener("click", function(event) {
        event.stopPropagation();
        menuOpciones.style.display = (menuOpciones.style.display === "block") ? "none" : "block";
    });

    // Cierra el menú si se hace clic fuera de él
    window.addEventListener("click", function(event) {
        if (!menuOpciones.contains(event.target) && !iconoUsuario.contains(event.target)) {
            menuOpciones.style.display = "none";
        }
    });
});
