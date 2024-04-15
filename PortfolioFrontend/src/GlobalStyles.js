// PortfolioFrontend/src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    // Global styles
    body {
        margin: 0;
    }
    h1{
        font-family: ${props => props.theme.fonts.heading};
        font-weight: 300;
        font-size: 3.5rem;
        margin: 0 0 30px 0;
    }
    h2{
        font-family: ${props => props.theme.fonts.heading};
        font-weight: 300;
        font-size: 3rem;
        margin: 0 0 30px 0;
    }
    h3{
        font-family: ${props => props.theme.fonts.paragraph};
        font-weight: 500;
        font-size: 1.8rem;
    }
    h4{
        font-family: ${props => props.theme.fonts.paragraph};
        font-weight: 500;
        font-size: 1.3rem;
    }
    button{
        font-family: ${props => props.theme.fonts.paragraph};
        font-weight: 600;
        font-size: 1.2rem;
    }
    a:visited{
        color: inherit;
    }
    p, li{
        font-family: ${props => props.theme.fonts.paragraph};
        font-size: 1.6rem;
        font-weight: 420;
        line-height: 2.5rem;
    }
    .p1{
        font-size: 1.7rem;
    }
    .tree {
        font-weight: 100;
    }
`;

export default GlobalStyle;