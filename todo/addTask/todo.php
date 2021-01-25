<?php
  if ($_POST["aufgabe"]) {

    $data = json_decode(file_get_contents("/tmp/todo.txt"), true);
    array_push($data, $_POST["aufgabe"]);
    $file = fopen("/tmp/todo.txt", "w");
    fwrite($file, json_encode($data));
    fclose($file);

    echo "Erfolgreich eingetragen...";
  }

  if (isset($_POST["delete"])) {
    $data = json_decode(file_get_contents("/tmp/todo.txt"), true);
    unset($data[$_POST["delete"]]);
    $file = fopen("/tmp/todo.txt", "w");
    fwrite($file, json_encode($data));
    fclose($file);

    echo "jo gelöscht";
  }
?>
