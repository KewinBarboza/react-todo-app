import { useEffect, useState } from 'react';
import './style.css';

export default function ListActivity({ activities }) {
	const [allActivities, setAllActivities] = useState([]);

	useEffect(() => {
		setAllActivities(activities);
	}, [activities]);

	const handleDelete = (e) => {
		const idActivity = e.nativeEvent.path[2].id;

		const getActivity = localStorage.getItem('@activity');
		const jsonActivity = JSON.parse(getActivity);

		const filterActivities = jsonActivity.filter((act) => act.id !== idActivity);

		setAllActivities([...filterActivities]);
		localStorage.setItem('@activity', JSON.stringify(filterActivities));
	};

	const handleEdit = (e) => {
		e.nativeEvent.path[2].children[0].disabled = false;
	};

	const handleChange = (e, index) => {
		const newData = [...allActivities];

		newData.splice(index, 1, {
			id: allActivities[index].id,
			activity: e.target.value,
		});

		localStorage.setItem('@activity', JSON.stringify(newData));
		setAllActivities(newData);
	};

	if (allActivities === undefined || allActivities.length === 0) {
		return <h1>Sin notas</h1>;
	}

	return (
		<ul className="list-activities">
			{allActivities.map((activity, index) => (
				<li className="item-activities" key={activity.id} id={activity.id}>
					<textarea
						className="description-activities"
						disabled
						id={activity.id}
						onChange={(e) => handleChange(e, index)}
						value={activity.activity}
					></textarea>
					<div className="option-activities">
						<button className="btn-delete" onClick={handleDelete}>
							delete
						</button>
						<button className="btn-edit" onClick={handleEdit}>
							edit
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}
