<?php
  if ($_POST["bname"] === "oskar" && $_POST["pwd"] === "magicmirror") {
    session_start();
    $_SESSION["bname"] = "oskar";
    header("Location: addTask");
  }else {
    header("Location: https://www.google.de/search?q=spast");
  }
?>
