import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ match }) => {
	return (
		<>
			{match.params.champion ? (
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div style={{ display: 'inline', textAlign: 'left' }}>
						<Link to='/'>
							<img
								style={{ height: '40px', width: '40px' }}
								src='../images_prev_ui.png'
								alt=''
							/>
						</Link>
					</div>
					<>
						<h1 style={{ display: 'inline', margin: '0 auto' }}>
							{match.params.champion}
						</h1>
					</>
				</div>
			) : (
				<h1>League of Legends Champions</h1>
			)}
		</>
	);
};

export default Header;
