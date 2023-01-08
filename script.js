const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "348095caa8mshb5c3bd46c0d9538p1fd94bjsn28ad34d76e92",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};



const getWeather=(city)=>{
cityname.innerHTML=city
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    // cloud_pct.innerHTML = res.cloud_pct;
    temp.innerHTML = res.temp;
    temp2.innerHTML = res.temp;
    feels_like.innerHTML = res.feels_like;
    humidity.innerHTML = res.humidity;
    humidity2.innerHTML = res.humidity;
    min_temp.innerHTML = res.min_temp;
    max_temp.innerHTML = res.max_temp;
    sunrise.innerHTML = res.sunrise;
    sunset.innerHTML = res.sunset;
    wind_degrees.innerHTML=res.wind_degrees
    wind_speed.innerHTML=res.wind_speed
    wind_speed2.innerHTML=res.wind_speed
  })
  .catch((err) => console.log(err));
}

submit.addEventListener('click',(e)=>{
  e.preventDefault()
  getWeather(city.value)
})

getWeather("Delhi")

///vijayawada

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=vijayawada",
  options
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    vtemp.innerHTML = res.temp;
    vhumidity.innerHTML = res.humidity;
    vmin_temp.innerHTML = res.min_temp;
    vmax_temp.innerHTML = res.max_temp;
    vwind_degrees.innerHTML=res.wind_degrees
    vwind_speed.innerHTML=res.wind_speed
  })
  .catch((err) => console.log(err));


  //hydrebad

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad",
    options
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      htemp.innerHTML = res.temp;
      hhumidity.innerHTML = res.humidity;
      hmin_temp.innerHTML = res.min_temp;
      hmax_temp.innerHTML= res.max_temp;
      hwind_degrees.innerHTML=res.wind_degrees
      hwind_speed.innerHTML=res.wind_speed
    })
    .catch((err) => console.log(err));

    //Pune
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        ptemp.innerHTML = res.temp;
        phumidity.innerHTML = res.humidity;
        pmin_temp.innerHTML = res.min_temp;
        pmax_temp.innerHTML = res.max_temp;
        pwind_degrees.innerHTML=res.wind_degrees
        pwind_speed.innerHTML=res.wind_speed
      })
      .catch((err) => console.log(err));

      //Mumbai
      fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
        options
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          mtemp.innerHTML = res.temp;
          mhumidity.innerHTML = res.humidity;
          mmin_temp.innerHTML = res.min_temp;
          mmax_temp.innerHTML= res.max_temp;
          mwind_degrees.innerHTML=res.wind_degrees
          mwind_speed.innerHTML=res.wind_speed
        })
        .catch((err) => console.log(err));