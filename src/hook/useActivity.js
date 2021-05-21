import { useEffect, useState } from 'react';

export default function useActivity() {
	const [listActivities, setListActivity] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const getActivity = localStorage.getItem('@activity');
		const allActivities = JSON.parse(getActivity);
		allActivities ? setListActivity(allActivities) : setListActivity([]);
		setLoading(false);
	}, []);

	return { listActivities, loading };
}
