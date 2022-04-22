import { useState, useEffect, useRef } from 'react'
import './App.css'
import PokeAbil from './PokeAbil'
import PokeInput from './PokeInput'
import PokeNick from './PokeNick'

  function PokeCard2( props) {
  
  const { globalId, index, pokeList, candidatePokes, url, myTeam, setMyTeam, initialHighlightState,storedPokes, setStoredPokes,  myName } = props  
  const [pokeName, setPokeName]= useState("")
  const [pokeImage, setPokeImage]=useState("")
  const [pokeId, setPokeId]= useState(0)
  const [amIHighlighted, setAmIHighlightted] = useState("not-highlighted")
  const [thisPoke,setThisPoke]= useState({});
  const [pokeAbilArray, setPokAbilArray]=useState([])
  const [nick, setNick]=useState(myTeam[index].nick) 
  const [nickSet, setNickSet]=useState(true)
  const [showNick,setShowNick]=useState("highlighted")
  const [hideInput,setHideInput]=useState("dont") 
  const [dummy,setDummy]=useState(false)
  const [unikum, setUnikum]=useState(globalId)
  let found=({})
 
async function GetPoke(myName, url){//  
  let foundPokemon=false
 
 
  if(storedPokes.length > 0) {
     found = storedPokes.find(p => p.name === myName) 
    if (found){
      foundPokemon=true
      setPokeName(found.name)
      setPokeImage(found.sprites.front_default)
      setPokeId(found.id)

    }
}
  if (!foundPokemon){ 
  const response = await fetch(url, { method: 'GET' })
 
  const data = await response.json()
 
  setPokeName(data.name)
  setPokeImage(data.sprites.front_default)
  setPokeId(data.id)
  setPokAbilArray(data.abilities)
  setThisPoke(data) 
 
  setStoredPokes(before => [...before,data])
 
  }
  else{

    setThisPoke(found)
    setPokeName(found.name)
    setPokeImage(found.sprites.front_default)
    setPokeId(found.id)
    setPokAbilArray(found.abilities)
  }

}  // GetPoke


function CheckForId (arrayOfObjects, id){
  for ( let i =0; i < arrayOfObjects.length  ; i++){
    if (arrayOfObjects[i].id===id){
      return true
    }
  }
  return false
}

function GetListingWithUrl(theUrl){

  for (let i=0 ; i < pokeList.length ; i++){
    if (pokeList[i].url === theUrl){
      return pokeList[i]
    }
  }
}

function AddRemove (){

    setAmIHighlightted("highlighted")
    let tmpArray=[]

      tmpArray=myTeam.filter( poke => poke.uniqueId !== myTeam[index].uniqueId)
 
 
    setMyTeam(tmpArray )


    if (!CheckForId(candidatePokes, pokeId)){
 
      let tmpArray2=[]

      let newEntry=GetListingWithUrl(url)
 
    } 
}

  useEffect(() => {


    GetPoke(myName, url)
    setAmIHighlightted(initialHighlightState)

 

  },[])
 
 


return (
    <div className='card'>
      <div>
    <li className={amIHighlighted}>
        <p> {pokeName} </p>
        <img  onClick={AddRemove}  src={pokeImage}/>
 
         
  
          <div id={hideInput}> 
 
         <PokeInput key={url+"p2input"} dummy={dummy} setDummy={setDummy} index={index} myTeam={myTeam} setMyTeam={setMyTeam}   hideInput={hideInput} setHideInput={setHideInput} nickSet={nickSet} setNickSet={setNickSet} myName={myName} storedPokes={storedPokes} nick={nick}  setNick={setNick} showNick={showNick} setShowNick={setShowNick} thisPoke={thisPoke} setThisPoke={setThisPoke}/>
         </div>
         
        {/* <PokeNick key={url+"p2nick"} unikum={unikum} myTeam={myTeam} index={index} myName={myName}  
        storedPokes={storedPokes}  showNick={showNick} thisPoke={thisPoke} setThisPoke={setThisPoke} /> */}

           <PokeNick key={url+"p2nick"} unikum={unikum} myTeam={myTeam} index={index}   
          />

        Abilities:<br></br>
 
        <ul className='abil'>   
                { 
                      pokeAbilArray.map( abil => ( 
                        <PokeAbil 
                        key={abil.ability.url} url={abil.ability.url}   
                        />   ))
                      }

        </ul>
    
 
            
 
       </li>
       </div>
    </div>
  )
}

export default PokeCard2
