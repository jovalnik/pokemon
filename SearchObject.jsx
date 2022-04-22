import { useState, useEffect } from 'react'
import PokeItem from './PokeItem'
import './App.css'
 
function SearchObject(props) {
 
  const {pokeList} = props  
  const {candidatePokes, setCandidatePokes} = props  
  const [searchTerm, setSearchTerm] = useState("")
  const [displayOrNot, setDisplayOrNot] = useState("not")

  let filtered=[]
  filtered = FilterPoke(searchTerm) 
  let search=""
  let choose="chosen"
  function FilterPoke (searchTerm){
    let searchLow=searchTerm.toLowerCase()
    filtered = pokeList.filter(pok => pok.name.toLowerCase().includes(searchLow))
    return filtered
}

return (
    <div >
      <div  className="stuff-on-top"> 
      Search for Pokemymoms goes here.
      </div>
 
      <div>
			<section >      
 
				<label> Search for pokemons </label>
				       <input type="text" onChange={event => {
                search=(event.target.value)
                setSearchTerm(event.target.value)
   
                if( event.target.value.length > 0){ 
                  setDisplayOrNot("display") 
               }
               else{
                setDisplayOrNot("not")
               }
              }
              
              }
 
				      	/> 
                  <div className="flex-container"> 
                  <div></div>
                  <ul  className={displayOrNot}>
                     
                    Search Results
                    {                            
                        filtered.map( poke => ( 
                        <PokeItem
                             key={poke.name} url={poke.url} candidatePokes={candidatePokes} setCandidatePokes={setCandidatePokes}
                             pokeList={pokeList}
                             initialHighlightState={"not-highlighted"}
                             />   ))
                    }
                  </ul>
                   <div></div>
                   <ul className={choose}>
                    Chosen
                    { 
                      candidatePokes.map( poke => ( 
                      <PokeItem 
                      key={poke.name} url={poke.url} candidatePokes={candidatePokes} setCandidatePokes={setCandidatePokes}
                      pokeList={pokeList}
                      initialHighlightState={"highlighted"}
                      />   ))
                    }                    
                  </ul>
                  <div></div>
                  </div>               
			</section>		
		</div>
    </div>
  )
}

export default SearchObject
