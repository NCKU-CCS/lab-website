import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';

import netDBIcon from '../../static/nav/netdb_icon.png';

const Navbar = styled.div`
	width: 100%;
	height: 90px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0px 4%;
`;

const NetDBIcon = styled.img`
	margin: auto 0px;
`;

const Nav = () => {
	return (
		<Navbar>
			<NetDBIcon src={netDBIcon} alt='netDB Icon'/>
			<Navlinks />
		</Navbar>
	);
}

export default Nav;