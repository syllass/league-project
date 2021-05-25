import React from 'react';
import data from '../data.json';

const Sorter = ({ setChampNames, extra }) => {
	//filter champion list by lane buttons
	const laneFilter = (lane) => {
		const filteredState = data.filter((champ) => champ.lane === lane);
		const finalState = filteredState.map((one) => {
			return one.name;
		});

		setChampNames(finalState);
	};

	//filter champion list by search input
	const search = (e) => {
		//had to use an extra piece of state to be able to modify with the filter
		const filteredState = extra.filter((champ) =>
			champ.toLowerCase().startsWith(e.target.value.toLowerCase())
		);
		setChampNames(filteredState);
	};
	return (
		<div
			style={{
				minWidth: '250px',
				maxWidth: '250px',
				border: '2px solid black',
				marginRight: '20px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: 'darkgray',
				minHeight: '55vh',
				position: 'fixed',
			}}>
			<form>
				<input
					type='text'
					className='inputSearch'
					onChange={search}
					placeholder='Search...'
				/>
			</form>
			<button className='sortButton' onClick={() => laneFilter('top')}>
				Top
			</button>
			<button className='sortButton' onClick={() => laneFilter('jg')}>
				Jungle
			</button>
			<button className='sortButton' onClick={() => laneFilter('mid')}>
				Mid
			</button>
			<button className='sortButton' onClick={() => laneFilter('adc')}>
				Bot
			</button>
			<button className='sortButton' onClick={() => laneFilter('sup')}>
				Support
			</button>
		</div>
	);
};

export default Sorter;
