import { useState } from 'react';
import axios from 'axios';

const useForm = (value) => {

	const state_begin = {	"fullname": "",
							"email": "",
							"password": "",
							"age": "",
							"ranking": 5,
							"observations": "",
							"country": "",
							"active": false
						}

	const [data, setData] = useState(value);
	
	const changeData = e => {
		const field = e.target.name === "active"? e.target.checked : e.target.value;
		setData({
		...data,
		[e.target.name]: field
		});
	}
	
	const api = async () => {
		try {
			const response = await axios.post('http://192.168.1.36:3050/leads', data);
			const status = await response.status;
			if(status === 201) {
				alert(`${data.fullname} tus datos estan guardados :)`);
				setData(state_begin);
			}

		} catch(error) {
			console.error(error);
		}
	}
	
	const submit = async (e) => {
		e.preventDefault();
		api();
	}
	
	return [data, changeData, submit];
}

export default useForm;
