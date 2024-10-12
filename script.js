// Seleccionamos los botones
const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');

// Variable para controlar el tamaño del botón SI
let buttonSize = 16; // Tamaño inicial en píxeles

// Función que aumenta el tamaño del botón SI cuando se presiona NO
noButton.addEventListener('click', () => {
    buttonSize += 10; // Aumenta el tamaño del texto del botón SI
    yesButton.style.fontSize = `${buttonSize}px`;

    // Si el botón SI ocupa toda la pantalla, deshabilitar el botón NO
    if (buttonSize >= window.innerWidth / 2) {
        noButton.disabled = true;
    }
});

// Función para mostrar el mensaje cuando se presiona el botón SI
yesButton.addEventListener('click', () => {
    alert('Yeiiiii, pero ahora yo no se si presionaste este botón...por fa hablemos...😔');
});
