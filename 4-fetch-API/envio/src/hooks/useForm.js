import { useState } from 'react';

const useForm = (value) => {
	const [data, setData] = useState(value);
	
	const changeData = e => {
		setData({
		...data,
		[e.target.name]: e.target.name === "active"? !data.active : e.target.value
		});
	}
	
	const submit = e => {
		alert(JSON.stringify(data));
	}
	
	return [data, changeData, submit];
}

export default useForm;
