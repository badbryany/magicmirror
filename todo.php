<?php
  if ($_POST["todo"] === "hallo") {
    $todo = json_decode(file_get_contents("/tmp/todo.txt"), true);
    for ($i=0; $i < sizeof($todo); $i++) {
      echo "<li>" . $todo[$i] . "</li>";
    }
  }
?>
