import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Youtube from './Youtube';

const Champion = ({ match, imageUrl }) => {
	const [details, setDetails] = useState({});
	const [youtubeId, setYoutubeId] = useState('');
	const champName = match.params.champion;

	useEffect(() => {
		fetch(
			`http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion/${champName}.json`
		)
			.then((res) => res.json())
			.then((res) => {
				//console.log(res);
				setDetails(res.data[match.params.champion]);
			});
	}, []);

	useEffect(() => {
		fetch(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${champName}%20highlights&key=AIzaSyCNaJHsL2gatyRK2f0L_21VxvJe7AZ0id4`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.items);
				setYoutubeId(res.items[0].id.videoId);
			});
	}, []);

	//AIzaSyCNaJHsL2gatyRK2f0L_21VxvJe7AZ0id4
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
			<Youtube embedId={youtubeId} />
		</div>
	);
};

export default Champion;
