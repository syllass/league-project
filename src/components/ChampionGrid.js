import React, { useState, useEffect } from 'react';
import Champion from './Champion';
import { Link, Route } from 'react-router-dom';

const ChampionGrid = ({ champNames, imageUrl }) => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				gridGap: '10px',
				width: '75vw',
			}}>
			{champNames.map((name) => {
				return (
					<Link to={`/${name}`} key={name} style={{ textDecoration: 'none' }}>
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
				);
			})}
		</div>
	);
};

export default ChampionGrid;
