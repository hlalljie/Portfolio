// Header.jsx
import Branding from '../Content/Branding';
import Nav from '../Content/Nav';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  padding: 10px;
  width: 100%;

  .branding {
    font-size: 20px;
  }

  .nav {
    font-size: 1rem;
    a {
        text-decoration: none;
    }
  }

`;

function Header() {

  return (
    <HeaderDiv>
      <Branding/>
      <Nav />
    </HeaderDiv>
  );
}

export default Header;
