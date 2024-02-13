import Image from "next/image";
import { useState, useEffect } from 'react'
import axios from 'axios';
import WeatherContainer from "@/components/Container";
import styles from "@/styles/Home.module.css"
export default function Home() {
  // const apiKey = process.env.NEXT_PUBLIC_API;
  const city = useState('')

  const apiKey = "5b28e0cc04f6ac705fc119742f2fd19f";

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  const apiUrl =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=vancouver`
  // const weatherForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`

  const [data, setData] = useState<ICurrentWeather[]>([]);
  const [weatherForecast, setWeatherForecast] = useState<ICurrentForecast[]>([]);
  const [searchWeather, setSearchWeather] = useState(false);

  const [cityName, setCityName] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [pressure, setPressure] = useState('');

  
  // const grabInfo = () => { 
  //   fetch(url)
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     setData(data);
  //     setWeatherForecast(data)
  //     setSearchWeather(true);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }
  
  async function checkWeather(){
    const response = await fetch (apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    
    setCityName(data.name);
    setTemp(data.main.temp + "°c");
    setWindSpeed(data.wind.speed);
    setHumidity(data.main.humidity + "%");
    setFeelsLike(data.main.feels_like);
    setPressure(data.main.pressure);

  }
  
  checkWeather();
  
  return (
    <main className={styles.main}>
      <div className={styles.logoSection}>
        <Image
          src={"/asset/logo.svg"}
          width={64}
          height={64}
        />
        <p  className={styles.title}>Raincheck</p>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.heading}>
          <p className={styles.city}>{cityName}</p>
          <input className={styles.searchBar} type="search" placeholder="enter a city name"/>
          <Image
            src={"/asset/search.svg"}
            height={24}
            width={24}
          />
        </div>
        <div className={styles.tempSection}>
          <p className={styles.temp}>{temp}</p>
          <Image
            src={"/asset/rainy.svg"}
            height={700}
            width={200}
          />
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.windRow}>
            <Image
              src={"/asset/windy-icon.svg"}
              height={48}
              width={48}
            />
            <p className={styles.windSpeed}>{windSpeed} km/hr</p>
          </div>
          <div className={styles.humidityRow}>
            <Image
              src={"/asset/humidity-icon.svg"}
              height={48}
              width={48}
            />
            <p className={styles.humidty}>{humidity}</p>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.windRow}>
            <Image
              src={"/asset/feels-like-icon.svg"}
              height={48}
              width={48}
            />
            <p className={styles.windSpeed}>{feelsLike}</p>
          </div>
          <div className={styles.humidityRow}>
            <Image
              src={"/asset/pressure-icon.svg"}
              height={48}
              width={48}
            />
            <p className={styles.humidty}>{pressure}</p>
          </div>
        </div>
        <p className={styles.forecastHeader}>Daily forcecast</p>
        <div className={styles.forecast}>
          <div className={styles.one}>
            <Image
            src={"/asset/cloudy-sun.svg"}
            height={20}
            width={70}
            />
            <p>Rainy</p>
            <p>4.18°c</p>
          </div>
          <div className={styles.one}>
            <Image
            src={"/asset/cloudy-sun.svg"}
            height={20}
            width={70}
            />
            <p>Clearing</p>
            <p>7°C</p>
          </div>
          <div className={styles.one}>
            <Image
            src={"/asset/sunny.svg"}
            height={20}
            width={60}
            />
            <p>Sunny</p>
            <p>7°C</p>
          </div>
          <div className={styles.one}>
            <Image
            src={"/asset/rainy.svg"}
            height={20}
            width={70}
            />
            <p>Rainy</p>
            <p>9°C</p>
          </div>
          <div className={styles.one}>
            <Image
            src={"/asset/rainy.svg"}
            height={20}
            width={70}
            />
            <p>Rainy</p>
            <p>9°C</p>
          </div>
          <div className={styles.one}>
            <Image
            src={"/asset/snowy.svg"}
            height={20}
            width={70}
            />
            <p>Snowy</p>
            <p>-7°C</p>
          </div>
        </div>
        <p className={styles.updateWeather}>weather last updated on February 12th, 2024</p>
      </div>
      {/* 
      <form>
        <label>Whats the weather</label>
        <input type="search" placeholder="enter a city name" value={findCity} onChange={(event) => setFindCity(event.target.value)} />
        <button type="submit" value="Submit" onClick={() => GrabInfo()}>submit</button>
      </form>
      <div>
        <button onClick={() => checkWeather()}>Grab Info</button>
        <WeatherContainer data={data}/>
      </div> */}
      {/* {
        searchWeather && 
        <div>
          <WeatherContainer data={data}/>
          grabInfo();
        </div>
      } */}


    </main>
  );
}
