import { useState, useEffect } from 'react'
import './App.css'
import PokeCard from './PokeCard'
import PokeItem from './PokeItem'
import PokeInput from './PokeInput'
import PokeNick from './PokeNick'
import PokeCard2 from './PokeCard2'

function Team(props) {

  const {  globalId, setGlobalId, myTeam, setMyTeam,candidatePokes, setCandidatePokes, pokeList, storedPokes, setStoredPokes} = props  
  const [showNoMoreAdd, setShowNoMoreAdd]=useState("highlighted")
  const [fight,setFight]=useState("dont")
 
  useEffect(() => {
    if (myTeam.length > 2){
      setFight("fight")
    }else
    {
      setFight("dont")
    }
  }, [myTeam])
  // const [myKey, setMyKey]= useState(0)
  
//  
 function GetPokeListUrlByName(myName){
  let found = pokeList.find(p => p.name === myName) 
   
  return found.url
 }
  return (
    <div className='selector'>
      TEAM:
    <div className='team-container' > 
      <ul className="team">
                    {  
                      myTeam.map( (poke,index) => ( 
                        
                        <PokeCard2
                         
                        key={poke.name + index } myName={poke.name} url={GetPokeListUrlByName(poke.name)} candidatePokes={candidatePokes}
                        pokeList={pokeList} myTeam={myTeam} setMyTeam={setMyTeam}
                        initialHighlightState={"highlighted"}
                        // myKey={poke.name + index }
                        index={index}
                        storedPokes={storedPokes} setStoredPokes={setStoredPokes}
                         
                        /> 
                          ))
                    }                    
       </ul>
       </div>
       CANDIDATES:
 
       <div  className="candidates-container"> 
       <ul className="candidates"> 
        
 
            { 
                      candidatePokes.map( (poke, index) => ( 
                        <PokeCard 
                        key={poke.name}  myName={poke.name}  url={poke.url} candidatePokes={candidatePokes} setCandidatePokes={setCandidatePokes}
                        setMyTeam={setMyTeam}
                        initialHighlightState={"not-highlighted"}
                        storedPokes={storedPokes} setStoredPokes={setStoredPokes} 
                        globalId={globalId}   setGlobalId={setGlobalId}          
                        />   ))
                      
            }
       </ul>
       </div>
 
       <p className={fight}>
 Your team is Ready... 
              <button>FIGHT!!</button>
       </p>
    </div>

    
  )
}

export default Team
