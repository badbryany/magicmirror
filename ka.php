<?php
  include "../umfragentool/global/connect_to_database.php";

  function randomPassword() {
    $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    $pass = array(); //remember to declare $pass as an array
    $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
    for ($i = 0; $i < 8; $i++) {
      $n = rand(0, $alphaLength);
      $pass[] = $alphabet[$n];
    }
    return implode($pass); //turn the array into a string
  }

  for ($i=0; $i < 50; $i++) {
    $raum = "VitzMesse";
    $sql = "INSERT INTO Benutzer_Raeume
    (schueler, raum)
    VALUES
    (?, ?);";

    $statement = $mysqli->prepare($sql);
    $statement->bind_param('ss', $i, $raum);
    $statement->execute();
    echo $mysqli->error;
  }
?>
