import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count , setCount] = useState(15)

  const addValue = () => {
    // setCount(count + 1)
    setCount( (prevCount) => prevCount + 1)
    setCount( (prevCount) => prevCount + 1)
    setCount( (prevCount) => prevCount + 1)
    setCount( (prevCount) => prevCount + 1)
    setCount( (prevCount) => prevCount + 1)
    // if(count == 20){
    //   setCount(count)
    // }
    
  }

  const removeValue = () => {
    setCount(count - 1)
    // if(count == 0) {
    //   setCount(count)
    // }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter Value = {count}</h3>
      <button onClick={addValue}>Add Value {count}</button>
      <br/>
      <button onClick={removeValue}>Remove Value {count}</button>
    </>
  )
}

export default App
