const apiKey = '50257541cf0d015ad24713d585454ed1';
const country = "Belize";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;
let city;
let isp;
let weather;
let description;

function fetchweather(){
    

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById("weather").innerHTML = data.weather[0].description; // Logging the weather data for your country
    })

    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}

function fetchData(){
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=a350ba986ed24876b5496ed3eb09eff8')
    .then(response => response.json())
    .then(data => {
       document.getElementById("isp").innerHTML = data.organization;
       document.getElementById("city").append(data.state_prov)
       document.getElementById("country").append(data.country_name_official)
        console.log(data)
    })

    .catch(error => console.log(error));
}

fetchData()
fetchweather()



