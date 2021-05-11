import './App.css';
import ListActivity from './components/ListActivity';
import TitleApp from './components/TitleApp';
import InputCreateTodo from './components/InputCreateTodo';
import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

export default function App() {
	const [listActivity, setListActivity] = useState([]);
	const [loading, setLoading] = useState(false);

	const activity = {
		id: '',
		activity: false,
	};

	useEffect(() => {
		setLoading(true);
		const getActivity = localStorage.getItem('@activity');
		const allActivities = JSON.parse(getActivity);

		allActivities ? setListActivity(allActivities) : setListActivity([]);
		setLoading(false);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		e.target.childNodes[1].value = '';

		setListActivity([...listActivity, activity]);
		localStorage.setItem('@activity', JSON.stringify(listActivity));
	};

	const handleChange = (e) => {
		activity.id = uniqid();
		activity.activity = e.target.value;
	};
	return (
		<div className="App">
			<header className="App-header">
				<TitleApp />
				<InputCreateTodo onSubmit={handleSubmit} handleChange={handleChange} />
			</header>

			<main className="App-main">
				{/* {loading ? <h1>Cargando notas</h1> : console.log(listActivity)} */}
				{loading ? <h1>Cargando notas</h1> : <ListActivity listActivity={listActivity} />}
				{/* <ListActivity listActivity={listActivity} /> */}
				{/* {console.log(!loading && listActivity)} */}
			</main>
		</div>
	);
}
