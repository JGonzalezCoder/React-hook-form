const App = () => {

	const submit = e => {
		alert("Hola mundo");
	}

	return (
		<form onSubmit={submit}>
			<input type="email" defaultValue="jesus@gmail.com" />
			<input type="password" placeholder="Password" />
			<label htmlFor="remember">Recuerdame</label>
			<input type="checkbox" name="remember" id="remember" defaultChecked />
			<textarea name="about" id="about" cols="30" rows="10" defaultValue="Hola" />
			<select type="country" id="country" defaultValue="pe">
				<option value="">-Seleccionar-</option>
				<option value="ve">Venezuela</option>
				<option value="bo">Bolivia</option>
				<option value="co">Colombia</option>
				<option value="pe">Peru</option>
				<option value="ar">-Argentina</option>
			</select>
			<button type="submit">Registrarse</button>
		</form>
	)
}

export default App;
