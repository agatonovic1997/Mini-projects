let input = document.getElementById('inputCity');
let minTemp = document.getElementById('min');
let maxTemp = document.getElementById('max');
let nowTemp = document.getElementById('now-temperature');
let icon = document.getElementById('icon');
let img = document.getElementById('img');
let description = document.getElementById('description');

const weatherDescriptions = {
    'clear sky': 'Vedro nebo',
    'few clouds': 'Malo oblaka',
    'scattered clouds': 'Raštrkani oblaci',
    'broken clouds': 'Razbijeni oblaci',
    'overcast clouds': 'Pretežno oblačno',
    'shower rain': 'Pljusak kiša',
    'rain': 'Kiša',
    'light rain': 'Slaba kiša',
    'moderate rain': 'Umerena kiša',
    'heavy intensity rain': 'Jaka kiša',
    'very heavy rain': 'Veoma jaka kiša',
    'extreme rain': 'Eksremno jaka kiša',
    'freezing rain': 'Ledena kiša',
    'light intensity shower rain': 'Kiša slabog inteziteta u pljusku',
    'heavy intensity shower rain': 'Pljusak jakog inteziteta kiše',
    'ragged shower rain': 'Neuredan pljusak kiše',
    'thunderstorm': 'Grmljavina',
    'thunderstorm with light rain': 'Grmljavinska oluja sa slabom kišom',
    'thunderstorm with rain': 'Grmljavinska oluja sa kišom',
    'thunderstorm with heavy rain': 'Grmljavinska oluja sa jakom kišom',
    'light thunderstorm': 'Lagana grmljavinska oluja',
    'heavy thunderstorm': 'Jaka grmljavinska oluja',
    'ragged thunderstorm': 'Neuredna grmljavinska oluja',
    'thunderstorm with light drizzle': 'Grmljavinska oluja sa slabom rosuljom',
    'thunderstorm with drizzle': 'Grmljavinska oluja sa rosuljom',
    'thunderstorm with heavy drizzle': 'Grmljavinska oluja sa jakom rosuljom',
    'light intensity drizzle': 'Rosulja malog inteziteta',
    'drizzle': 'Rosulja',
    'heavy intensity drizzle': 'Jak intezitet rosulje',
    'light intensity drizzle rain': 'Rosulja niskog inteziteta sa kišom',
    'drizzle rain': 'Rosulja sa kišom',
    'heavy intensity drizzle rain': 'Jak intezitet rosulje sa kišom',
    'shower rain and drizzle': 'Pljusak kiše i rosulja',
    'heavy shower rain and drizzle': 'Jaki pljusak kiše i rosulja',
    'shower drizzle': 'Pljusak rosulje',
    'snow': 'Sneg',
    'light snow': 'Slab sneg',
    'heavy snow': 'Jak sneg',
    'sleet': 'Kiša sa snegom',
    'light shower sleet': 'Slab pljusak kiše sa snegom',
    'shower sleet': 'Pljusak kiše i snega',
    'light rain and snow': 'Slaba kiša i sneg',
    'rain and snow': 'Kiša i sneg',
    'light shower snow': 'Slab pljusak snega',
    'shower snow': 'Pljusak snega',
    'heavy shower snow': 'Jak pljusak snega',
    'mist': 'Izmaglica',
    'smoke': 'Dim',
    'haze': 'Zamagljenost',
    'sand/dust whirls': 'Vrtlozi peska/prašine',
    'fog': 'Magla',
    'sand': 'Pesak',
    'dust': 'Prašina',
    'volcanic ash': 'Vulkanski pepeo',
    'squalls': 'Olujni naleti',
    'tornado': 'Tornado',
};

function showWeather(e) {
    if (e.key === "Enter") {
        let city = input.value;
        let xml = new XMLHttpRequest();
        xml.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5614649c3768689496da126f637a246`);

        xml.onreadystatechange = function () {
            if (xml.readyState === 4 && xml.status === 200) {
                let responseData = JSON.parse(xml.responseText);

                let temperatureCelsius = Math.round(responseData.main.temp - 273.15);

                minTemp.textContent = `${Math.round(responseData.main.temp_min - 273.15)}°C`;
                maxTemp.textContent = `${Math.round(responseData.main.temp_max - 273.15)}°C`;
                nowTemp.textContent = `${temperatureCelsius}°C`;

                
                icon.src = `https://openweathermap.org/img/w/${responseData.weather[0].icon}.png`;
                img.src = `https://openweathermap.org/img/w/${responseData.weather[0].icon}.png`;

               
                const iconCode = responseData.weather[0].icon;
                const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;

                icon.src = iconSrc;
                img.src = iconSrc;

                if (iconCode === '01d') {
                    img.src = './img/sunny-day.jpg';
                  } else if (iconCode === '01n') {
                    img.src = './img/moon-sky.jpg';
                  } else if (iconCode === '02d') {
                    img.src = './img/few clouds.jpg';
                  } else if (iconCode === '02n') {
                    img.src = './img/few clouds.jpg';
                  } else if (iconCode === '03d') {
                    img.src = './img/scattered clouds.jpg';
                  } else if (iconCode === '03n') {
                    img.src = './img/scattered clouds.jpg';
                  } else if (iconCode === '04d') {
                    img.src = './img/broken clouds.jpg';
                  } else if (iconCode === '04n') {
                    img.src = './img/broken clouds.jpg';
                  } else if (iconCode === '09d') {
                    img.src = './img/shower rain.jpg';
                  } else if (iconCode === '09n') {
                    img.src = './img/shower rain.jpg';
                  } else if (iconCode === '10d') {
                    img.src = './img/rain.jpg';
                  } else if (iconCode === '10n') {
                    img.src = './img/rain.jpg';
                  } else if (iconCode === '11d') {
                    img.src = './img/thunderstorm-day.jpg';
                  } else if (iconCode === '11n') {
                    img.src = './img/thunderstorm-night.jpg';
                  } else if (iconCode === '13d') {
                    img.src = './img/snow-day.jpg';
                  } else if (iconCode === '13n') {
                    img.src = './img/snow-night.jpg';
                  } else if (iconCode === '50d') {
                    img.src = './img/mist.jpg';
                  } else if (iconCode === '50n') {
                    img.src = './img/mist-night.jpg';
                  } else {
                    img.src = './img/none.jpg';
                  }
            

                if (temperatureCelsius < 0) {
                    nowTemp.style.color = 'rgb(0, 0, 255)'; // Tamnoplava boja
                } else if (temperatureCelsius >= 0 && temperatureCelsius < 10) {
                    nowTemp.style.color = 'rgb(0, 180, 255)'; // Svetloplava boja
                } else if (temperatureCelsius >= 10 && temperatureCelsius < 20) {
                    nowTemp.style.color = 'rgb(255, 255, 0)'; // Žuta boja
                } else if (temperatureCelsius >= 20 && temperatureCelsius < 30) {
                    nowTemp.style.color = 'rgb(255, 115, 0)'; // Narandžasta boja
                } else if (temperatureCelsius >= 30 && temperatureCelsius < 40) {
                    nowTemp.style.color = 'rgb(255, 0, 0)'; // Crvena boja
                } else {
                    nowTemp.style.color = 'rgb(90, 0, 0)'; // Bordo boja
                }

                description.textContent = weatherDescriptions[responseData.weather[0].description.toLowerCase()];
            }
        };
        xml.send();
    }
}

input.addEventListener('keyup', showWeather);
