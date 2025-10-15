// Animación del logo al cargar
window.addEventListener('load', () => {
    const logo = document.getElementById('logo');
    logo.style.transition = "transform 1s";
    logo.style.transform = "scale(1.2)";
    setTimeout(() => {
        logo.style.transform = "scale(1)";
    }, 1000);
});

// Funcionalidad básica del formulario
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue
    alert(`Gracias ${form.nombre.value}, tu mensaje ha sido enviado.`);
    form.reset(); // Limpia los campos
});
