import './style.css';

export default function ListActivity({ activities }) {
	const handleDelete = (e) => {
		console.log(e.nativeEvent.path[1].id);
	};

	if (activities === undefined || activities.length === 0) {
		return <h1>Sin notas</h1>;
	}

	return (
		<ul className="list-activities">
			{activities.map((activity) => (
				<li className="item-activities" key={activity.id} id={activity.id}>
					<p className="description-activities">{activity.activity}</p>
					<div className="option-activities">
						<button className="btn-delete" onClick={handleDelete}>
							delete
						</button>
						<button className="btn-edit">edit</button>
					</div>
				</li>
			))}
		</ul>
	);
}
