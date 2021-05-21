import React, { useState, useEffect } from 'react';
import Champion from './Champion';
import { Link, Route } from 'react-router-dom';

const ChampionGrid = ({ champNames, setChampNames, imageUrl, extra }) => {
	const search = (e) => {
		const filteredState = extra.filter((champ) =>
			champ.toLowerCase().startsWith(e.target.value.toLowerCase())
		);
		setChampNames(filteredState);
	};
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<form>
				<input type='text' onChange={search} />
			</form>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
					gridGap: '10px',
					width: '75vw',
				}}>
				{champNames.map((name) => (
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
				))}
			</div>
		</div>
	);
};

export default ChampionGrid;
