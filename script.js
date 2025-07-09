//Recupero gli elementi HTML (bottone e immagine) tramite getElementById
//prendo l'immagine della lampadina usando il suo ID
const img = document.getElementById  ('lampadina')  
// stessa cosa con il bottone dalla pagina usando il suo ID
const bottone = document.getElementById ('interrutore')



 bottone.addEventListener('click', function () {
  
  // Se l'immagine attuale è quella della lampadina SPENTA
  if (img.src.includes('spenta')) {
    
    // Cambia l'immagine con quella della lampadina ACCESA
    img.src= 'yellow_lamp.png' ;

    // Cambia il testo del bottone in "Spegni"
    bottone.textContent = 'Spegni';

  }
}