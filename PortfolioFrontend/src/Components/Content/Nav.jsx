import { HashLink as Link } from 'react-router-hash-link';

import styled from 'styled-components';

const StyledNav = styled.div.attrs({ className: 'nav' })`
  font-family: ${props => props.theme.fonts.paragraph};
`;

/**
 * Nav: Hosts navigation links to be used in different places throughout the site
 * while they have default styles, they can be restyled as needed
 * @returns {JSX.Element}
 */
function Nav(){
    return (
        <StyledNav>
            <span className='navItem'><Link to="/">Home</Link></span>
            <span className='navItem'><Link to="/about">About</Link></span>
            <span className='navItem'><Link to="/portfolio">Portfolio</Link></span>
        </StyledNav>
    )
}

export default Nav;