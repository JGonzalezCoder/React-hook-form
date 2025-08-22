import Form from './components/Form';
import Field from './components/Field';
import Textarea from './components/Textarea';
import Select from './components/Select';
import Submit from './components/Submit';
import useForm from './hooks/useForm';
import './App.css';

const App = () => {
	
	const [data, changeData, submit] = useForm({	"fullname": "",
													"email": "",
													"password": "",
													"age": "",
													"ranking": 5,
													"observations": "",
													"country": "",
													"active": false
												});
	const country = [
						{val: "ven", content: "Venezuela"},
						{val: "per", content: "Peru"},
						{val: "arg", content: "Argentina"},
						{val: "col", content: "Colombia"},
						{val: "bol", content: "Bolivia"}
					]

	return (
		<Form submit={submit}>
			<Field label="Name" type="text" name="fullname" value={data.fullname} change={changeData} />
			<Field label="Email" type="email" name="email" value={data.email} change={changeData} />
			<Field label="Password" type="password" name="password" value={data.password} change={changeData} />
			<Field label="Age" type="number" name="age" value={data.age} change={changeData} min="0" max="150"/>
			<Field label="Ranking" type="range" name="ranking" value={data.ranking} min="0" max="10" change={changeData} />
			<Textarea label="Observations" name="observations" value={data.observations} change={changeData}/>
			<Select label="Country" name="country" options={country} value={data.country} change={changeData} />
			<Field label="Active?" type="checkbox" name="active" checked={data.active} change={changeData} />
			<Submit value="Login" />
		</Form>
	)
}

export default App;
