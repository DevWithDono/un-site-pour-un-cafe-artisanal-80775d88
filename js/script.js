// JavaScript pour l'interactivité du site
// Exemple : Scroll vers la section menu lors du clic sur le bouton
document.getElementById('btn-menu').addEventListener('click', function() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

// Ajout d'autres fonctionnalités si nécessaire
console.log('Site du café artisanal chargé avec succès !');