import { useEffect } from 'react';
// import useActivity from '../../hook/useActivity';

export default function ListActivity({ activities = [] }) {
	// const getActivities = useActivity();
	console.log(activities);
	// useEffect(() => {
	// if (activities === undefined) {
	// 	return <h1>Sin notas</h1>;
	// }

	return (
		<ul>
			{activities.map((activity) => (
				<li key={activity.id}>{activity.activity}</li>
			))}
		</ul>
	);
	// }, [activities]);
}
