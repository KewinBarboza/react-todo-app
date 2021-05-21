import uniqid from 'uniqid';
import React, { useState } from 'react';
import InputCreateTodo from '../InputCreateTodo';

export default function CreateActivity({ callback }) {
	const [valueNewActivity, setValueNewActivity] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		e.target.childNodes[1].value = '';

		callback({ id: uniqid(), activity: valueNewActivity });
	};

	const handleChange = (e) => setValueNewActivity(e.target.value);

	return <InputCreateTodo onSubmit={handleSubmit} handleChange={handleChange} />;
}
