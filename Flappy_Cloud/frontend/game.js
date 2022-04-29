let move_speed = 3;
let gravity = 0.35;

let bird = document.querySelector('.bird');
let bird_props = bird.getBoundingClientRect();
let background = document.querySelector('body').getBoundingClientRect();
let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_title = document.querySelector('.score_title');

let game_state = 'Start';

document.addEventListener('click', (e) => {

  if (game_state !== 'Play') {

    console.log(game_state);
    document.querySelectorAll('.pipe_sprite').forEach((e) => {
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

    let pipe_sprite = document.querySelectorAll('.pipe_sprite');
    pipe_sprite.forEach((element) => {

      let pipe_sprite_props = element.getBoundingClientRect();
      bird_props = bird.getBoundingClientRect();

      if (pipe_sprite_props.right <= 0) {
        element.remove();

      } else {

        if (
          bird_props.left + 70 < pipe_sprite_props.left +
          pipe_sprite_props.width &&
          bird_props.left - 90 +
          bird_props.width > pipe_sprite_props.left &&
          bird_props.top + 50 < pipe_sprite_props.top +
          pipe_sprite_props.height &&
          bird_props.top - 40 +
          bird_props.height > pipe_sprite_props.top
        ) {

          gameOver()

        } else {

          if (
            pipe_sprite_props.right < bird_props.left + 50 &&
            pipe_sprite_props.right +
            move_speed >= bird_props.left + 50 &&
            element.increase_score == '1'
          ) {
            score_val.innerHTML = +score_val.innerHTML + 1;

            if (score_val % 3 === 0) {
              document.body.style.boxShadow = 'inset 400px 400px 400px 400px rgba(0, 0, 0, .5)';
            }
          }
          element.style.left =
            pipe_sprite_props.left - move_speed + 'px';
        }
      }
    });

    requestAnimationFrame(move);
  }
  requestAnimationFrame(move);

  let bird_dy = 0;

  function apply_gravity() {
    bird_dy = bird_dy + gravity;

    document.addEventListener('click', (e) => {
      bird_dy = -7;

    })
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') bird_dy = -7;

    })

    if (bird_props.top <= 0 ||
      bird_props.bottom >= background.bottom) {
      gameOver();
    }

    bird.style.top = bird_props.top + bird_dy + 'px';
    bird_props = bird.getBoundingClientRect();

    requestAnimationFrame(apply_gravity);
  }
  requestAnimationFrame(apply_gravity);

  let pipe_seperation = 0;

  let pipe_gap = 20;

  function create_pipe() {

    if (pipe_seperation > 120) {
      pipe_seperation = 0

      let pipe_posi = Math.floor(Math.random() * 43) + 8;
      let pipe_sprite_inv = document.createElement('img');
      pipe_sprite_inv.src = './resources/cloud.png';
      pipe_sprite_inv.className = 'pipe_sprite';
      pipe_sprite_inv.style.top = pipe_posi - 50 + 'vh';
      pipe_sprite_inv.style.left = '100vw';

      document.body.appendChild(pipe_sprite_inv);
      let pipe_sprite = document.createElement('img');
      pipe_sprite.src = './resources/cloud.png';
      pipe_sprite.className = 'pipe_sprite';
      pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
      pipe_sprite.style.left = '100vw';
      pipe_sprite.increase_score = '1';

      document.body.appendChild(pipe_sprite);
    }
    pipe_seperation++;
    requestAnimationFrame(create_pipe);
  }
  requestAnimationFrame(create_pipe)
}


function gameOver() {
  document.querySelectorAll('.pipe_sprite').forEach((e) => {
    e.remove();
  });

  message.innerHTML = 'You hit something..<br><p>Your journey is over</p>';

  setInterval(() => {
    location.replace('http://127.0.0.1:5500/Flappy_Cloud/frontend/index.html');
  }, 2000);

}
