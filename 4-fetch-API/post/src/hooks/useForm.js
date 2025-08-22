import { useState } from 'react';

const useForm = (value) => {
	const [data, setData] = useState(value);
	
	const changeData = e => {
		setData({
		...data,
		[e.target.name]: e.target.name === "active"? !data.active : e.target.value
		});
	}
	
	const submit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://192.168.1.36:3050/leads', {
				method: 'POST',
				headers: {
					'content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			const res = await response.json();
			console.log(res);
		} catch (error) {
			console.error(error);
		}
	}
	
	return [data, changeData, submit];
}

export default useForm;
