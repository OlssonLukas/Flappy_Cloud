let move_speed = 3;
let gravity = 0.25;
const fps = 80;

let bird;
let bird_props;
let background;
let score_val;
let message;
let score_title;

let game_state = 'Start';

document.body.addEventListener('click', (e) => {

  let div = e.target.closest('div');

  if (div?.className !== 'game') return;


  bird = document.querySelector('.bird');
  bird_props = bird.getBoundingClientRect();
  background = document.querySelector('body').getBoundingClientRect();
  score_val = document.querySelector('.score_val');
  message = document.querySelector('.message');
  score_title = document.querySelector('.score_title');

  if (game_state !== 'Play') {

    document.querySelectorAll('.cloud').forEach((e) => {
      e.remove();
    });

    bird.style.top = '40vh';
    game_state = 'Play';
    message.innerHTML = '';
    score_title.innerHTML = 'Score : ';
    score_val.innerHTML = '0';

    play();
  }

});


function play() {
  function move() {

    if (game_state !== 'Play') return;

    let cloud = document.querySelectorAll('.cloud');
    cloud.forEach((element) => {

      let cloud_props = element.getBoundingClientRect();
      bird_props = bird.getBoundingClientRect();

      if (cloud_props.right <= 0) {
        element.remove();

      } else {

        if (
          bird_props.left + 70 < cloud_props.left +
          cloud_props.width &&
          bird_props.left - 90 +
          bird_props.width > cloud_props.left &&
          bird_props.top + 50 < cloud_props.top +
          cloud_props.height &&
          bird_props.top - 40 +
          bird_props.height > cloud_props.top
        ) {

          game_state = 'Game over'
          console.log('Hit cloud');
          gameOver();
          return;

        } else {

          if (
            cloud_props.right < bird_props.left + 50 &&
            cloud_props.right +
            move_speed >= bird_props.left + 50 &&
            element.increase_score == '1'
          ) {
            score_val.innerHTML = +score_val.innerHTML + 1;

            if (score_val % 3 === 0) {
              document.body.style.boxShadow = 'inset 400px 400px 400px 400px rgba(0, 0, 0, .5)';
            }
          }
          element.style.left =
            cloud_props.left - move_speed + 'px';
        }
      }
    });

    if (game_state === 'Play') setTimeout(() => {
      requestAnimationFrame(move);
    }, 1000 / fps);
  }
  if (game_state === 'Play') setTimeout(() => {
    requestAnimationFrame(move);
  }, 1000 / fps);

  let bird_dy = 0;

  function apply_gravity() {
    bird_dy = bird_dy + gravity;

    document.addEventListener('click', (e) => {
      bird_dy = -5;

    })
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') bird_dy = -5;

    })

    if (bird_props.top <= 0 ||
      bird_props.bottom >= background.bottom) {
      game_state = 'Game over'
      console.log('hiT bottom');
      gameOver();
      return;

    }

    bird.style.top = bird_props.top + bird_dy + 'px';
    bird_props = bird.getBoundingClientRect();

    if (game_state === 'Play') setTimeout(() => {
      requestAnimationFrame(apply_gravity);
    }, 1000 / fps);
  }
  if (game_state === 'Play') setTimeout(() => {
    requestAnimationFrame(apply_gravity);
  }, 1000 / fps);

  let pipe_seperation = 0;

  let pipe_gap = 20;

  function createCloud() {

    if (pipe_seperation > 120) {
      pipe_seperation = 0

      let cloud_pos = Math.floor(Math.random() * 43) + 8;
      let cloud_inv = document.createElement('img');
      cloud_inv.src = './resources/cloud.png';
      cloud_inv.className = 'cloud';
      cloud_inv.style.top = cloud_pos - 50 + 'vh';
      cloud_inv.style.left = '100vw';

      document.body.appendChild(cloud_inv);
      let cloud = document.createElement('img');
      cloud.src = './resources/cloud.png';
      cloud.className = 'cloud';
      cloud.style.top = cloud_pos + pipe_gap + 'vh';
      cloud.style.left = '100vw';
      cloud.increase_score = '1';

      document.body.appendChild(cloud);
    }
    pipe_seperation++;
    if (game_state === 'Play') setTimeout(() => {
      requestAnimationFrame(createCloud);
    }, 1000 / fps);
  }
  if (game_state === 'Play') setTimeout(() => {
    requestAnimationFrame(createCloud);
  }, 1000 / fps);
}


function gameOver() {
  document.querySelectorAll('.cloud').forEach((e) => {
    e.remove();
  });

  document.body.style.pointerEvents = "none";

  message.innerHTML = 'You hit something..<br><p>Your journey is over</p>';

  setTimeout(() => {
    document.body.style.pointerEvents = "all";

    if (signedin === false) {
      document.querySelector('.content').innerHTML = `    
      <div class="menu">
      <h1>Flappy Cloud</h1>
      <div class="signin">
        <div class="dropdown singin">
          <button class="signin-button">Sign in</button>
          <div class="dropdown-content-in">
            <form id="login-form">
              <input type="text" name="username" id="in-username-field" class="login-form-field" placeholder="Username">
              <p id="errormessage-in"></p>
              <input type="password" name="password" id="in-password-field" class="login-form-field"
                placeholder="Password">
              <input type="submit" value="Login" id="login-form-submit">
            </form>
          </div>
        </div>
        <div class="dropdown signup">
          <button class="signup-button">Sign up</button>
          <div class="dropdown-content-up">
            <form id="signup-form">
              <input type="text" name="username" id="up-username-field" class="signup-form-field"
                placeholder="Username">
              <p id="errormessage-up"></p>
              <input type="password" name="password" id="up-password-field" class="signup-form-field"
                placeholder="Password">
              <input type="submit" value="Signup" id="signup-form-submit">
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper">

      <div class="statistics">
        <div class="leaderboard">
          <h2>Leaderboard</h2>
          <ul>
            <li>SANDRA: 254</li>
            <li>LISA: 201</li>
            <li>ELIS: 154</li>
            <li>JONAS: 98</li>
            <li>LOPPY: 88</li>
            <li>STREIGE: 69</li>
            <li>ADAM: 52</li>
          </ul>
        </div>
        <div class="totalFlaps">
          <h2>TOTAL FLAPS IN GAME: </h2>
          <h2> 265894</h2>
        </div>
      </div>
      <div class="start-game">
        <img src="./resources/birdScout.gif" alt="">
        <button class="play-button">Start flying</button>
      </div>
    </div>


  </div>
`;
    } else {
      singedInScreen(user);
    }

    document.body.style.backgroundImage = 'url("./resources/bgstart.jpeg")'

  }, 2000);

  game_state = 'Start';
}
