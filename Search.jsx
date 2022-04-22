/*
2a Skapa en lista med objekt som representerar städer. Objekten ska ha namn och antal invånare. Gör en komponent som tar emot listan med props och renderar den som ett <ul> element.
*/
import Poke from './Poke'
import App from './App'

const Search = ({ pokes, setPokes }) => {
	function removePoke(id) {
		let newPokes = pokes.filter(poke => poke.id !== id)
		// Bra tillfälle att göra console.log för att se hur arrayen ser ut
		setPokes(newPokes)
	}

	return (
		<ul className="poke-list">
			{pokes.map(poke => (
				<City
					key={poke.id}
					url={poke.url}
					name={poke.name}
 					removePoke={removeCity} />
			))}
		</ul>
	)
}

export default Search