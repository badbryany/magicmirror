<?php
  session_start();
  if(isset($_SESSION["bname"])){}else {header("Location: https://www.google.com/search?q=spast");}
?>

<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ToDo</title>
    <script src="todo.js"></script>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <input type="text" id="aufgabe" placeholder="Aufgabe">
    <input type="button" value="Aufgeben" id="button">

    <form action="todo.php" method="POST">
      <ul>
        <?php
        $todo = json_decode(file_get_contents("/tmp/todo.txt"), true);
        for ($i=0; $i < sizeof($todo); $i++) {
          echo "<li>" . $todo[$i] . "</li><input type='submit' name='delete' value='" . $i . "'></input>";
        }
        ?>
      </ul>
    </form>

    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    <script src="todo.js"></script>
  </body>
</html>
