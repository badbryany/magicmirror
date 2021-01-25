function loadvp() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("vplan").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "vplan.php", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.send();
}

$(document).ready(function() {
  setInterval(loadvp, 10000);
});
