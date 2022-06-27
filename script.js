const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const btnEl = document.querySelector('.btn');
const circleEl = document.querySelector('.circle');
const countDownEl = document.getElementById('countdown');
const btn1El = document.querySelector('.btn1');
var x;
const startingMinutes = 0.25;
let time = startingMinutes * 60;
var y;

// FUNCTION FOR MAKING THE CIRCLES APPEAR
function show() {
  position();
  circleEl.classList.remove('hidden');

  setTimeout(() => circleEl.classList.add('hidden'), 1000);
}

// FUNCTION FOR MAKING THE CIRCLES APEAR AGAIN AND AGAIN
function krug() {
  circleEl.classList.add('hidden');
  x = setInterval(show, 1100);

  btnEl.setAttribute('disabled', 'disabled');
}
// FUNCTION FOR CHANGING THE POSITIONS AND SIZE OF THE CIRCLES EVRYTIME THEY APPEAR
function position() {
  circleEl.style.top = Math.trunc(Math.random() * 649) + 1 + `px`;
  circleEl.style.left = Math.trunc(Math.random() * 1649) + 1 + `px`;
  //   circleEl.style.height = Math.trunc(Math.random() * 100) + 1 + `px`;
  //   circleEl.style.width = circleEl.style.height;
}
// FUNCTION FOR THE COUNTDOWN
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countDownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  time = time < 0 ? 0 : time;
  // WHEN THE TIME GOES TO ZERO AND THE GAME STOPS
  if (minutes == 0 && seconds == 0) {
    clearInterval(x);
    if (scoreEl.textContent > highscoreEl.textContent) {
      highscoreEl.textContent = scoreEl.textContent;
    }
    btn1El.classList.remove('hidden');
    clearInterval(y);
    time = startingMinutes * 60;
    btn1El.removeAttribute('disabled');
  }
}

scoreEl.textContent = 0;
highscoreEl.textContent = 0;
// WHEN YOU PRESS THE CIRCLES
circleEl.addEventListener('click', function () {
  scoreEl.textContent++;
});
// WHEN U PRESS START
btnEl.addEventListener('click', function () {
  krug();
  console.log('Darko');
  y = setInterval(updateCountdown, 1000);
});
// WHEN U PRESS PLAY AGAIN
btn1El.addEventListener('click', function () {
  scoreEl.textContent = 0;
  krug();
  y = setInterval(updateCountdown, 1000);
  btn1El.setAttribute('disabled', 'disabled');
});
