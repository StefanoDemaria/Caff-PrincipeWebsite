window.addEventListener('load', function() {
    // Seleziona gli h1 e h2 dentro <main>
    const h1 = document.querySelector('main h1');
    const h2 = document.querySelector('main h2');
    const button = document.querySelector('.button');

    // Aggiunge la classe .loaded dopo il caricamento della pagina
    setTimeout(() => {
        h1.classList.add('loaded');
    }, 500); // Appare dopo mezzo secondo

    setTimeout(() => {
        h2.classList.add('loaded');
    }, 1500); // Appare dopo 1.5 secondi

    setTimeout(() =>{
        button.classList.add('loaded');
    }, 2000);
});

function changeButton(){
    let button = document.querySelector('.button'); 

    button.addEventListener('mousemove', () =>{
      button.classList.add('muoseon');
    });

    button.addEventListener('mouseleave', () => {
       button.classList.remove('mouseon');
    })

}
 changeButton(); 