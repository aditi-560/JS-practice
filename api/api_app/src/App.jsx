import { useState, useEffect } from 'react'
import{axios} from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const[weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error)=>{
        console.log("error occured");
        setLoading(false);
      })
  }, []);

  if(loading) return <p>loading....</p>
  if(!weather) return <p> No data available</p>

  return (
    <>
      <h2>Weather in {weather.location.name}</h2>
      <p>temp: {weather.current.temp_c}</p>
    </>
  )
}

export default App
