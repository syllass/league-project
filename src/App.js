import './App.css';
import { useState, useEffect } from 'react';

function App() {
	const [champ, setChamp] = useState();
	useEffect(() => {
		fetch(
			'http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion/Aatrox.json'
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setChamp(res.data.Aatrox.image.full);
			});
	}, []);
	return (
		<div className='App'>
			<header className='App-header'></header>
			<img
				src='https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570145160dd39dca/5db05fa8347d1c6baa57be25/RiotX_ChampionList_aatrox.jpg?quality=90'
				alt=''
			/>
			<img
				src='https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1259276b6d1efa78/5db05fa86e8b0c6d038c5ca2/RiotX_ChampionList_ahri.jpg?quality=90'
				alt=''
			/>
		</div>
	);
}

export default App;
