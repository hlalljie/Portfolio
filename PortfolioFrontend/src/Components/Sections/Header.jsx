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
  width: 100%;
  padding: 20px 20px;
  box-sizing :border-box;
  color: ${props => props.theme.colors.black};

  .branding {
    font-size: 1.5rem;
  }

  .nav {
    font-size: 1.1rem;
    a {
        text-decoration: none;
        padding: 10px;
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
