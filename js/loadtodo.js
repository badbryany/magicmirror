function loadtodo(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("todo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "todo.php", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.send("todo=hallo");
}

setInterval(loadtodo, 10000);
