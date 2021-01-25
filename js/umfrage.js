function loadWinner() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("POST", "/umfragentool/lehrer/ergebnisse/ajax_ergebnisse.php", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.send("password=Jah2iuw9&login=true&besitzer=vitzthummesse");
}
