window.addEventListener('load', function() {
    const h1 = document.querySelector('main h1');
    const h2 = document.querySelector('main h2');
    const button = document.querySelector('.button');

    setTimeout(() => {
        h1.classList.add('loaded');
    }, 500);

    setTimeout(() => {
        h2.classList.add('loaded');
    }, 1500);

    setTimeout(() => {
        button.classList.add('loaded');
    }, 2500); // Ora appare DOPO h2
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button'); 
    if (button) {
        button.addEventListener('mouseover', () => button.classList.add('mouseon'));
        button.addEventListener('mouseout', () => button.classList.remove('mouseon')); // Ora torna al colore originale
    }
});

let page = 1; 
let loading = false;

function loadMoreContent () {
   if(loading) return; 
   loading = true;

   document.getElementById('loading').style.display = 'block'; // Mostra il caricamento

   fetch('../pages/page1.html')
   .then(response => {
        if(!response.ok) throw new Error ('Errore nella richeista di caricamento della pagina successiva');
        return response.text();
   }
   ).then(data => {
    let div = document.createElement('div'); 
    div.classList.add('page'); 
    
   })
}; 