const apiKey="9a0ec0e9fdd494abec19de3ddaaadad4";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let temp=document.querySelector('.temp')
let city=document.querySelector(".city")
let humidity=document.querySelector('.humidity');
let wind=document.querySelector('.wind')
let searchCity=document.querySelector(".search input")
let searchBtn=document.querySelector(".search button")
let weatherIcon=document.querySelector(".weather-icon")


async function checkWeather(cityName){
    let reponse=await fetch(apiUrl +cityName+ `&appid=${apiKey}`)
    if (reponse.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else {
        let data=await reponse.json()
        
        temp.innerText=Math.round(data.main.temp) + "°C"
        city.innerText=data.name
        humidity.innerText=data.main.humidity + "%"
        wind.innerText=data.wind.speed + "km/h"
        console.log(data);
        
        if(data.weather[0].main==='Clouds'){
            weatherIcon.src="images/clouds.png"
        }else if(data.weather[0].main==='Clear'){
            weatherIcon.src="images/clear.png"
        }else if(data.weather[0].main==='Drizzle'){
            weatherIcon.src="images/drizzle.png"
        }else if(data.weather[0].main==='Mist'){
            weatherIcon.src="images/mist.png"
        }else if(data.weather[0].main==='Snow'){
            weatherIcon.src="images/snow.png"
        }else if(data.weather[0].main==='Rain'){
            weatherIcon.src="images/rain.png"
        }
        
        document.querySelector(".weather").style.display="block"
        document.querySelector(".error").style.display="none"
    }    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchCity.value);
});
