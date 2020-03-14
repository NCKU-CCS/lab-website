import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
	width: 40vw;
	display: flex;
	justify-content: space-between;

	li {
		margin: auto 0px;
		list-style: none;
	}

	a {
		font-size: 0.8rem;
		text-decoration: none;
		white-space: nowrap;
	}
`;

const Navlinks = () => {
	
	const linkConfig = [
		{name: 'Home', ref: '/'},
		{name: 'Our Works', ref: '/our_works'},
		{name: 'Advisor', ref: '/advisor'},
		{name: 'Members', ref: '/members'},
		{name: 'Contact Us', ref: '/contact_us'},
	];
	
	return (
		<Container>
			{linkConfig.map((link, index) => (
				<li>
					<NavLink 
						exact 
						to = {link.ref} 
						activeStyle = {{ color: '#50B58E', fontWeight: 'bold' }}
						key = {index}
					>
						<p>{link.name}</p>
					</NavLink>
				</li>
			))}
		</Container>
	);
}

export default Navlinks