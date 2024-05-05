document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.carrusel img');
    let indiceActual = 0;

    setInterval(() => {
        const indiceAnterior = indiceActual;
        indiceActual = (indiceActual + 1) % imagenes.length; // Calcular el siguiente índice

        imagenes[indiceAnterior].style.opacity = '0'; // Desvanecer la imagen actual
        imagenes[indiceActual].style.opacity = '1'; // Mostrar la siguiente imagen
    }, 10000); // Cambia imagen cada 10 segundos (actualizado a 10000 milisegundos)

    const btnAbrirRegistro = document.querySelector('#abrir-registro');
    const btnCerrarRegistro = document.querySelector('#cerrar-registro');
    const modalRegistro = document.querySelector('#modal-registrar');
    const btnAbrirLogin = document.querySelector('#abrir-login');
    const btnCerrarLogin = document.querySelector('#cerrar-login');
    const modalLogin = document.querySelector('#modal-login');

    // Evento para abrir el diálogo de registro
    btnAbrirRegistro.addEventListener('click', () => {
        modalRegistro.showModal();
    });

    // Evento para cerrar el diálogo de registro
    btnCerrarRegistro.addEventListener('click', () => {
        modalRegistro.close();
    });

    // Evento para abrir el diálogo de inicio de sesión
    btnAbrirLogin.addEventListener('click', () => {
        modalLogin.showModal();
    });

    // Evento para cerrar el diálogo de inicio de sesión
    btnCerrarLogin.addEventListener('click', () => {
        modalLogin.close();
    });
});