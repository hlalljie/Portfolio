// External Imports
import { useState } from 'react';
import { styled, css } from 'styled-components';

// Internal Imports
// UI
import Branding from '@/Components/shared/ui/Branding';
import Nav from '@/Components/shared/ui/Nav';
import Socials from '@/Components/shared/ui/Socials';
// Styles
import { tablet } from '@/styles/mediaQueries';
import { fadeIn } from '@/styles/animations';
// Assets
import BurgerMenu from '@/assets/BurgerMenu.svg?react';
import CloseMenu from '@/assets/CloseMenu.svg?react';

const HeaderDiv = styled.div`
  ${({ theme, $overlapTopSection, $variant, $transparent, $animate }) => css`
    /* Layout */
    z-index: 100;
    position: ${$overlapTopSection ? 'absolute' : 'relative'};
    ${!$overlapTopSection &&
    !$transparent &&
    css`
      background-color: ${$variant === 'dark'
        ? theme.colors.white
        : theme.colors.black};
    `}
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    width: 100%;
    padding: 20px 20px;
    box-sizing: border-box;

    /* Animation */
    ${$animate &&
    css`
      animation: ${fadeIn} 1s ease-in-out;
    `}

    .socials {
      margin-left: 17px;
    }
    .burgerMenu,
    .closeMenu {
      display: none;
    }
    ${tablet(css`
      transform: translateZ(0);
      position: relative;
      ${!$transparent &&
      css`
        background-color: ${$variant === 'dark'
          ? theme.colors.white
          : theme.colors.black};
      `}
      .socials {
        margin-left: auto;
      }
      .burgerMenu {
        margin-left: 30px;
        transform: scale(2.5);
        /* Coloring */
        g path {
          stroke: ${$variant === 'dark'
            ? theme.colors.black
            : theme.colors.white};
        }
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
        fill: ${theme.colors.darkAccent};
        &.show {
          display: block;
        }
      }
    `)}
  `}
`;

/** @typedef {'light' | 'dark'} HeaderVariant */
export {};
/**
 * Header: Header Section to be used on all pages
 * @param {Object} props
 * @param {HeaderVariant} props.variant - Color scheme of header, 'dark' or 'light'
 * @param {boolean} props.transparent - Whether the header should be transparent
 * @param {boolean} props.animate - Whether the header should animate
 * @param {boolean} props.overlapTopSection - Whether the header should go over the top section, false and the header will be above the first section
 * @returns {JSX.Element}
 */
function Header({
  variant = 'dark',
  overlapTopSection = true,
  transparent = false,
  animate = true,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * closeMenu: Closes mobile menu
   * @returns {void}
   */
  const closeMenu = () => setMobileMenuOpen(false);
  return (
    <HeaderDiv
      $variant={variant}
      $overlapTopSection={overlapTopSection}
      $transparent={transparent}
      $animate={animate}
    >
      <Branding variant={variant} />
      <Nav
        variant={variant}
        className={mobileMenuOpen ? 'open' : 'closed'}
        onClick={closeMenu}
      />
      <Socials variant={variant} size="27px" gap="15px" />
      <BurgerMenu
        className={'burgerMenu ' + (mobileMenuOpen ? 'hide' : 'show')}
        onClick={() => setMobileMenuOpen(true)}
        scale={2}
      />
      <CloseMenu
        className={'closeMenu ' + (mobileMenuOpen ? 'show' : 'hide')}
        onClick={() => setMobileMenuOpen(false)}
      />
    </HeaderDiv>
  );
}

export default Header;
