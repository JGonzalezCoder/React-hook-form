import { useState } from 'react';

const useForm = (value) => {
	const [data, setData] = useState(value);
	
	const changeData = e => {
		setData({
		...data,
		[e.target.name]: e.target.value
		});
	}
	
	const submit = e => {
		alert("Bienvenido");
	}
	
	return [data, changeData, submit];
}

export default useForm;
