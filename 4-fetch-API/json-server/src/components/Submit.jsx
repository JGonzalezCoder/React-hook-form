import './Submit.css';

const Submit = ({ value }) => {
	return (
		<input
			type="submit"
			value={ value }
			className="button"
		/>
	)
}

export default Submit;
