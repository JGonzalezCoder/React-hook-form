import { useState } from 'react';
import './App.css';

const App = () => {

	const [data, setData] = useState({ "email": "", "password": "" })
	
	const changeData = e => {
		setData({
		...data,
		[e.target.name]: e.target.value
		});
	}
	const submit = e => {
		alert("Bienvenido");
	}

	return (
		<form className="container" onSubmit={submit}>
			<label htmlFor="email" className="item">
				Email:
				<input
					type="email"
					name="email"
					id="email"
					className="field"
					value={data.email}
					onChange={changeData}
				/>
			</label>
			<label htmlFor="password" className="item">
				Password:
				<input
					type="password"
					name="password"
					id="password"
					className="field"
					value={data.password}
					onChange={changeData}
				/>
			</label>
			<input type="submit" value="Ingresar" className="button"/>
		</form>
	)
}

export default App;
