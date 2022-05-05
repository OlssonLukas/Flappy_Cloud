let signedin = false;
let user = '';

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
    if (document.querySelector('.dropdown-content-in').style.display === 'block') {
      document.querySelector('.dropdown-content-in').style.display = 'none';
    } else {
      document.querySelector('.dropdown-content-in').style.display = 'block';
    }
  }

  else if (button?.className === 'signup-button') {
    document.querySelector('.dropdown-content-in').style.display = 'none';
    if (document.querySelector('.dropdown-content-up').style.display === 'block') {
      document.querySelector('.dropdown-content-up').style.display = 'none';
    } else {
      document.querySelector('.dropdown-content-up').style.display = 'block';
    }
  }
});

document.body.addEventListener('click', (e) => {

  let button = e.target.closest('input');

  if (button?.id === 'login-form-submit') {
    e.preventDefault();
    const username = document.querySelector('#login-form').username.value;
    const password = document.querySelector('#login-form').password.value;

    //make call to see if login is correct
    if (username === 'user' && password === 'pass') {

      user = username.toUpperCase();

      singedInScreen(user);
      signedin = true;
    }

  } else if (button?.id === 'signup-form-submit') {
    e.preventDefault();
    const username = document.querySelector('#signup-form').username.value;
    const password = document.querySelector('#signup-form').password.value;

    //make call to create user
    if (username === 'user' && password === 'pass') {
      user = username.toUpperCase();
      singedInScreen(user);
      signedin = true;
    }

  }
});


function singedInScreen(username) {
  document.querySelector('.content').innerHTML = ` <div class="menu">
      <h1>Flappy Cloud</h1>
      <div class="signin">
          <p>Captain ${username}</p>
          <button>Sign out</button>
      </div>
    </div>

    <div class="wrapper">

      <div class="statistics">
        <div class="leaderboard">
          <h2>Your top scores</h2>
          <ul>
            <li>${username}: 56</li>
            <li>${username}: 32</li>
            <li>${username}: 23</li>
            <li>${username}: 18</li>
            <li>${username}: 8</li>
            <li>${username}: 5</li>
            <li>${username}: 2</li>
          </ul>
        </div>
        <div class="totalFlaps">
          <h2>YOUR LONGEST PLAYTIME: </h2>
          <h2> 600 s</h2>
        </div>
      </div>
      <div class="start-game">
        <img src="./resources/birdScout.gif" alt="">
        <button class="play-button">Start flying</button>
      </div>
    </div>
`;
}