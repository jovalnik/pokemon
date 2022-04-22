import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import SearchObject from './SearchObject'
import Start from './Start'
import Team from './Team1'

 

function App() {
  const [pokeList, setPokeList] = useState([]) 
  const [candidatePokes, setCandidatePokes] = useState([]) 
  const [storedPokes, setStoredPokes] = useState([])// spara lokalt, så inte behöver hämtas
 
  const [myTeam,setMyTeam]=useState([])
  const [globalId,setGlobalId]=useState(0)

  //returns paginated list of available resources for 'pokemon' api endpont
  async function GetPoke(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0', { method: 'GET' })
    const data = await response.json()
    setPokeList (data.results)
  
}
 
  useEffect(() => {
     GetPoke()
 	}, [])

  return (
 <Router>
<div>
<header>
<div id="head-search"> <NavLink to="/Search" >   Search  </NavLink> </div>
  <div id="my-title"> 
<NavLink to=""> <h1>  PokeManager </h1></NavLink>
 </div>
 <div id="head-team"> 
 <NavLink to="/myTeam">   Team  </NavLink>
</div>

</header>
<main>
  <Routes>
  
  <Route path="/Search" element={<SearchObject  pokeList={pokeList} candidatePokes={candidatePokes}  setCandidatePokes={setCandidatePokes} />} />
  <Route path="/myTeam" element={<Team  globalId={globalId}   setGlobalId={setGlobalId}   myTeam={myTeam} setMyTeam={setMyTeam} pokeList={pokeList} setPokeList={setPokeList}  candidatePokes={candidatePokes}  setCandidatePokes={setCandidatePokes}   storedPokes={storedPokes} setStoredPokes={setStoredPokes}  />} />
  <Route path="/*" element={<Start />} />
  </Routes>
</main>
</div>
</Router> 
  )
}

export default App
