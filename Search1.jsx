import { useState, useEffect } from 'react'
 
import './App.css'
 
function Search(props) {
 
  const {pokeList, setPokeList} = props  
  const [searchTerm, setSearchTerm] = useState("")
  const [myPokes, setMyPokes] = useState([])
  const [formState, setFormState] = useState("")
  const [formResults, setFormResults] = useState(" ")
  const [formTouched, setFormTouched] = useState(false)
  //setFormResults(" ") 
  useEffect(() => {

     for ( let i=0 ; i < pokeList.length ; i++){

     setFormResults(bluh => bluh + " " + pokeList[i].name)
    setMyPokes(myPokes => myPokes + pokeList[i])
  }
  // for ( let i=0 ; i < pokeList.length ; i++){

  //   // setFormResults(bluh => bluh + " " + pokeList[i].name)
  //   setMyPokes(myPokes => myPokes + pokeList[i])
  // }


}, [])

//   useEffect(() => {

//      for ( let i=0 ; i < pokeList.length ; i++){

//     setFormResults(bluh => bluh + " " + pokeList[i].name)
//   }
// } )

useEffect(() => {
setMyPokes(() => FilterPoke(searchTerm) )
 

// Funkar inte! "time" ingår i funktionens CLOSURE och har alltid värdet 0
// setTime(time + DELAY)
// var PATTERN = 'bedroom',
//     filtered = myArray.filter(function (str) { return str.includes(PATTERN); });
// console.log("hallo from useff[search  ]")
},[searchTerm])


  function FilterPoke (searchTerm){
    let filtered=[]
    // filtered = pokeList.filter(function (str) { return str.includes(searchTerm); });
    // filtered = pokeList.filter(word => word.length > 0);
    filtered = myPokes.filter(str => str.name.includes(searchTerm))
 
    //  console.log(typeof(pokeList))
      for( let i=0 ; i < filtered.length ; i++){
        console.log("filtered",i,filtered[i].name) 
      }
    //= pokeList.filter(function (poke) { return pokeList.includes(myString); });
 
    return filtered
  }

  


  return (
    <div>
      Search for Pokemymoms goes here.

      <div className="form">
			<section className={formState}>
 
				{/* <label> Search for pokemymoms </label>
          
				       <input type="text"
				      // onChange={event => setSearchTerm(event.target.value)}
              //filtered = myArray.filter(function (str) { return PATTERN.test(str); });
					    // onChange={event => setSearchTerm(event.target.value)}
				    	onChange={event => {setSearchTerm(event.target.value)
               console.log(searchTerm)
               }}
				    	onBlur={() => setFormTouched(true)}
				      	/>
    
               */}

          <form >
            <label>search for:
              <input 
                 type="text" 
                 value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                 />
            </label>
      <input type="submit" />
    </form>    



				    	<p className="message"> {formResults} </p>

               
			</section>
		
		</div>

    </div>
  )
}

export default Search
