import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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

const Burger = (props) => {
  return (
    <Container isOpen={props.isOpen} onClick={props.handleClick}>
      <span />
      <span />
      <span />
    </Container>
  );
}

export default Burger;