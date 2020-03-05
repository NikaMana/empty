const record = document.getElementById('record');
const shot = document.getElementById('shot');
const hit = document.getElementById('hit');
const dead = document.getElementById('dead');
const enemy = document.getElementById('enemy');
const again = document.getElementById('again');

const play = {
  record: 0,
  shot: 0,
  hit: 0,
  dead: 0
};

const show = {
  hit: function() {

  },
  miss: function() {

  },
  dead: function() {

  },
};

const fire = (event) => {
  const target = event.target
};

const init = () => {
  enemy.addEventListener('click', fire);
};

init();