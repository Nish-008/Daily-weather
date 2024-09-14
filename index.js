const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

weatherForm.addEventListener("submit", async event =>{

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
const weatherData = await getWeatherData(city);
displayWeatherInfo(weatherData);
        }
        catch(error){
           console.error(error);
           displayError(error);
        }

    } else {
        displayError("Please enter a city name");
    }

});

async function getWeatherData(city) {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=05c035548cd44f96aa572326241409&q=${city}`;
    
    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
   
    return await response.json();
}

function displayWeatherInfo(data) {
    const {
        location: {
            name: city,
            region,
            country
        },
        current: {
            temp_f,
            temp_c,
            humidity, 
            condition: {
                text: conditionText,
                icon: conditionIcon
            }
        }
    } = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("img");


    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp_c}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = conditionText;

    weatherEmoji.src = `https:${conditionIcon}`; 
    weatherEmoji.alt = "Weather icon"; 


    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add('humidityDisplay');
    descDisplay.classList.add('descDisplay');
    weatherEmoji.classList.add('weatherEmoji');

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){
    
}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}