import {collection, addDoc, db, getDocs} from './firebase.js';

function weatherData (locationID, setInfo) {
    const apiKey = '62d3ce8da012c04f2a1652b8e53c5291';
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + locationID + '&appid=' + apiKey;

    fetch(url)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            printWeather(data);
            if (!setInfo) return;
            setWeatherInfo(data.name, data.sys.country);
        })
        .catch(errors => {
            console.log('error')
        });
}

let arrayList = [];
async function setWeatherInfo (countryInfo) {

    try {
        const docRef = await addDoc(collection(db, "locationWeather"), {
            countryInfo
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }


    // arrayList.push(countryInfo)
    // // arrayList[city] = country;
    // console.log(arrayList);
    //
    // localStorage.setItem("weatherInfo", JSON.stringify(arrayList));
}

async function getWeatherInfo () {
    const querySnapshot = await getDocs(collection(db, "locationWeather"));
    querySnapshot.forEach((doc) => {
        weatherData(doc.data().countryInfo, false);
        console.log(doc.data())
    });
    // const data = JSON.parse(localStorage.getItem("weatherInfo"));
    // if (!data) return;
    // data.forEach(val => {
    //     arrayList.push(val);
    //     weatherData (val, false);
    // });
}

getWeatherInfo();

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
        weatherData(searchInput.value, true);
        searchForm.reset();
        searchInput.focus();
    })
}