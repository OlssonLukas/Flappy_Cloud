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

  else if (button?.className === 'signout-button') {
    location.reload();
  }
});

document.body.addEventListener('click', async (e) => {

  let button = e.target.closest('input');

  if (button?.id === 'login-form-submit') {
    e.preventDefault();
    const username = document.querySelector('#login-form').username.value;
    const password = document.querySelector('#login-form').password.value;

    let requestBody = { "username": username, "password": password }
    let reply;

    try {
      reply = await (await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      })).json();
    } catch (ignore) { }

    if (reply) {
      user = username.toUpperCase();
      singedInScreen(user);
      signedin = true;

    } else {
      document.querySelector('#errormessage-in').innerHTML = 'Incorrect credentials'
      document.querySelector('#login-form').password.value = '';
    }

  } else if (button?.id === 'signup-form-submit') {
    e.preventDefault();
    const username = document.querySelector('#signup-form').username.value;
    const password = document.querySelector('#signup-form').password.value;

    let requestBody = { "username": username, "password": password }
    let reply;

    try {
      reply = await (await fetch('/api/adduser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      })).json();
    } catch (ignore) { reply = false }

    if (reply?.username) {
      user = username.toUpperCase();
      singedInScreen(user);
      signedin = true;

    } else {
      document.querySelector('#errormessage-up').innerHTML = 'This username already exists'
      document.querySelector('#signup-form').password.value = '';
    }

  }
});


async function singedInScreen(username) {
  const userMetrics = await getUserMetrics(username.toLowerCase());
  let html = '';
  html += ` <div class="menu">
      <h1>Flappy Cloud</h1>
      <div class="signin">
          <p>Captain ${username}</p>
          <button class="signout-button">Sign out</button>
      </div>
    </div>

    <div class="wrapper">

      <div class="statistics">
        <div class="leaderboard">
          <h2>Your top scores</h2>
          <ul>`
  if (userMetrics.scores.length > 10) userMetrics.scores.length = 10
  for (let score of userMetrics.scores) {
    html += `<li>${username}: ${score}</li>`
  }
  html += `
          </ul>
        </div>
        <div class="totalFlaps">
          <h2>YOUR LONGEST PLAYTIME: </h2>
          <h2>${userMetrics.longestPlaytime}s</h2>
        </div>
      </div>
      <div class="start-game">
        <img src="./resources/birdScout.gif" alt="">
        <button class="play-button">Start flying</button>
      </div>
    </div>
`;

  document.querySelector('.content').innerHTML = html;
}

async function getUserMetrics(username) {
  let reply;
  try {
    reply = await (await fetch(`/api/metrics/usermetrics/${username}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })).json();
  } catch (ignore) { }

  let userMetrics = { scores: [], longestPlaytime: 0 };

  const scores = reply.map(object => {
    return object.score;
  });
  scores.sort();
  userMetrics.scores = scores;

  const playtimes = reply.map(object => {
    return parseInt(object.playtime);
  });

  userMetrics.longestPlaytime = Math.max(...playtimes);

  return userMetrics;
}