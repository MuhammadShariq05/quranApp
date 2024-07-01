import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Shariq";
  const [counter, setCounter] = useState(0);
  return (
      <>
      <div>
        {/* Injected a real object into html */}
        <h1>Hello {name}</h1>
      </div>
      <button onClick={() => setCounter((back) => back - 1)}>-</button>
      <button>{counter}</button>
      <button onClick={() => setCounter((fro) => fro + 1)}>+</button>
      </>
  )
}

export default App
