import './Field.css';

const Field = ({ label, type, name, change, value="", checked=false, min="0", max="0" }) => {
	return (
		<label htmlFor={ name } className="item">
			{ label }
			<input
				type={ type }
				name={ name }
				id={ name }
				value={ value }
				min={ min }
				max={ max }
				checked= { checked }
				onChange={ change }
				className="field"
			/>
		</label>
	)
}

export default Field;
