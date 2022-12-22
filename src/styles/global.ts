import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    font-family: 'Cairo', sans-serif;
  }

  body {
    background-color: #e5e5e5 !important;
    -webkit-font-smoothing: antialiased !important;
    font-weight: 600;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  #root {
    height: 100vh;
  }
`;