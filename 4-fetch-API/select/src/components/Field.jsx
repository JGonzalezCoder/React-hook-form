import './Field.css';

const Field = ({ label, type, name, value, change }) => {
	return (
		<label htmlFor={ name } className="item">
			{ label }
			<input
				type={ type }
				name={ name }
				id={ name }
				value={ value }
				onChange={ change }
				className="field"
			/>
		</label>
	)
}

export default Field;
