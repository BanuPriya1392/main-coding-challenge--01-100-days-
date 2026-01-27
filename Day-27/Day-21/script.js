const apiKey = "f4fd885b319c3776025c8ef7660b128e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector("#searchBtn");

async function checkWeather(city) {
  if (!city) return alert("Please enter a city name");

  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 401) {
      alert("Invalid API Key. Please check your key or wait for activation.");
      return;
    }

    if (response.status === 404) {
      alert("City not found. Please try again.");
      return;
    }

    const data = await response.json();

    // Updating UI inside the success block
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".description").innerHTML =
      data.weather[0].description;

    console.log("Weather data loaded for:", data.name);
  } catch (error) {
    console.error("Network error:", error);
    alert("Something went wrong. Check your internet connection.");
  }
}

// Click Event
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Enter Key Event
searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
