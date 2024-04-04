// PortfolioFrontend/src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    // Global styles
    body {
        background-color: #333333;
        color: #ffffff;
        margin: 0;
    }
    h1{
        font-family: ${props => props.theme.fonts.heading};
        font-weight: 300;
        font-size: 3.5rem;
    }
    h3{
        font-family: ${props => props.theme.fonts.paragraph};
        font-weight: 500;
        font-size: 1.7rem;
    }
    button{
        font-family: ${props => props.theme.fonts.paragraph};
        font-weight: 600;
        font-size: 1.2rem;
    }
    a:visited{
        color: inherit;
    }
    p{
        font-family: ${props => props.theme.fonts.paragraph};
        font-size: 1.4rem;
        line-height: 2rem;
    }
`;

export default GlobalStyle;