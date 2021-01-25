document.getElementById("button").addEventListener("click", function(){
  var aufgabe = document.getElementById("aufgabe").value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      document.getElementById("aufgabe").value = "";
    }
  };
  xhttp.open("POST", "todo.php", true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.send("aufgabe=" + aufgabe);
});
