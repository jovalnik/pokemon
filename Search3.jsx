import { useState, useEffect } from 'react'
import PokeItem from './PokeItem'
import './App.css'
 
function Search3(props) {
 
  const {pokeList, setPokeList} = props  
  const {numChosenPoke, setNumChosenPoke} = props  
  const {candidatePoke, setCandidatePoke} = props  
  const [searchTerm, setSearchTerm] = useState("")
  const [myPokes, setMyPokes] = useState([])
  const [formState, setFormState] = useState("")
  const [formResults, setFormResults] = useState(" ")
  const [formTouched, setFormTouched] = useState(false)
  // let filtered=[]
 
 
  let search=""
 
 

useEffect(() => {
  if(searchTerm !==""){ 
setFormResults(" ")
for ( let i=0 ; i < x.length ; i++){

 console.log("x[i].name",x[i].name)
 
 setFormResults(bluh => bluh + " " + x[i].name)
    }
  }

},[searchTerm])


  function FilterPoke (searchTerm){
    for (let i=0 ; i <  pokeList.length ; i++){
 
    }
    // let filtered=[]
 
    filtered = pokeList.filter(pok => pok.name.includes(searchTerm))
  
 
      for( let i=0 ; i < filtered.length ; i++){
 
        // console.log("filtered",i,filtered[i].name) 
      }
   return filtered
  }

 


  return (
    <div>
      Search for Pokemymoms goes here.

      <div className="form">
			<section className={formState}>
 
				<label> Search for pokemymoms </label>
          
				 
				       <input type="text"
 
				    	onChange={event => {
                search=(event.target.value)
                setSearchTerm(event.target.value)
                // filtrera & mappa här mha search term
                for (let i=0 ; i <  pokeList.length ; i++){
 
                }
 
             
                filtered = pokeList.filter(pok => pok.name.includes(searchTerm))
              
             
                  for( let i=0 ; i < filtered.length ; i++){
             
                    console.log("filtered",i,filtered[i].name) 
                  }

                setNumChosenPoke(filtered.map(filtered => filtered.url))
 
               }}

				    	onBlur={() => setFormTouched(true)}
				      	/>
 
 
                  <ul className="search-results">

 


                  </ul>


				    	<p className="message"> {formResults} </p>

               
			</section>
		
		</div>

    </div>
  )
}

export default Search3
