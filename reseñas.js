document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const nameInput = document.getElementById('nameInput');
    const reviewInput = document.getElementById('reviewInput');
    const reviewList = document.getElementById('reviewList');

    const loadReviews = () => {
        const storedReviews = localStorage.getItem('reviews');
        if (storedReviews) {
            JSON.parse(storedReviews).forEach(review => addReviewToDOM(review));
        }
    };

    const addReviewToDOM = (review) => {
        const div = document.createElement('div');
        div.classList.add('review-item');
        div.innerHTML = `
            <h3>${review.name}</h3>
            <p>${review.text}</p>
            <div class="stars">${'★'.repeat(review.rating)}</div>
        `;
        reviewList.appendChild(div);
    };

    const saveReview = (review) => {
        const storedReviews = localStorage.getItem('reviews');
        const reviews = storedReviews ? JSON.parse(storedReviews) : [];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    };

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const review = reviewInput.value.trim();
        const rating = document.querySelector('input[name="rating"]:checked')?.value;
        if (name && review && rating) {
            const reviewObj = { name, text: review, rating: parseInt(rating) };
            addReviewToDOM(reviewObj);
            saveReview(reviewObj);
            nameInput.value = '';
            reviewInput.value = '';
            document.querySelector('input[name="rating"]:checked').checked = false;
        }
    });

    loadReviews();
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
