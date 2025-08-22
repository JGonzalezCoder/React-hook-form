import './Field.css';

const Field = ({ label, type, name, change, value="", checkbox="false", min="0", max="0" }) => {
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
				checkbox= { checkbox }
				onChange={ change }
				className="field"
			/>
		</label>
	)
}

export default Field;
