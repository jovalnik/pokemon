import { useState, useEffect, useRef } from 'react'
import './App.css'
 
  function PokeCard( props) {
    
  const {  globalId, setGlobalId, url, setMyTeam, initialHighlightState,storedPokes, setStoredPokes, myName } = props  
  const [pokeName, setPokeName]= useState("")
  const [pokeImage, setPokeImage]=useState("")
  const [amIHighlighted, setAmIHighlightted] = useState("not-highlighted")
  const [thisPoke,setThisPoke]= useState({});
 
  let found={} 

 async function GetPoke(myName, url, globalId){   
  let foundPokemon=false
  let indexOfPoke=-1
 
  if(storedPokes.length > 0) {
    found = storedPokes.find(p => p.name === myName) 
    if (found){
      foundPokemon=true
      setPokeName(found.name)
      setPokeImage(found.sprites.front_default)

    }
 
}
  if (!foundPokemon){ 
  const response = await fetch(url, { method: 'GET' })
 
  const data = await response.json()
 
  setPokeName(data.name)
  setPokeImage(data.sprites.front_default)
  setThisPoke(data) 
  setStoredPokes(before => [...before,data])
 
  }
  else{
    let tmpPoke={...found, nick: '',uniqueId: globalId }
    setThisPoke(tmpPoke)
    
  }
 
}  // GetPoke

function AddRemove (globalId){
  if (amIHighlighted==="not-highlighted"){

          let newEntry={...thisPoke, nick: '',uniqueId: globalId }

          setMyTeam(before => [...before,newEntry])

   }
 
}

  useEffect(() => {

    GetPoke(myName, url, globalId, setGlobalId(globalId + 1))
    setAmIHighlightted(initialHighlightState)
  },[])
 
return (
    <div className='card'>
      <div>

    <li  >
      {pokeName} 
        <img  onClick={()=> {AddRemove  (globalId); setGlobalId(globalId +1)}}  src={pokeImage}/>
       </li>
       </div>
    </div>
  )
}

export default PokeCard
