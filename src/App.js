import './App.css';
import ListActivity from './components/ListActivity';
import TitleApp from './components/TitleApp';
import React, { useEffect, useState } from 'react';
import CreateActivity from './components/CreateActivity';

export default function App() {
	const [listActivity, setListActivity] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const getActivity = localStorage.getItem('@activity');
		const allActivities = JSON.parse(getActivity);

		allActivities ? setListActivity(allActivities) : setListActivity([]);
		setLoading(false);
	}, []);

	useEffect(() => {
		localStorage.setItem('@activity', JSON.stringify(listActivity));
	}, [listActivity]);

	const newActivity = (activity) => setListActivity([...listActivity, { ...activity }]);

	return (
		<div className="App">
			<header className="App-header">
				<TitleApp />
				<CreateActivity callback={newActivity} />
			</header>

			<main className="App-main">{loading ? <h1>Cargando notas</h1> : <ListActivity activities={listActivity} />}</main>
		</div>
	);
}
