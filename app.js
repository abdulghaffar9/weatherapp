// https://weather-322.web.app/
const apikey = '2adcba90af2046638b6111446261005'
// https://www.weatherapi.com/
// `https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityname}&aqi=no`



const input = document.querySelector("#city");

const btn = document.querySelector("#weatherBtn");
let div = document.querySelector(".weather-info")

btn.addEventListener('click' , ()=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${input.value}&aqi=no`)
    .then(res =>res.json())
    .then(res => {
      let icons = "https:" + res.current.condition.icon;
      let temperature = res.current.temp_c;
      let city = res.location.name;
      let condition = res.current.condition.text;
      let humidity = res.current.humidity;
      let windSpeed = res.current.wind_kph;
      
      console.log("this is temperature", temperature);
      console.log("this is icon", icons);
        console.log(res);
            console.log(res);
  div.innerHTML += `<img 
  src="${icons}"
  alt="weather icon"
>

<div class="temperature">${temperature}°C</div>

<div class="city">${city}</div>

<div class="condition">${condition}</div>

<div class="details">

  <div class="detail-box">
    <h4>Humadity</h4>
    <p>${humidity}</p>

    <h4>Humadity</h4>
    <p>${humidity}</p>
  </div>

  <div class="detail-box">
    <h4>Wind Speed</h4>
    <p>${windSpeed}km/h</p>
  </div>

</div>

</div> `
    }).catch(err => {
        console.log(err);
        
    })
})