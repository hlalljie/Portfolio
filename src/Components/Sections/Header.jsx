// Header.jsx
import { useState } from "react";
import Branding from "../Content/Branding";
import Nav from "../Content/Nav";
import { styled, css } from "styled-components";
import { tablet } from "../../styles/mediaQueries";
import BurgerMenu from "../../assets/BurgerMenu.svg?react";
import CloseMenu from "../../assets/CloseMenu.svg?react";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 20px 20px;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.black};
  .branding {
    a {
      color: ${(props) => props.theme.colors.black};
      font-size: 1.5rem;
    }
  }

  .nav {
    font-size: 1.3rem;
    a {
      text-decoration: none;
      padding: 10px;
      color: ${(props) => props.theme.colors.black};
    }
    a:hover {
      color: ${(props) => props.theme.colors.darkAccent};
    }
  }
  .burgerMenu,
  .closeMenu {
    display: none;
  }
  ${tablet(css`
    position: relative;
    .nav.closed {
      display: none;
    }
    .nav.open {
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
      background-color: ${(props) => props.theme.colors.white};
      .navItem {
        margin: 10px 0;
        a {
          font-size: 2.5rem;
          color: ${(props) => props.theme.colors.darkAccent};
        }
        &:hover a {
          color: ${(props) => props.theme.colors.dark};
        }
      }
    }
    .burgerMenu {
      transform: scale(2.5);
      &.show {
        display: block;
      }
    }
    .closeMenu {
      transform: scale(1.4);
      position: fixed;
      top: 30px;
      right: 15px;
      z-index: 11;
      fill: ${(props) => props.theme.colors.darkAccent};
      &.show {
        display: block;
      }
    }
  `)}
`;

/**
 * Header: Header Section to be used on all pages
 * @returns {JSX.Element}
 */
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * closeMenu: Closes mobile menu
   * @returns {void}
   */
  const closeMenu = () => setMobileMenuOpen(false);
  return (
    <HeaderDiv>
      <Branding />
      <BurgerMenu
        className={"burgerMenu " + (mobileMenuOpen ? "hide" : "show")}
        onClick={() => setMobileMenuOpen(true)}
        scale={2}
      />
      <CloseMenu
        className={"closeMenu " + (mobileMenuOpen ? "show" : "hide")}
        onClick={() => setMobileMenuOpen(false)}
      />
      <Nav className={mobileMenuOpen ? "open" : "closed"} onClick={closeMenu} />
    </HeaderDiv>
  );
}

export default Header;