import uniqid from 'uniqid';
import React, { useEffect, useState } from 'react';
import InputCreateTodo from '../InputCreateTodo';

export default function CreateActivity() {
	const [listActivity, setListActivity] = useState([]);

	const activity = {
		id: '',
		activity: '',
	};

	useEffect(() => {
		const getActivity = localStorage.getItem('@activity');
		const allActivities = JSON.parse(getActivity);

		allActivities ? setListActivity(allActivities) : setListActivity([]);
	}, []);

	useEffect(() => {
		localStorage.setItem('@activity', JSON.stringify(listActivity));
	}, [listActivity]);

	const handleSubmit = (e) => {
		e.preventDefault();
		e.target.childNodes[1].value = '';

		setListActivity([...listActivity, activity]);
	};

	const handleChange = (e) => {
		activity.id = uniqid();
		activity.activity = e.target.value;
	};

	return <InputCreateTodo onSubmit={handleSubmit} handleChange={handleChange} />;
}
