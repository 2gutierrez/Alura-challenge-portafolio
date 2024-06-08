// JavaScript code for form validation or any interactivity

// Form validation example
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    if (name === '' || email === '' || asunto === '' || mensaje === '') {
        alert('Todos los campos son obligatorios');
    } else {
        // Perform form submission (e.g., send data to server or display a success message)
        alert('Mensaje enviado correctamente');
        this.reset();
    }
});
