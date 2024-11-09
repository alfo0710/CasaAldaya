document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const newPassword = document.getElementById('newPassword').value;

    // Crear un objeto con los datos del usuario
    const user = {
        nombre: nombre,
        email: email,
        fechaNacimiento: fechaNacimiento,
        password: newPassword
    };

    // Guardar el objeto en localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Confirmar que el registro fue exitoso
    alert('Usuario registrado con éxito');
    
    // Redirigir a la página de inicio de sesión
    window.location.href = 'iniciarSesion.html';
});
