<?php
  if ($_POST["rss"] === "google") {
    $xml = simplexml_load_file('https://news.google.com/rss?hl=de&gl=DE&ceid=DE:de');//https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en
    header("Content-Type: application/json");
    echo json_encode($xml);
  }

  if ($_POST["rss"] === "vitz") {
    $xml = simplexml_load_file('https://www.vitzthum-gymnasium.de/feed/');
    header("Content-Type: application/json");
    echo json_encode($xml);
  }
?>
