import { useState, useEffect } from 'react'
import{axios} from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const[weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[response, setResponse] = useState("");


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

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const res = await axios.post(
        "http://localhost:3000/", {name, email}
      );
      setResponse(res.data);

      setName("");
      setEmail("");

    }catch(error){
      console.err(error);
    }
  };
  if(loading) return <p>loading....</p>
  if(!weather) return <p> No data available</p>

  return (
    <div>
      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {/* 👇 Display Data */}
      {response && (
        <div>
          <h3>{response.message}</h3>
          <p>Name: {response.data.name}</p>
          <p>Email: {response.data.email}</p>
        </div>
      )}
    </div>

  )
}

export default App
