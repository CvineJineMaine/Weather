const apiKey = 'ca4fadb45eb8457e152a50b6f142c872'
const cityInput = document.querySelector('.city')
const button = document.querySelector('.btn')


function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log('Temperature:', data.main.temp - 273.15, '°C');
        setUI(data);
        setBackground(data.main.temp - 273.15);
        
    })
}

button.addEventListener('click', () => {
    let city = cityInput.value;
    getWeather(city);
});



function setUI(data) {
    const weatherBox = document.querySelector('.weather');
    weatherBox.innerHTML = 
    `<div class="dataSys">
                            <h2 class="cityName">${data.name}</h2>
                            <h2 class="country">${data.sys.country}</h2>
                        </div>
                        <div class="dataTemp">
                            <h4 class="temp">Фактична темп. ${parseFloat(data.main.temp - 273.15).toFixed(1)}°C</h4>
                            <h4 class="feelsLike">Відчувається як ${Math.round(data.main.feels_like - 272.15)}°C</h4>
                        </div>
                        <div class="dataWeather">
                            <img src=" https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                            <h4 class="description">${data.weather[0].description}</h4>
                            
                    </div>
                    <div class="dataWind">
                        <h4 class="windDeg" style="transform: rotate(${data.wind.deg}deg)"> </h4>
                        <h4 class="windSpeed">${data.wind.speed} м/с</h4>
                    </div>`;
    
}

function setBackground(temp) {
    const wrap = document.querySelector('.wrap');
    let color = '';
    if (temp <= 0) { 
        wrap.style.background = 'linear-gradient(90deg,rgba(42, 74, 155, 1) 0%, rgba(5, 191, 247, 1) 51%, rgba(83, 168, 237, 1) 100%)';
        wrap.style.backgroundColor = color;
        console.log(color);
        alert('It is cold outside! Dress warmly!');
        
        // 
    } else if (temp > 0 && temp <= 10) {
        wrap.style.background = 'linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)';
        wrap.style.backgroundColor = '';
    }
    else if (temp > 0 && temp >= 21) {
        wrap.style.background = 'linear-gradient(90deg,rgba(155, 66, 42, 1) 0%, rgba(247, 167, 5, 1) 51%, rgba(237, 221, 83, 1) 100%)';
        wrap.style.backgroundColor = '';
    }
}

// Object.weather.description + 'Одягни теплу куртку.' 

massage = [{text: 'Одягни теплу куртку.'}]

if (temp <= 0) {
    Object.weather.description + massage[0].text;
}