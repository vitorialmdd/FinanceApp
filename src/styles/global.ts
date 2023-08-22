import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.background};
    font-family: 'Mulish', sans-serif;
  }
`;

