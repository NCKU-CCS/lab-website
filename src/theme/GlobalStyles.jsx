import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    background-color: #fff;
    font-size: 18px; /* 1em = 18px */
    font-family: 'Open Sans', 'Roboto';
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  p {
    padding: 0;
    margin: 0;
  }

  ol, ul {
    list-style: none;
  }

  input, button {
    outline: none;
    border: none;

    &:focus {
      outline: none;
    }
  }
  
  a {
    color: #4D4D4D;
  }
`;
