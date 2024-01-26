import Color from './components/color'
import { useEffect, useState } from 'react'

const App = () => {
	const [selectedColor, setSelectedColor] = useState(
		localStorage.getItem('selectedColor') || 'red'
	)

	useEffect(() => {
		// saving the selected color to local storage
		localStorage.setItem('selectedColor', selectedColor)
	}, [selectedColor])

	return (
		<div id='container'>
			<div id='navbar'>
				<div>Currently selected: </div>
				<div className={selectedColor}>{selectedColor}</div>
			</div>
			<div id='colors-list'>
				<Color
					color='red'
					setSelectedColor={setSelectedColor}
					selectedColor={selectedColor}
				/>
				<Color
					color='blue'
					setSelectedColor={setSelectedColor}
					selectedColor={selectedColor}
				/>
				<Color
					color='green'
					setSelectedColor={setSelectedColor}
					selectedColor={selectedColor}
				/>
			</div>
		</div>
	)
}

export default App
