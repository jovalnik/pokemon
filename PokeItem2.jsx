import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

// function PokeItem( { url }) {
  function PokeItem( props) {
// function PokeItem(props}) {
  // const {pokeList, setPokeList} = props  
  const {candidatePokes, setCandidatePokes, url} = props  
  // const url=props
 
  const [pokeImgUrl, setPokeImgUrl]= useState("")
  const [dummy, setDummy]= useState(false)
  const [amIHighlighted, setAmIHighlightted] = useState("not-highlighted")
  let imgUrl=""

  async function GetImg(myUrl){
    console.log(myUrl)
    const response = await fetch(myUrl, { method: 'GET' })
    const data = await response.json()
 
    console.log ("sprites",data.sprites.front_default)
    setPokeImgUrl(data.sprites.front_default)
}

function DoSomething (){
  console.log("doing something")
if (amIHighlighted==="not-highlighted"){
  setAmIHighlightted("highlighted")
  setCandidatePokes(before => [...before,url])
  //setTheArray(oldArray => [...oldArray, newElement]);
}
else
{
  setAmIHighlightted("not-highlighted")
}
}
async function GetName(myUrl){
  console.log(myUrl)
  const response = await fetch(myUrl, { method: 'GET' })
  const data = await response.json()

  console.log ("name",data.name)
  setPokeImgUrl(data.sprites.front_default)
}

useEffect(() => {
  console.log('Bara när komponenten blir MOUNTED')
  // setPokeImgUrl(GetImg(url))
  GetImg(url)
  
  
}, [])


  return (
    <div>
    <li onClick={DoSomething} className={amIHighlighted}>
      <img width="30" height="30" src={pokeImgUrl}/>
    {/* {console.log("hej",pokeImgUrl)} */}
 
       </li>
    </div>
  )
}

export default PokeItem
