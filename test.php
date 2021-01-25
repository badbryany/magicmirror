<?php
  header("Content-Type: application/json");
  header("Authorization: Bearer ya29.a0AfH6SMA0aJG--HQ9Rkm_1dLW4eGzk_O5UJYBut1AwSuKQAbZu82gWMBT6q8JLGtpklxMhEln_urhW2Xffq3C75_a2jVYXBsCvgx7ocMC5tvk0liUIppK9DkIly7RzZDPrTm6vIZKwJ6IXmasd3_H-YbvHz0GIDUyi5c");
  $xml = simplexml_load_file('https://www.googleapis.com/fitness/v1/users/me/dataSources/dataset:duration');
  echo json_encode($xml);
?>
