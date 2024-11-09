// Registro de usuario
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;

    const user = {
        firstName,
        lastName,
        email,
        password,
        gender
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert('Usuario registrado exitosamente. Ahora puedes iniciar sesión.');
    window.location.href = 'iniciarSesion.html';
});

// Inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const userData = JSON.parse(localStorage.getItem(email));

    if (userData && userData.password === password) {
        alert(`Bienvenido, ${userData.firstName}!`);
        // Almacenar nombre de usuario en sesión (o localStorage)
        localStorage.setItem('loggedInUser', userData.firstName);
        window.location.href = 'welcome.html'; // Redirigir a una página de bienvenida o dashboard
    } else {
        alert('Correo o contraseña incorrectos. Inténtalo de nuevo.');
    }
});

// Menú de navegación con nombre de usuario
window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const menu = document.querySelector('.menu');
        menu.innerHTML += `<div class="menu-usuario">Hola, ${loggedInUser} <a href="#" id="logout">Cerrar Sesión</a></div>`;
        
        // Cerrar sesión
        document.getElementById('logout').addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            window.location.reload(); // Recargar la página
        });
    }
}
