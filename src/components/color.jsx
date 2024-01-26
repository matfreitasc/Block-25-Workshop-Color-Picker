import PropTypes from 'prop-types'

const Color = ({ color, setSelectedColor, selectedColor }) => {
	return (
		<div
			className={color + (color === selectedColor ? ' selected' : '')}
			onClick={() => setSelectedColor(color)}></div>
	)
}

export default Color

Color.propTypes = {
	color: PropTypes.string.isRequired,
	setSelectedColor: PropTypes.func.isRequired,
	selectedColor: PropTypes.string.isRequired,
}
