import React from 'react';
import { Link } from 'react-router-dom';

const ChampionGrid = ({ champNames, imageUrl }) => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				gridGap: '10px',
				width: '75vw',
				marginLeft: '260px',
			}}>
			{champNames.map((name) => (
				<Link to={`/${name}`} key={name} className='champText'>
					<p>{name}</p>
					<img
						style={{
							height: '200px',
							border: '2px solid black',
							borderRadius: '8px',
						}}
						src={imageUrl + name + '_0.jpg'}
						alt={name}
					/>
				</Link>
			))}
		</div>
	);
};

export default ChampionGrid;
