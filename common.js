let balance = parseInt(localStorage.getItem('casinoBalance'));
if (isNaN(balance)) balance = 1000;
const $ = id => document.getElementById(id);

function render() {
  localStorage.setItem('casinoBalance', balance);
  $('balance').textContent = balance;
  $('reset').style.display = balance < 10 ? 'block' : 'none';
}

function say(text, cls) {
  $('message').textContent = text;
  $('message').className = 'message ' + (cls || '');
}

function getBet() {
  const b = Math.floor(parseInt($('bet').value));
  if (!b || b < 10) { say('Минимальная ставка 10', 'lose'); return 0; }
  if (b > balance) { say('Не хватает фишек', 'lose'); return 0; }
  return b;
}

$('reset').onclick = () => { balance = 1000; render(); say('Выдано 1000 фишек'); };
render();