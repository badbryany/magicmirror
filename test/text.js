var text = ['Hey Du!', 'Wie geht\'s dir?', 'Also ich würde für den MagicMirror Stimmen!', 'Der MagicMirror ist schon das beste Exponat...'];

var index = 0;

function changeText() {
  document.getElementById("text").innerText = text[index];
  index = (index + 1) % 4;
}

var interval = window.setInterval(changeText, 2000);

window.onunload = function () {
  window.clearInterval(interval);
}
