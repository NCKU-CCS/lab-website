import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';

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
		li{
			margin: 0.5rem 0px;
			display: ${props => props.isOpen ? {} : 'none'}
		}
		a {
			font-size: 1.25rem;
		}
	}
`;

const Burger = styled.div`
	display: none;

	span {
		width: 40px;
		height: 5px;
		margin: 2px 0px;
		background-color: #50B58E;
		transition-duration: 0.3s;
	}

	:hover {
		cursor: pointer;
	}

	@media (max-width: 800px) {
		display: flex;
		justify-content: center;
		flex-direction: column;

		span:nth-child(1) {
			transform: 
				translateY(${props => props.isOpen ? '9px' : '0px'}) 
				rotate(${props => props.isOpen ? '45deg' : '0deg'});
		}

		span:nth-child(2) {
			opacity: ${props => props.isOpen ? 0 : 1};
		}

		span:nth-child(3) {
			transform: 
				translateY(${props => props.isOpen ? '-9px' : '0px'}) 
				rotate(${props => props.isOpen ? '-45deg' : '0deg'});
		}
	}
`;

const Navlinks = () => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	const width = useWindowWidth();
	
	const linkConfig = [
		{name: 'Home', ref: '/'},
		{name: 'Our Works', ref: '/our_works'},
		{name: 'Advisor', ref: '/advisor'},
		{name: 'Members', ref: '/members'},
		{name: 'Contact Us', ref: '/contact_us'},
	];

	useEffect(() => {
		if(window.innerWidth > 800) {
			setBurgerOpen(false);
		}
	}, [width]);
	
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
			<Burger isOpen={burgerOpen} onClick={() => {setBurgerOpen(!burgerOpen)}}>
				<span />
				<span />
				<span />
			</Burger>
		</Container>
	);
}

export default Navlinks