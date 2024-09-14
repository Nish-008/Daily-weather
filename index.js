const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "05c035548cd44f96aa572326241409";

weatherForm.addEventListener("submit", event =>{

    event.preventDefault();

    const city = cityInput.value;

    if(city){

    } else {
        displayError("Please enter a city name");
    }

});

async function getWeatherData(city) {
    
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