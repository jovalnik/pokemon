import { useState, useEffect, useRef } from 'react'
import './App.css'
import PokeAbil from './PokeAbil'
 
  function PokeCard( props) {
  const { pokeList, candidatePokes, setCandidatePokes, url, myTeam, setMyTeam, initialHighlightState,storedPokes, setStoredPokes,  showNoMoreAdd, setShowNoMoreAdd } = props  
  const [pokeName, setPokeName]= useState("")
  const [pokeImage, setPokeImage]=useState("")
  const [pokeId, setPokeId]= useState(0)
  const [amIHighlighted, setAmIHighlightted] = useState("not-highlighted")
  const [thisPoke,setThisPoke]= useState();
  const [pokeAbilArray, setPokAbilArray]=useState([])
  const [nick, setNick]=useState("")
 

  async function GetPoke(url){

 
    const response = await fetch(url, { method: 'GET' })
    const data = await response.json()
    // console.log("data",data)
    setPokeName(data.name)
    setPokeImage(data.sprites.front_default)
    setPokeId(data.id)
    setPokAbilArray(data.abilities)
    // console.log("data",data)
    setThisPoke(response)
    // console.log("thisPokw",thisPoke)
    return data
}

function CheckForId (arrayOfObjects, id){
  for ( let i =0; i < arrayOfObjects.length  ; i++){
    if (arrayOfObjects[i].id===id){
      return true
    }
  }
  return false
}

function AddRemove (){
  if (amIHighlighted==="not-highlighted"){
    // setAmIHighlightted("highlighted")
 
    if (!CheckForId(myTeam, pokeId)){
 
          // let newEntry=GetListingWithUrl(url)
          let newEntry=thisPoke
          console.log("myteamlength",myTeam.length)
          if (myTeam.length < 3){ 
          setMyTeam(before => [...before,thisPoke])
          // console.log("myteamlength2",myTeam.length)
          setShowNoMoreAdd("highlighted")
          setAmIHighlightted("highlighted")
          }
          else{
              setShowNoMoreAdd("not-highlighted")
          }

    }
    else{}
  }
  else
  {
    setAmIHighlightted("not-highlighted")
   
  //  console.log("ABOUT TO REMOVE...",url)
  //  setAnUrl(url)
        let tmpArray=[]
        tmpArray=myTeam.filter( poke => poke.url !== url)
        setMyTeam(tmpArray )
  }
}

  useEffect(() => {
    // console.log("url",url)
    // setThisPoke(GetPoke(url))
    GetPoke(url)
    setAmIHighlightted(initialHighlightState)
 
    // console.log("thispoke2",thisPoke)
    // console.log("pokename",pokeName)
    // console.log("pokeimage",pokeImage)
  },[])
 
return (
    <div>
      <div>

      {/* <input type="text" onChange={event => {
                // nick=(event.target.value)
 
                // thisPoke.nick=(event.target.value)
 
                setNick(event.target.value)
                // setNick(thisPoke.nick)
                // console.log("thisPoke.nick",thisPoke.nick)
               
              }
              
              }
 
				      	/>  */}

 
    <li className={amIHighlighted}>
        <img  onClick={AddRemove}  src={pokeImage}/>
        {pokeName}<br>
        </br>
        Abilities:<br></br>
 
        <ul>   
                { 
                      pokeAbilArray.map( abil => ( 
                        <PokeAbil 
                        key={abil.ability.url} url={abil.ability.url} candidatePokes={candidatePokes} setCandidatePokes={setCandidatePokes}
                        pokeList={pokeList} myTeam={myTeam} setMyTeam={setMyTeam}
                        initialHighlightState={"not-highlighted"}
                        />   ))
                      }

        </ul>
    
 
            
 
       </li>
       {/* Nickname: {nick}<br></br>
  */}
       </div>
    </div>
  )
}

export default PokeCard
