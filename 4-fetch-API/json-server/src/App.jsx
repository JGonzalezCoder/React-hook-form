import Form from './components/Form';
import Field from './components/Field';
import Textarea from './components/Textarea';
import Submit from './components/Submit';
import useForm from './hooks/useForm';
import './App.css';

const App = () => {
	
	const [data, changeData, submit] = useForm({	"fullname": "",
													"email": "",
													"password": "",
													"age": "",
													"range": 0,
													"observations": ""
												});

	return (
		<Form submit={submit}>
			<Field label="Name" type="text" name="fullname" value={data.fullname} change={changeData} />
			<Field label="Email" type="email" name="email" value={data.email} change={changeData} />
			<Field label="Password" type="password" name="password" value={data.password} change={changeData} />
			<Field label="Age" type="number" name="age" value={data.age} change={changeData} />
			<Field label="Ranking" type="range" name="ranking" value={data.range} change={changeData} />
			<Textarea label="Observations" name="observations" value={data.observations} change={changeData}/>
			<Submit value="Login" />
		</Form>
	)
}

export default App;
