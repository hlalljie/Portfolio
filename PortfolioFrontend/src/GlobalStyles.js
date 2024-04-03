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
        font: ${props => props.theme.fonts.heading};
        font-size: 3.5rem;
    }
    h3{
        font: ${props => props.theme.fonts.subheading};
        font-size: 1.7rem;
    }
    a:visited{
        color: inherit;
    }
    p{
        font: ${props => props.theme.fonts.paragraph};
        font-size: 1.4rem;
        line-height: 2rem;
    }
`;

export default GlobalStyle;