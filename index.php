<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>MagicMirror</title>
    <link rel="stylesheet" href="css/weather.css">
    <link rel="stylesheet" href="css/todo.css">
    <link rel="stylesheet" href="css/vplan.css">
    <link rel="stylesheet" href="css/master.css">
  </head>
  <body>
  <div class="top">
      <div class="datum">
        <div class="zeit">
          <span id="stunde">00</span>:<span id="minute">00</span>
        </div>
        <div class="tag">
          <span id="wtag">Mo</span>,
          <span id="monat">12</span>
          <span id="ztag">13</span>
        </div>
      </div>
      <div class="weather">
        <div id='weather'>
          <div id="weathernow"></div>
          <div id="div_forecastweather">
        </div>
          <ul id="forecastweather"></ul>
        </div>
      </div>
    </div>
    <div id="news">
      <div class="new" id="new0"></div>
      <div class="new" id="new1"></div>
      <div class="new" id="new2"></div>
    </div>

    <!div class="todo">
      <!h1><!ToDo></!h1>
      <!ul>
        <!li id="todo"><!/li>
      <!/ul>
    <!/div>

    <div class="vplan" id="vplan"></div>

    <div style="display:none;" id="text"></div>

    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>

    <script src="js/text.js"></script>
    <script src="js/loadvp.js"></script>
    <script src="js/day.js"></script>
    <script src="js/time.js"></script>
    <script src="js/weather.js"></script>
    <script src="js/loadrss.js"></script>
    <script src="js/showrss.js"></script>
    <script src="js/umfrage.js"></script>

    <!script src="js/loadtodo.js"><!/script>

  </body>

</html>
