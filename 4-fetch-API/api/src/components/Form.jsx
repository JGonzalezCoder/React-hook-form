import './Form.css';

const Form = ({ submit, children }) => {
	return (
		<form onSubmit={submit} className="container">
			{ children }
		</form>
	)
}

export default Form;
