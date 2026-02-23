import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])  // most important line
  const [input, setInput] = useState("")

  useEffect(()=>{
    const storedTasks =  JSON.parse(localStorage.getItem('tasks'));

    if(storedTasks){
      setTasks(storedTasks)
    }
  },[])
  useEffect(() => {

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  const handleTask = () => {
    setTasks([...tasks, input])
    setInput("")
  }


  return (
    <>
    <h1>Task Tracker</h1>
    <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Add you task' />
    <button onClick={handleTask}>Add Task</button>
    <ul>
      {tasks.map((task, index) =>(
         <li key={index}>{task}</li>
      ))}
    </ul>

      
    </>
  )
}

export default App
