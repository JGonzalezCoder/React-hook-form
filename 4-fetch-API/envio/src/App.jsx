import { useRef } from 'react';
import Form from './components/Form';
import Field from './components/Field';
import Textarea from './components/Textarea';
import Select from './components/Select';
import Submit from './components/Submit';
import './App.css';

const App = () => {

	const form = useRef();

	const country = [
						{val: "ven", content: "Venezuela"},
						{val: "per", content: "Peru"},
						{val: "arg", content: "Argentina"},
						{val: "col", content: "Colombia"},
						{val: "bol", content: "Bolivia"}
					]
	
	const submit = e => {
		e.preventDefault();
		const f = form.current;
		const data = {
			fullname: f.fullname.value,
			email: f.email.value,
			password: f.password.value,
			age: f.age.value,
			ranking: f.ranking.value,
			observations: f.oservations.value,
			country: f.country.value,
			active: f.active.checked
		}
		alert(JSONstringify(data));
	}

	return (
		<Form formRef={form} submit={submit}>
			<Field label="Name" type="text" name="fullname" value="jesus" />
			<Field label="Email" type="email" name="email" value="jesus@gmail.com" />
			<Field label="Password" type="password" name="password" value="12345" />
			<Field label="Age" type="number" name="age" value="25" min="0" max="150"/>
			<Field label="Ranking" type="range" name="ranking" value="5" min="0" max="10" />
			<Textarea label="Observations" name="observations" value="muy bien" />
			<Select label="Country" name="country" options={country} value="ven" />
			<Field label="Active?" type="checkbox" name="active" value="true" />
			<Submit value="Login" />
		</Form>
	)
}

export default App;
