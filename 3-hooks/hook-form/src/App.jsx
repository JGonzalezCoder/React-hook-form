import { useForm } from 'react-hook-form';
import './App.css';

const App = () => {

	const { register, handleSubmit, watch, formState } = useForm();
	
	const submit = data => {
		alert(JSON.stringify(data));
	}

	return (
		<form className="container" onSubmit={handleSubmit(submit)}>
			<label htmlFor="email" className="item">
				Email
				<input
					{ ...register('email') }
					type="email"
					name="email"
					id="email"
					defaultValue=""
					className="field"
				/>
			</label>
			<label htmlFor="password" className="item">
				Password
				<input
					{ ...register('password') }
					type="password"
					name="password"
					id="password"
					defaultValue=""
					className="field"
				/>
			</label>
			<input type="submit" value="Ingresar" className="button"/>
		</form>
	)
}

export default App;
