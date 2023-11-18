const apiKey = '50257541cf0d015ad24713d585454ed1';
const country = "Belize";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;
let city;
let isp;
let weather;
let description;
let debounce = false;
let button = document.getElementById("revealBtn");
let allImages = document.querySelectorAll('img');

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
        //console.log(data)
    })

    .catch(error => console.log(error));
}



function revealInformation() {
    if (debounce == false) {
        button.innerHTML = "Hide Information";
        fetchData();
        fetchweather();

        allImages.forEach(img => {
            img.style.display = 'none';
        });

        debounce = true;

        // Wait for 2 seconds before executing the next part of the code
        setTimeout(() => {
            button.innerHTML = "Reveal Information";
            document.getElementById("isp").innerHTML = "";
            document.getElementById("city").innerHTML = "State: ";
            document.getElementById("country").innerHTML = "Country: ";
            document.getElementById("weather").innerHTML = "";

            allImages.forEach(img => {
                img.style.display = 'block';
            });

            debounce = false;
        }, 2000);
    }
}




// Set display property to 'none' for each img element


//fetchData()
//fetchweather()



