var text = ['Hey Du!', 'Wie geht\'s dir?', 'Also ich würde für den MagicMirror Stimmen!', 'Der MagicMirror ist schon das beste Exponat...','Spieglein Spieglein an der Wand was ist das schönste Exponat im ganzen Land?'];

var index = 0;

function changeText() {
  document.getElementById("text").innerText = text[index];
  index = (index + 1) % text.length;
}

var interval = window.setInterval(changeText, 10000);

window.onunload = function () {
  window.clearInterval(interval);
}
