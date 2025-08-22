import './Field.css';

const Textarea = ({ label, name, value, change }) => {
	return (
		<label htmlFor={ name } className="item">
			{ label }
			<textarea
				name={ name }
				id={ name }
				value={ value }
				onChange={ change }
				className="field"
			/>
		</label>
	)
}

export default Textarea;
