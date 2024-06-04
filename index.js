const apiKey = "fe27f12c8e01ffee44e7ee79761fb1ac";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const SearchValue = document.querySelector(".search input");
const BoxValue = document.querySelector(".search button");
// const Btnclick = document.querySelector(".search button");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);  //return promise   

    var data = await response.json(); //It returns another Promise that resolves with the result of 
    //parsing the body text as JSON. and store to data
    console.log(data);
    try {
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector(".Wind").innerText = Math.round(data.wind.speed) * 3.6 + " km/h";
        document.querySelector(".Humidity").innerText = Math.round(data.main.humidity) + "%";
        
        if (data.weather[0].main == "Clouds") {
            document.querySelector(".weather-icon").setAttribute("src", "./Element/cloudy.png")
        }
        else if (data.weather[0].main == "Clear") {
            document.querySelector(".weather-icon").setAttribute("src", "./Element/sun.png")

        }
        else if (data.weather[0].main == "Rain") {
            document.querySelector(".weather-icon").setAttribute("src", "./Element/storm.png")
            document.querySelector(".card").classList.add("rain");

        }
        else if (data.weather[0].main == "Drizzle") {
            document.querySelector(".weather-icon").setAttribute("src", "./Element/images/drizzle.png")
            document.querySelector(".card").classList.add("rain");
        }
        else if (data.weather[0].main == "Mist") {
            document.querySelector(".weather-icon").setAttribute("src", "./Element/images/mist.png")

        }
        document.querySelector(".weather").style.display = "block";
        
    }
    catch (error) {
        document.querySelector(".temp").innerText = city;
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".city").innerText = "invalid city name!";
    }
}
document.querySelector(".search button").addEventListener("click", () => {
    checkWeather(SearchValue.value);
})
