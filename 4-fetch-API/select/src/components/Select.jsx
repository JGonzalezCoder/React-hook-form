import './Field.css';

const Select = ({ label, name, options=[], value="", change }) => {
	return (
		<label htmlFor={ name } className="item">
			{ label }
			<select name={ name } value={ value } onChange={ change }>
				<option value="">-Seleccionar-</option>
				{
					options.map(({val, content}) => (
						<option key={val} value={val}>{content}</option>
					))
				}
			</select>
		</label>
	)
}

export default Select;
