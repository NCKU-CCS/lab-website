import React from 'react';
import styled from 'styled-components';
import infoConfig from '../../constants/footerInfo';

const Container = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
		list-style: none;
    display: flex;
	}

  p {
    color: #999990;
    font-size: 13px;
    line-height: 25px;
  }

  img {
    width: auto;
    height: auto;
    max-width: 100%;
	  max-height: 100%;
    margin-right: 8px;
  }

  @media (max-width: 700px) {
    width: 250px;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const FooterInfo = () => {
  return (
    <Container>
      {infoConfig.map((item, index) => (
        <li key={index}>
          <img src={item.icon} alt={item.alt} />
          <p>{item.text}</p>
        </li>
      ))}
    </Container>
  );
}

export default FooterInfo;