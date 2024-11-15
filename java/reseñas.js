document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById("reviewForm");
    const reviewList = document.getElementById("reviewList");

    // Cargar reseñas guardadas en Local Storage al cargar la página
    loadReviews();

    // Escuchar el evento de envío del formulario
    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("nameInput").value;
        const reviewText = document.getElementById("reviewInput").value;
        const rating = document.querySelector('input[name="rating"]:checked')?.value;

        // Validar que todos los campos estén llenos
        if (!name || !reviewText || !rating) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Crear un objeto de reseña
        const review = {
            name: name,
            reviewText: reviewText,
            rating: rating,
            date: new Date().toLocaleDateString() // Guardar la fecha
        };

        // Guardar la reseña en Local Storage
        saveReview(review);

        // Limpiar el formulario
        reviewForm.reset();

        // Volver a cargar las reseñas para mostrar la nueva
        loadReviews();
    });

    // Función para guardar la reseña en Local Storage
    function saveReview(review) {
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push(review);
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }

    // Función para cargar y mostrar las reseñas en la página
    function loadReviews() {
        reviewList.innerHTML = ""; // Limpiar la lista de reseñas
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        reviews.forEach(review => {
            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review-item");
            reviewElement.innerHTML = `
                <h3>${review.name}</h3>
                <p>${review.reviewText}</p>
                <p>${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</p>
                <small>${review.date}</small>
                <hr>
            `;
            reviewList.appendChild(reviewElement);
        });
    }
});


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
