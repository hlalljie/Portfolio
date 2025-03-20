// External Imports
import { HashLink as Link } from 'react-router-hash-link';
import { styled, css } from 'styled-components';

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
      <Link to="/home">
        {/* <LogoIcon className="logoIcon" scale={0.5} /> */}
        Hayden Lalljie
      </Link>
    </StyledBranding>
  );
}

export default Branding;
