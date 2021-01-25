var googlenews = {};
var vitznews = {};
function getrss() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      googlenews = JSON.parse(this.responseText);
      var z = 3;
      showNews(z);
      window.setInterval(function() {
        z = (z + 3) %  googlenews["channel"]["item"].length;
        showNews(z);
     },40000);

    }
  };
  xhttp.open("POST", "rss.php", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.send("rss=google");
}

function vitzrss() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      vitznews = JSON.parse(this.responseText);
      var z = 3;
      showNews(z);
      window.setInterval(function() {
        z = (z + 3) %  googlenews["channel"]["item"].length;
        showNews(z);
     },40000);

    }
  };
  xhttp.open("POST", "rss.php", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.send("rss=vitz");
}

$(document).ready(function() {
  getrss();
  //vitzrss();
});
