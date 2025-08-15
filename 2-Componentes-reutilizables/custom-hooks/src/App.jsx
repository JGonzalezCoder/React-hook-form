import Form from './components/Form';
import Field from './components/Field';
import Submit from './components/Submit';
import useForm from './hooks/useForm';
import './App.css';

const App = () => {
	
	const [data, changeData, submit] = useForm({ "email": "", "password": "" });

	return (
		<Form submit={submit}>
			<Field label="Email" type="email" value={data.email} change={changeData} />
			<Field label="Password" type="password" value={data.password} change={changeData} />
			<Submit value="Login" />
		</Form>
	)
}

export default App;
