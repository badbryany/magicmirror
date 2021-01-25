function uhr(){
 var zeit = new Date;
 var h = zeit.getHours();
 var m = zeit.getMinutes();

 document.getElementById("stunde").innerHTML = nulldavor(h);
 document.getElementById("minute").innerHTML = nulldavor(m);

 setTimeout(uhr, 1000);
}

function nulldavor(zahl){
  if (zahl < 10) {
    zahl = "0" + zahl;
  }
  return zahl;
}

$(document).ready(uhr);
