import { useState } from 'react';

const App = () => {
	const [email, setEmail] = useState("jesus");
	const [num, setNum] = useState(0);

	const changeEmail = e => {
		setEmail(e.target.value);
	}
	const calculate = e => {
		setNum(e.target.value.length);
	}

	return (
		<form>
			<input
				type="email"
				value={email}
				onChange={changeEmail}
			/>
			<input
				type="password"
				defaultValue="" 
				onChange={calculate}
			/>
			<p>Usted ingreso {num} caracteres</p>
			<button type="submit">Registrarse</button>
		</form>
	)
}

export default App;
