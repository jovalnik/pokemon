import { useState, useEffect } from 'react'
import PokeItem from './PokeItem'
import './App.css'
 
function Search(props) {
 
  const {pokeList, setPokeList, myId, setMyId} = props  
  const {candidatePokes, setCandidatePokes} = props  
  const [searchTerm, setSearchTerm] = useState("")
  const [displayOrNot, setDisplayOrNot] = useState("not")
  let filtered=[]
  let search=""

function FilterPoke (searchTerm){
 
    filtered = pokeList.filter(pok => pok.name.includes(searchTerm))
    return filtered
}

return (
    <div>
      Search for Pokemymoms goes here.

      <div className="form">
			<section className={formState}>
 
				<label> Search for pokemymoms </label>
				       <input type="text" onChange={event => {
                search=(event.target.value)
                setSearchTerm(event.target.value)
   
                if( event.target.value.length > 0){ 
                  setDisplayOrNot("display") 
                for (let i=0 ; i <  pokeList.length ; i++){
                }
 
                filtered = pokeList.filter(pok => pok.name.includes(searchTerm)) 
               }
               else{
                setDisplayOrNot("not")
               }
              }
              
              }
 
				      	/> 
                  <div className="flex-container"> 
                  <ul className={displayOrNot}>
                 
                    {   
                        GiveMePokeItems(filtered).map(myUrl => ( <PokeItem key={myUrl} url={myUrl} candidatePokes={candidatePokes} setCandidatePokes={setCandidatePokes}/>   ))
                    }
                  </ul>
                -------------------------
                  <ul>
                    {
                      
                      candidatePokes.map(myUrl => ( <PokeItem key={myUrl} url={myUrl} candidatePokes={candidatePokes} setCandidatePokes={setCandidatePokes}/>   ))
                    }                    
                  </ul>
                  </div>               
			</section>		
		</div>
    </div>
  )
}

export default Search
