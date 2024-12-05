// Branding.jsx
import { styled, css } from 'styled-components';
// import LogoIcon from "../../assets/hl_logo.svg?react";

const StyledBranding = styled.div.attrs({ className: 'branding' })`
  ${({ theme }) => css`
    font-family: ${theme.fonts.heading};
    font-weight: 300;
    a {
      color: ${({ $variant }) =>
        $variant === 'dark' ? theme.colors.black : theme.colors.white};
      font-size: 1.5rem;
      display: flex;
      align-items: center;
    }
    /* .logoIcon {
    margin-right: 10px;
    transform: scale(1);
  } */
  `}
`;

/**
 * Branding: Hosts Branding mark or text content for the site.
 * branding can be resized and styled where it is being used
 * @param {string} variant - Color scheme of branding, 'dark' or 'light'
 * @returns {JSX.Element}
 */
function Branding({ variant = 'dark' }) {
  return (
    <StyledBranding $variant={variant}>
      <a href="/home">
        {/* <LogoIcon className="logoIcon" scale={0.5} /> */}
        Hayden Lalljie
      </a>
    </StyledBranding>
  );
}

export default Branding;
