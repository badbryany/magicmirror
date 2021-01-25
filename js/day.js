var weekday = new Array(7);
weekday[0]="Monday";
weekday[1]="Tuesday";
weekday[2]="Wednesday";
weekday[3]="Thursday";
weekday[4]="Friday";
weekday[5]="Saturday";
weekday[6]="Sunday";

var wdS = ["Mo", "Tue", "Wed", "Thu", "Fr", "Sa", "Su"]

var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function wotag(tag){
  switch (tag) {
    case 1:
      wtag = "Mo";
      break;
    case 2:
      wtag = "Di";
      break;
    case 3:
      wtag = "Mi";
      break;
    case 4:
      wtag = "Do";
      break;
    case 5:
      wtag = "Fr";
      break;
    case 6:
      wtag = "Sa";
      break;
    case 0:
      wtag = "So";
      break;

  }
  return wtag;
}

function womonat(monat){
  switch (monat) {
    case 1:
      monat = "Januar";
      break;
    case 2:
      monat = "Februar";
      break;
    case 3:
      monat = "März";
      break;
    case 4:
      monat = "April";
      break;
    case 5:
      monat = "Mai";
      break;
    case 6:
      monat = "Juni";
      break;
    case 7:
      monat = "Juli";
      break;
    case 8:
      monat = "August";
      break;
    case 9:
      monat = "Sebtember";
      break;
    case 10:
      monat = "Oktober";
      break;
    case 11:
      monat = "November";
      break;
    case 12:
      monat = "Dezember";
      break;
  }
  return monat;
}


function tag(){
  var date = new Date();

  tag = date.getDate();
  wochentag = date.getDay();
  monat = date.getMonth();

  var ztag = wochentag;
  monat = monat + 1;

  document.getElementById("wtag").innerHTML = weekday[wochentag];
  document.getElementById("ztag").innerHTML = tag;
  document.getElementById("monat").innerHTML = mS[monat];

}

tag();
