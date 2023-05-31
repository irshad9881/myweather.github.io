const apiKey="2be601c0c2444b2f864a1172cfd58bf4";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";
const searchBox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")
async function chekWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data =await response.json();
        //name,temp, in api se liya name:bareilly
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humadity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
         console.log(data);
         if(data.weather[0].main=="Clouds")
         {
          weatherIcon.src="img/clouds.png";
         }
         else if(data.weather[0].main=="Clear")
         {
            weatherIcon.src="img/clear.png";
         }
         else if(data.weather[0].main=="Rain")
         {
            weatherIcon.src="img/rain.png";
         }
         else if(data.weather[0].main=="Drizzle")
         {
            weatherIcon.src="img/dizzle.png";
         }
         else if(data.weather[0].main=="Mist")
         {
            weatherIcon.src="img/mist.png";
         }
         document.querySelector(".weather").style.display="block"
         document.querySelector(".error").style.display="none";
    }
}
searchbtn.addEventListener("click",()=>{
  chekWeather(searchBox.value);  
})

  