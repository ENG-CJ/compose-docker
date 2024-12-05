import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

   const [message, setMessage] = useState(0);
  async function GetServerMessage(){
   
    var response = await axios.get("http://localhost:3400/api/")
    console.log(response.data);
    setMessage(response.data.message)
  }
  useEffect(()=>{
    GetServerMessage();
  },[])


  return (
    <>
      <div></div>

      <div className="card">
        <p>SERVER SAYS :</p>
        <h2>{message}</h2>
      </div>
    </>
  );
}

export default App
