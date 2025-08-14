import { useState } from 'react';

const App = () => {

	const [num, setNum] = useState(0);

	const calculate = e => {
		setNum(e.target.value.length);
	}

	return (
		<form>
			<input
				type="email"
				defaultValue="jesus@gmail.com"
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
