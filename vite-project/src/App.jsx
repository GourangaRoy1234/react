import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCount] = useState(0)
  // let counter=5
  const addvalue=()=>{
    console.log("value added",Math.random());
    if(counter<20){
       counter=counter+1;
    }
    setCount(counter)
  }
   const decvalue=()=>{
      if(counter<=0){
        counter=0;
      }
      else{
         counter=counter-1;
      }
      
      setCount(counter)
    }

  return (
    <>
    <h1>chai aur code</h1>
    <h2>counter value: {counter}</h2>
    <br />
    <button 
    onClick={addvalue}
    >inc</button>
    <button onClick={decvalue}>dec</button>
    </>
  )
}

export default App
