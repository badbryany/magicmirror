function unix2human(unixtime){
	var date = new Date(unixtime*1000);
	return date.getHours()+':'+("0"+date.getMinutes()).substr(-2);
}

function updateWeather (){
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather?id=2935022&APPID=187f1ba6614c27f369a20796b6d6a42c",
		type: "get",
		success: function(result) {
			var html;
			var temp = Math.round(result.main.temp) - 273;

			html = "<img src='weatherIcons/" + whichIconSrc(result.weather[0].icon) + ".svg'>";
			html += "<div class='temp'>" + temp + "</div>";


			//html += result.weather[0].description+"<br>";
			//html += 'Wind: '+result.wind.deg+Math.round(result.wind.speed)+' m/s'+"<br>";
			//html += 'Sun: '+unix2human(result.sys.sunrise)+'-'+unix2human(result.sys.sunset)+"<br>";

			$("#weathernow").html(html);
		},
		error: function(error) {
			console.log(error);
			window.setTimeout(updateWeather,1000);
		}
	});
}

function forecast() {
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/forecast?id=2935022&APPID=187f1ba6614c27f369a20796b6d6a42c",
		type: "get",
		success: function(result) {
			var html = "";
			for (var i = 0; i < result.list.length; i = i + 8) {

				forecasttime = new Date(result.list[i].dt_txt);
				now = new Date();

				if (wotag(forecasttime.getDay()) !== wotag(now.getDay())) {
					html += "<li>" + wdS[forecasttime.getDay()] + " ";
					//html += "<img src='https://openweathermap.org/img/wn/" + result.list[i].weather[0].icon + ".png'></img>"
					html += Math.round(result.list[i].main.temp) - 273;
					html += "°C</li>";
					//html += Math.round(result.list[i].main.temp_min) - 273 + "°";
				}

			}
			$("#forecastweather").html(html);
		},
		error: function(error) {
			console.log(error);
			window.setTimeout(forecast,1000);
		}
	});
}


$(document).ready(function() {
	setInterval(updateWeather, 10000);
	setInterval(forecast, 10000);
});


function whichIconSrc(weathericon) {
	var icon;
	if (weathericon == "01d" || weathericon == "01n") {
		icon = 'sonne';
	}
	if (weathericon == "02d" || weathericon == "02n") {
		icon = '<div class="icon sun-shower><div class="cloud"></div><div class="sun"><div class="rays"></div></div></div>';
	}
	if (weathericon == "03d" || weathericon == "04d" || weathericon == "03n" || weathericon == "04n") {
		icon = 'bewoelkt';
	}
	if (weathericon == "09d" || weathericon == "09n") {
		icon = 'regen';
	}
	if (weathericon == "10d" || weathericon == "10n") {
		icon = 'regenSonne';
	}
	if (weathericon == "11d" || weathericon == "11n") {
		icon = 'sturm';// TODO: thunder storm
	}
	if (weathericon == "13d" || weathericon == "13n") {
		icon = 'schneit';
	}
	if (weathericon == "50d" || weathericon == "50n") {
		icon = "<img src='https://openweathermap.org/img/wn/50d.png' style='height:100px;'></img>";
	}

  return icon;
}
