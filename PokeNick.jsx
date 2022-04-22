import { useState, useEffect, useRef } from 'react'
import './App.css'

 
  function PokeNick( props) {
  // const { unikum, index,pokeList, myName, candidatePokes, storedPokes, setCandidatePokes, thisPoke, url, myTeam, setMyTeam, initialHighlightState, nick, setNick , showNick } = props  
  const { unikum, index, myTeam } = props  
 let myIndex=-1;

  useEffect(() => {
 
   let found = myTeam[index]
  //  let found = storedPokes.find(p => p.name === myName) 

  // setNick(found.nick)
  },[])

function SetText (thisPoke, setMyTeam, myTeam, myIndex){

            let enterName=event.target.value
            console.log(event.target.value)
             myIndex=-1
            for (let i=0; i < myTeam.length ; i++){
                if (myTeam[i].uniqueId===unikum){
                  myIndex=i
                }
            }


            // let enterNumber=myTeam[index].uniqueId
            // console.log("enterNumber",enterNumber,"index",index)
            // for ( let i=0 ; i < myTeam.length ; i++){
            //   console.log("loop myteam uniqid",myTeam[i].uniqueId)
            // }
            let newEntry={...thisPoke, nick: enterName, uniqueId: unikum  }
            // let tempTeam=myTeam.splice(index,1)
            let tempTeam=myTeam
            tempTeam[myIndex]=newEntry
            // setMyTeam(before => [...before,newEntry])
            setMyTeam(tempTeam)
              console.log("from nick",myTeam)
}

return (






 
  <div className="contains-nick"> 

    <div  >
 
       Nickname: {myTeam[index].nick}
       {/* Nickname: {myTeam[index].nick} */}
 
       </div>
       </div>
  )
}

export default PokeNick
