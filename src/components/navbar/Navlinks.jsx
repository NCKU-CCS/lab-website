import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';
import linkConfig from '../../constants/routes';
import Burger from './Burger';

const Container = styled.div`
	display: flex;
`;

const ListContainer = styled.div`
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

	@media (max-width: 800px) {
		position: absolute;
		right: ${props => props.isOpen ? '0px' : '-150px'};
		width: 150px;
		display: inline-block;
		transform: translateY(90px);
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
		li{
			margin: 0.5rem 0px;
			display: ${props => props.isOpen ? {} : 'none'}
		}
		a {
			font-size: 1.25rem;
			line-height: 1.5;
		}
	}
`;

const Navlinks = () => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const width = useWindowWidth();

	useEffect(() => {
		if(window.innerWidth > 800) {
			setBurgerOpen(false);
		}
	}, [width]);

	const handleClick = () => {
		setBurgerOpen(!burgerOpen);
	}
	
	return (
		<Container>
			<ListContainer isOpen={burgerOpen}>
				{linkConfig.map((link, index) => (
					<li key={index}>
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
			</ListContainer>
			<Burger isOpen={burgerOpen} handleClick={handleClick}/>
		</Container>
	);
}

export default Navlinks