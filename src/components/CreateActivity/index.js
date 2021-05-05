import InputCreateTodo from '../InputCreateTodo';
import React, { useState } from 'react';

export default function CreateActivity() {
	const [activity, setActivity] = useState(null);
	const [listActivity, setListActivity] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setListActivity((item) => item.concat(activity));
		console.log(listActivity);
	};

	const handleChange = (e) => {
		setActivity({ activity: e.target.value });
	};
	return (
		<>
			<InputCreateTodo onSubmit={handleSubmit} handleChange={handleChange} />
		</>
	);
}
