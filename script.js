//Recupero gli elementi HTML (bottone e immagine) tramite getElementById
//prendo l'immagine della lampadina usando il suo ID
const img = document.getElementById  ('lampadina')  
// stessa cosa con il bottone dalla pagina usando il suo ID
const bottone = document.getElementById ('interrutore')



 bottone.addEventListener('click', function () {
  
  // Se l'immagine attuale è quella della lampadina SPENTA
  if (img.src.includes('white_lamp')) {
    
    // Cambio l'immagine con quella della lampadina ACCESA
    img.src= 'img/yellow_lamp.png' ;

    // Cambio il testo del bottone in "Spegni"
    bottone.textContent = 'Spegni';

  
} else {
    // se è accesa... Cambio l'immagine con quella della lampadina SPENTA
    img.src = 'img/white_lamp.png';

    // Cambio il testo del bottone 
    bottone.textContent = 'Accendi';
  }

});