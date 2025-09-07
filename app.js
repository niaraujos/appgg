const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// desenha a letra tracejada
ctx.font = '200px Arial';
ctx.strokeStyle = '#000';
ctx.setLineDash([15, 15]); // traços
ctx.lineWidth = 4;
ctx.strokeText('G', 120, 250); //alinhamento da letra

// habilita desenho por cima
let drawing = false;

function startDraw(e) {
  drawing = true;
  draw(e);
}

function endDraw() {
  drawing = false;
  ctx.beginPath();
}

function draw(e) {
  if (!drawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
  const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

  ctx.setLineDash([]); // linha contínua para o usuário
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'red';

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

// mouse
canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mouseup', endDraw);
canvas.addEventListener('mousemove', draw);

// touch (mobile)
canvas.addEventListener('touchstart', startDraw);
canvas.addEventListener('touchend', endDraw);
canvas.addEventListener('touchmove', draw);
