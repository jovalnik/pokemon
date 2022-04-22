import { useState, useEffect } from 'react'
import './App.css'
 
  function PokeItem( props) {
  const {pokeList, candidatePokes, setCandidatePokes, url, initialHighlightState} = props  
  const [pokeName, setPokeName]= useState("")
  const [amIHighlighted, setAmIHighlightted] = useState("not-highlighted")

function CheckForUrl (arrayOfObjects, url){
  for ( let i =0; i < arrayOfObjects.length ; i++){
    if (arrayOfObjects[i].url===url){
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
  if (amIHighlighted==="not-highlighted"){
    setAmIHighlightted("highlighted")

    if (!CheckForUrl(candidatePokes, url)){ 
          let newEntry=GetListingWithUrl(url)
 
          setCandidatePokes(before => [...before,newEntry])
 
    }
    else{}
  }
  else
  {
    setAmIHighlightted("not-highlighted")
   
   console.log("ABOUT TO REMOVE...",url)
 
        let tmpArray=[]
 
        tmpArray=candidatePokes.filter( poke => poke.url !== url)
         setCandidatePokes(tmpArray ) 
  }
}

 
useEffect(() => {
  let nameMePlease=GetListingWithUrl(url)
  setPokeName(nameMePlease.name)
  setAmIHighlightted(initialHighlightState)
}, [])

return (
    <div >
    <li onClick={AddRemove} className={amIHighlighted}>
        {pokeName} 
       </li>
    </div>
  )
}

export default PokeItem
