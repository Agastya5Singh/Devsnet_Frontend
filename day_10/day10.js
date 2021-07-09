let clickedCard = null;
let preventClick = false;
let combosFound = 0;

const image = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H'
];

const cards = [...document.querySelectorAll('.card')];
for (let image of images) {
  const cardAIndex = parseInt(Math.random() * cards.length);
  const cardA = cards[cardAIndex];
  cards.splice(cardAIndex, 1);
  cardA.className += ` ${image}`;
  cardA.setAttribute('data-image', image);

  const cardBIndex = parseInt(Math.random() * cards.length);
  const cardB = cards[cardBIndex];
  cards.splice(cardBIndex, 1);
  cardB.className += ` ${image}`;
  cardB.setAttribute('data-image', image);
}


function onCardClicked(e) {
  const target = e.currentTarget;

  if (
    preventClick ||
    target === clickedCard ||
    target.className.includes('done')
  ) {
    return;
  }

  target.className = target.className
    .replace('image-hidden', '')
    .trim();
  target.className += ' done';

  if (!clickedCard) {
    
    clickedCard = target;
  } else if (clickedCard) {
    
    if (
      clickedCard.getAttribute('data-image') !==
      target.getAttribute('data-image')
    ) {
      preventClick = true;
      setTimeout(() => {
        clickedCard.className =
          clickedCard.className.replace('done', '').trim() +
          ' image-hidden';
        target.className =
          target.className.replace('done', '').trim() +
          ' image-hidden';
        clickedCard = null;
        preventClick = false;
      }, 500);
    } else {
      combosFound++;
      clickedCard = null;
      if (combosFound === 8) {
        alert('YOU WIN');
      }
    }
  }
}