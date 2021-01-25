<?php
  if (!isset($_SERVER['PHP_AUTH_USER'])) {
    header('WWW-Authenticate: Basic realm="Bitte Passwort für den Vitzplan eingeben"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Du darft das nicht! Sonst krieg ich ärger mit Frau Göllner!';
    exit;
  }

  function updateDay(){
    $day = strftime("%d");

    switch (strftime("%u")) {
      case '5':
        if (strftime("%H") > 12) {
          $datetime = new DateTime();
          $datetime->modify('+3 day');
          $day = $datetime->format('d');
        }
      break;
      case '6':
        $datetime = new DateTime();
        $datetime->modify('+2 day');
        $day = $datetime->format('d');
      break;
      case '7':
        $datetime = new DateTime();
        $datetime->modify('+1 day');
        $day = $datetime->format('d');
      break;
      default:
        if (strftime("%H") > 12) {
          $datetime = new DateTime();
          $datetime->modify('+1 day');
          $day = $datetime->format('d');
        }
      break;
    }
    return $day;
  }

  $date = strftime("%Y").strftime("%m").updateDay();

  $xml = simplexml_load_file("http://{$_SERVER['PHP_AUTH_USER']}:{$_SERVER['PHP_AUTH_PW']}@www.stundenplan24.de/10223946/mobil/mobdaten/PlanKl$date.xml?_=1579332216617");
	//$xml = simplexml_load_file("http://{$_SERVER['PHP_AUTH_USER']}:{$_SERVER['PHP_AUTH_PW']}@www.stundenplan24.de/10223946/mobil/mobdaten/PlanKl20200617.xml?_=1592382910469");

  foreach ($xml->Klassen->Kl[20]->Pl->Std as $stunde) {
    echo "
      <div class='stunde'>
        <span class='fach'>$stunde->Fa</span>
        <span class='raum'>$stunde->Ra</span>
        <span class='info'>$stunde->If</span>
      </div>
    ";
  }
?>
