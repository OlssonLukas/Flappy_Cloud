

document.body.addEventListener('click', (e) => {

  let button = e.target.closest('button');

  if (button?.className !== 'play-button') return;

  document.querySelector('.content').innerHTML = `<div class="game"><img class="bird" src="./resources/bird.gif" alt="bird-img">
  <div class="message">
    Click to start your flight
  </div>
  <div class="score">
    <span class="score_title"></span>
    <span class="score_val"></span>
  </div>
  </div>
`;
});
