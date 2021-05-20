import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Sorter from './components/Sorter';
import Searchbar from './components/Searchbar';
import ChampionGrid from './components/ChampionGrid';
import Champion from './components/Champion';
import Header from './components/Header';

function App() {
	const [champNames, setChampNames] = useState([]);
	const arr = [];
	const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/`;

	useEffect(() => {
		fetch(
			`http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				for (const name in res.data) {
					arr.push(name);
				}
				setChampNames(arr);
			});
	}, []);
	return (
		<div className='App'>
			<Route path='/' exact component={Header} />
			<Route
				path='/:champion'
				render={(routerProps) => <Header match={routerProps.match} />}
			/>
			<Searchbar />
			<div style={{ display: 'flex' }}>
				<Route path='/' exact component={Sorter} />
				<Route
					path='/'
					exact
					render={(routerProps) => (
						<ChampionGrid
							champNames={champNames}
							imageUrl={imageUrl}
							match={routerProps.match}
						/>
					)}
				/>
				<Route
					path='/:champion'
					render={(routerProps) => (
						<Champion imageUrl={imageUrl} match={routerProps.match} />
					)}
				/>
			</div>
		</div>
	);
}

export default App;
