import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if(storedTasks){
      setTasks(storedTasks);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  const handleTasks = () =>{
    setTasks([...tasks, input]);
    setInput("");

  }

  return(
    <div>
      <h1>
        Tasks
      </h1>

      <input value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleTasks}>Add task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
