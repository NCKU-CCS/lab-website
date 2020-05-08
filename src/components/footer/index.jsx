import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FooterInfo from './FooterInfo';
import useWindowWidth from '../../hooks/useWindowWidth';

import netDBIcon from '../../static/footer/netdb_icon.png';
import netDBLogo from '../../static/footer/netdblogo.png';

const Container = styled.div`
  width: 100%;
	height: 100px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
  background-color: #F7f7f7;
  padding: 10px 10px;
`;

const NetDBIcon = styled.img`
  height: 40px;
	margin: auto 0px;
`;

const Footer = () => {
  const width = useWindowWidth();
  const [iconSrc, setIconSrc] = useState(netDBIcon);

	useEffect(() => {
    if (width > 500) {
      setIconSrc(netDBIcon);
    } else {
      setIconSrc(netDBLogo);
    }
	}, [width]);

  return (
    <Container>
      <NetDBIcon src={iconSrc} alt='netDB Icon'/>
      <FooterInfo />
    </Container>
  );
}

export default Footer;