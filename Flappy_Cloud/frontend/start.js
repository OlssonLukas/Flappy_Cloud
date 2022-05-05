

document.body.addEventListener('click', (e) => {

  let button = e.target.closest('button');

  if (button?.className === 'play-button') {

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

    document.body.style.backgroundImage = 'url("./resources/bgplay.jpeg")'

  }
  else if (button?.className === 'signin-button') {
    document.querySelector('.dropdown-content-up').style.display = 'none';
    console.log('CLICKED');
    if (document.querySelector('.dropdown-content-in').style.display === 'block') {
      console.log('its block');
      document.querySelector('.dropdown-content-in').style.display = 'none';
    } else {
      console.log('its hidden');
      document.querySelector('.dropdown-content-in').style.display = 'block';
    }
  }

  else if (button?.className === 'signup-button') {
    document.querySelector('.dropdown-content-in').style.display = 'none';
    console.log('CLICKED');
    if (document.querySelector('.dropdown-content-up').style.display === 'block') {
      console.log('its block');
      document.querySelector('.dropdown-content-up').style.display = 'none';
    } else {
      console.log('its hidden');
      document.querySelector('.dropdown-content-up').style.display = 'block';
    }
  }
});
