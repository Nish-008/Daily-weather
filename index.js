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