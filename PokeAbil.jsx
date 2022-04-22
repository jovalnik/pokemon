import { useState, useEffect, useRef } from 'react'
import './App.css'
 
  function PokeAbil( props) {
  const { url } = props  
  const [pokeAbilName, setPokeAbilName]=useState("")

  async function GetPokeAbilityName(url){
    const response = await fetch(url, { method: 'GET' })
    const data = await response.json()
    setPokeAbilName(data.name)
}

  useEffect(() => {

    GetPokeAbilityName(url)
 
  },[])
 
return (
    <div>
    <li >
 
        {pokeAbilName} 
       </li>
    </div>
  )
}

export default PokeAbil
