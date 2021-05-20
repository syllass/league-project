import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Champion = ({ match, imageUrl }) => {
	const [details, setDetails] = useState({});
	const champName = match.params.champion;
	useEffect(() => {
		fetch(
			`http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion/${champName}.json`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setDetails(res.data[match.params.champion]);
			});
	}, []);
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}>
			<div
				style={{
					height: '40vh',
					width: '580px',
					backgroundImage: `url(${imageUrl + champName}_0.jpg`,
					boxShadow: '0 0 30px 30px rgba(40,44,52,0.98) inset',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'auto 40vh',
					borderRadius: '20px',
					margin: '0 auto',
				}}>
				{/* <img 
				className='fade'
				style={{
					height: '400px',
				}}
				src={imageUrl + champName + '_0.jpg'}
				alt={champName}
			/> */}
			</div>
			<p>{details.lore}</p>
			<p>hi</p>
		</div>
	);
};

export default Champion;
