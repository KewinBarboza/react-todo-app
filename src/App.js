import './App.css';
import CreateActivity from './components/CreateActivity';
import TitleApp from './components/TitleApp';

export default function App() {
	return (
		<div className="App">
			<header className="App-header">
				<TitleApp />
				<CreateActivity />
			</header>

			<main className="App-main"></main>
		</div>
	);
}
