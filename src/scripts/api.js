// import locationsList from './app.js'

function weatherData (locationID) {
    const apiKey = 'ba94286f29a78f4d9a3dc45b4911d20f';
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + locationID + '&appid=' + apiKey;

    fetch(url)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            printWeather(data);

            let arrayList = {};
            arrayList = locationsList(data.name, data.sys.country, arrayList)
        })
        .catch(errors => {
            console.log('error')
        });
}

function locationsList (city, country, arrayList) {

    arrayList[city] = country;
    console.log(arrayList);

    return arrayList
}

function printWeather(data) {
    const tempCelsiusScale = (data.main.temp - 273.15).toFixed(2);
    const weatherIcon = `https://openweathermap.org/img/wn/${
        data.weather[0]["icon"]
    }@2x.png`;
    const li = document.createElement("li");
    li.classList.add('location');
    li.innerHTML = `
        <h2 class="location-name" ">${data.name}, ${data.sys.country}</h2>
        <p class="location-temperature">${tempCelsiusScale}<span>°C</span></p>
        <img src="${weatherIcon}" alt="${data.weather[0].main}">
        <p class="location-description m-0">${data.weather[0].description}</p>
    `;
    const list = document.querySelector('.locations');
    list.appendChild(li);
}

window.onload = function () {
    document.getElementById('searchBtn').addEventListener('click', event => {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput')
        const searchForm = document.getElementById('searchForm');
        weatherData(searchInput.value);
        searchForm.reset();
        searchInput.focus();
    })
}