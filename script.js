// RESEÑAS

// Función para cargar reseñas guardadas en localStorage
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const reviewsList = document.getElementById('reviews');
    reviewsList.innerHTML = ''; // Limpiar la lista antes de cargar

    reviews.forEach(function(review) {
        const reviewItem = document.createElement('li');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `<strong>${review.username}</strong>: ${review.text}`;
        reviewsList.appendChild(reviewItem);
    });
}

// Función para agregar nueva reseña
function addReview(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const username = document.getElementById('username').value;
    const reviewText = document.getElementById('reviewText').value;

    // Obtener reseñas existentes en localStorage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Agregar la nueva reseña al array
    reviews.push({ username: username, text: reviewText });

    // Guardar el array actualizado en localStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Volver a cargar las reseñas para que aparezca la nueva
    loadReviews();

    // Limpiar los campos del formulario
    document.getElementById('username').value = '';
    document.getElementById('reviewText').value = '';
}

// Agregar evento al formulario para enviar reseña
document.getElementById('reviewForm').addEventListener('submit', addReview);

// Cargar reseñas al cargar la página
window.onload = loadReviews;
