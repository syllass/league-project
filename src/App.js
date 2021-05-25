import './App.css';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Sorter from './components/Sorter';
import ChampionGrid from './components/ChampionGrid';
import Champion from './components/Champion';
import Header from './components/Header';

function App() {
	const [champNames, setChampNames] = useState([]);
	const [extra, setExtra] = useState([]);
	const arr = [];
	const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/`;

	// fetch for all champion data
	useEffect(() => {
		fetch(
			`https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json`
		)
			.then((res) => res.json())
			.then((res) => {
				//push every champ name into an array
				for (const name in res.data) {
					arr.push(name);
				}
				//set both pieces of state to the champion name list
				setChampNames(arr);
				setExtra(arr);
			})
			.catch(() => {
				setChampNames(['err']);
				setExtra(['err']);
			});
	}, []);

	return (
		<div className='App'>
			<Route path='/' exact component={Header} />
			<Route
				path='/:champion'
				render={(routerProps) => <Header match={routerProps.match} />}
			/>
			{/* if there was no error, show all champions and images */}
			{champNames[0] !== 'err' ? (
				<div style={{ display: 'flex' }}>
					<Route
						path='/'
						exact
						render={() => (
							<Sorter setChampNames={setChampNames} extra={extra} />
						)}
					/>
					<Route
						path='/'
						exact
						render={(routerProps) => (
							<ChampionGrid
								champNames={champNames}
								setChampNames={setChampNames}
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
			) : (
				//if there was an error with the fetch, display this message
				<p>There was an error displaying the champion list</p>
			)}
		</div>
	);
}

export default App;
