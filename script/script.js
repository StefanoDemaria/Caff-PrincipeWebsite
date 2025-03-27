

function changeButton() {
    let button = document.querySelector('.submit'); // Prende il bottone con la classe 'submit'
    let form = document.getElementById('reservationForm');

    if (button) { // Controlla che il bottone esista
        button.addEventListener('click', function(event){
            event.preventDefault(); // Previene l'invio del form per testare il cambio di colore

            // Cambia i colori
            button.style.backgroundColor = 'white';
            button.style.color = 'black';

            // Aggiunge l'animazione di "flash"
            button.classList.add('clicked');

            // Rimuove la classe dopo l'animazione per poterla riapplicare in seguito
            setTimeout(() => {
                button.classList.remove('clicked');
                button.style.backgroundColor = 'transparent';
                button.style.color='white'; 
                FormData.reset()
            }, 1000);
        });
    }
}

changeButton();

functio

