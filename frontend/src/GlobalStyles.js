// PortfolioFrontend/src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import { mobile, tablet } from './styles/mediaQueries';
import { css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
        width: 100%;
    }
    // Global styles
    body {
        margin: 0;
    }
    h1{
        font-family: ${(props) => props.theme.fonts.heading};
        font-weight: 300;
        font-size: 3.5rem;
        margin: 0 0 30px 0;
    }
    h2{
        font-family: ${(props) => props.theme.fonts.heading};
        font-weight: 300;
        font-size: 3rem;
        margin: 0 0 30px 0;
    }
    h3{
        font-family: ${(props) => props.theme.fonts.paragraph};
        font-weight: 500;
        font-size: 1.8rem;
    }
    h4{
        font-family: ${(props) => props.theme.fonts.paragraph};
        font-weight: 500;
        font-size: 1.3rem;
    }
    h5{
        font-family: ${(props) => props.theme.fonts.heading};
    }
    button{
        font-family: ${(props) => props.theme.fonts.paragraph};
        font-weight: 600;
        font-size: 1.2rem;
        background-color: transparent;
        border-radius: 5px;
        border-width: 2px;
        border-style: solid;
    }

    p, li, a{
        font-family: ${(props) => props.theme.fonts.paragraph};
        font-size: 1.6rem;
        font-weight: 420;
        line-height: 2.5rem;
    }a {
        color: ${(props) => props.theme.colors.white};
        text-decoration: none;
    }
    .largeP{
        font-size: 1.7rem;
    }
    .smallP{
        font-size: 1.3rem;
        line-height: 2.2rem;
    }
    .largeSection{
        min-height: 100vh;
    }
    .mediumSection{
        min-height: 75vh;
    }
    .smallSection{
        min-height: 50vh;
    }
    .tree {
        font-weight: 100;
    }
    .desktopOnly, .desktopTabletOnly{
        display: initial !important;
    }
    .mobileOnly, .tabletOnly, .mobileTabletOnly{
        display: none !important;
    }
    ${tablet(css`
      .desktopOnly {
        display: none !important;
      }
      .tabletOnly,
      .mobileTabletOnly {
        display: initial !important;
      }
      .largeSection {
        min-height: 0;
      }
    `)}
    ${mobile(css`
      .mobileOnly {
        display: initial !important;
      }
      .desktopTabletOnly,
      .tabletOnly {
        display: none !important;
      }
    `)}
    
`;

export default GlobalStyle;
