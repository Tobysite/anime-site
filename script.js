script.js

const cards = document.querySelectorAll('.category-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const descriptionParagraph = card.querySelector('.description-box p');
    
    if (card.classList.contains('selected-card')) {
      card.classList.remove('selected-card');
      descriptionParagraph.style.color = '#c9d1d9';
    } else {
      card.classList.add('selected-card');
      descriptionParagraph.style.color = '#ff6400';
      console.log('Anime category selected!');
    }
  });
});