import { HashLink as Link } from 'react-router-hash-link';

import styled from 'styled-components';

const StyledNav = styled.div`
  font-family: ${(props) => props.theme.fonts.paragraph};
`;

/**
 * Nav: Hosts navigation links to be used in different places throughout the site
 * while they have default styles, they can be restyled as needed
 * @param {string} className - Additional class name for nav components, mainly used for dynamic formatting
 * @returns {JSX.Element}
 */
function Nav({ className = '', onClick = () => {} }) {
  return (
    <StyledNav className={'nav ' + className} onClick={onClick}>
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
