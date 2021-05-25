import React, { useState, useEffect } from 'react';
import Youtube from './Youtube';

const Champion = ({ match, imageUrl }) => {
	const [details, setDetails] = useState({});
	const [youtubeId, setYoutubeId] = useState('');
	const champName = match.params.champion;

	useEffect(() => {
		fetch(
			`https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion/${champName}.json`
		)
			.then((res) => res.json())
			.then((res) => {
				setDetails(res.data[match.params.champion]);
			})
			.catch(() => {
				setDetails({ error: '-1' });
			});
	}, []);

	useEffect(() => {
		fetch(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${champName}%20highlights&key=${process.env.REACT_APP_GOOG_YT_API_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				setYoutubeId(res.items[0].id.videoId);
			})
			.catch(() => {
				setYoutubeId('-1');
			});
	}, []);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}>
			{!details.hasOwnProperty('error') ? (
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
					}}></div>
			) : (
				<p>There was an error loading champion data</p>
			)}

			<p style={{ textAlign: 'center', fontSize: '25px' }}>{details.title}</p>
			<div style={{ display: 'flex' }}>
				<div
					style={{
						width: '45vw',
						display: 'flex',
						flexDirection: 'column',
					}}>
					{youtubeId !== '-1' ? (
						<Youtube embedId={youtubeId} />
					) : (
						<p>There was an error loading the video</p>
					)}
				</div>
				<div
					style={{
						width: '45vw',
						display: 'flex',
						flexDirection: 'column',
					}}>
					<p style={{ fontSize: '22px' }}>{details.lore}</p>
				</div>
			</div>
		</div>
	);
};

export default Champion;
