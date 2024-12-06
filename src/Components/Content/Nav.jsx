import { HashLink as Link } from 'react-router-hash-link';

import { styled, css } from 'styled-components';
import { tablet } from '../../styles/mediaQueries';

const StyledNav = styled.div`
  ${({ theme, $variant }) => css`
    font-family: ${theme.fonts.paragraph};
    font-size: 1.3rem;

    margin-left: auto;

    a {
      text-decoration: none;
      padding: 10px;
      color: ${$variant === 'dark' ? theme.colors.black : theme.colors.white};
    }
    a:hover {
      color: ${$variant === 'dark'
        ? theme.colors.darkAccent
        : theme.colors.fog};
    }

    /* Tablet and smaller */
    ${tablet(css`
      &.closed {
        display: none;
      }
      &.open {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.white};
        .navItem {
          margin: 10px 0;
          a {
            font-size: 2.5rem;
            color: ${theme.colors.darkAccent};
          }
          &:hover a {
            color: ${theme.colors.dark};
          }
        }
      }
    `)}
  `}
`;

/**
 * Nav: Hosts navigation links to be used in different places throughout the site
 * while they have default styles, they can be restyled as needed
 * @param {string} className - Additional class name for nav components, mainly used for dynamic formatting
 * @returns {JSX.Element}
 */
function Nav({ variant = 'dark', className = '', onClick = () => {} }) {
  return (
    <StyledNav
      role="presentation"
      $variant={variant}
      className={'nav ' + className}
      onClick={onClick}
    >
      <span className="navItem">
        <Link to="/home#experience">Experience</Link>
      </span>
      <span className="navItem">
        <Link to="/home#featured-projects">Featured Projects</Link>
      </span>
      <span className="navItem">
        <Link to="/home#about">About</Link>
      </span>
      <span className="navItem">
        <Link to="/home#contact">Contact</Link>
      </span>
    </StyledNav>
  );
}

export default Nav;
