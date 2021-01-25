var i = 0, howManyTimes = 1, j = 0;

function showNews(bis) {
  var alle_news = googlenews["channel"]["item"].length;
  var von = bis - 3;

  document.getElementById("new0").innerHTML = "";
  document.getElementById("new1").innerHTML = "";
  document.getElementById("new2").innerHTML = "";

  var titel = [];//titel array

  for (var y = von; y < bis; y++) {
    if (googlenews["channel"]["item"][y] === undefined) {
      titel.push("");//wenn nicht da dann nix
      getrss();
    }else {
      var array = googlenews["channel"]["item"][y]["title"].split("-");
      if (array.length >= 3) {
        titel.push(array);//titel in array schreiben
      }else {
        titel.push(array[0]);//titel in array schreiben
      }
    }
  }//end of for
//elemente mit text befüllen
  document.getElementById("new0").innerHTML = titel[0];
  document.getElementById("new1").innerHTML = titel[1];
  document.getElementById("new2").innerHTML = titel[2];
}//end of showNews()
