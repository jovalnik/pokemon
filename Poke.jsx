import App from "./App"
import Search from "./Search"

const Poke = ({ id, name, url,removePoke }) => (
	<li> {name} har id {id} och url {url} <button onClick={() => removePoke(id)}> Ta bort </button> </li>
)

export default Poke