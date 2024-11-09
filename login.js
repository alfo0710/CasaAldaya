document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los datos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Recuperar el usuario registrado desde localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Verificar si el correo y la contraseña coinciden
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        // Si coinciden, iniciar sesión correctamente
        alert('Inicio de sesión exitoso');
        window.location.href = 'index.html'; // Redirigir al inicio
    } else {
        // Si no coinciden, mostrar un mensaje de error
        alert('Correo electrónico o contraseña incorrectos');
    }
});
