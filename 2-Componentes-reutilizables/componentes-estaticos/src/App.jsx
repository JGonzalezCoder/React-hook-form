import { useState } from 'react';
import Field from './components/Field';
import Submit from './components/Submit';
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
			<Field label="Email" type="email" value={data.email} change={changeData} />
			<Field label="Password" type="password" value={data.password} change={changeData} />
			<Submit value="Login" />
		</form>
	)
}

export default App;
