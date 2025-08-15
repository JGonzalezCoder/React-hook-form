import './Field.css';

const Field = ({ label, type, value, change }) => {
	return (
		<label htmlFor={ type } className="item">
			{ label }
			<input
				type={ type }
				name={ type }
				id={ type }
				value={ value }
				onChange={ change }
				className="field"
			/>
		</label>
	)
}

export default Field;
