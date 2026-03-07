// External Imports
import { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { styled, css } from 'styled-components';

// Internal Imports
// Styles
import { tablet } from '@/styles/mediaQueries';

const StyledNav = styled.div`
  ${({ theme, $variant }) => css`
    font-family: ${theme.fonts.paragraph};
    font-size: 1.3rem;

    margin-left: auto;

    .patternImage {
      display: none;
    }

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
      @keyframes menuFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
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
        animation: menuFadeIn 0.4s ease-in-out;
        .patternImage {
          display: block;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left;
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
          pointer-events: none;
          &.loaded {
            opacity: 0.06;
          }
        }
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
  const [patternLoaded, setPatternLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (className.includes('open')) {
      setPatternLoaded(false);
      // Double rAF ensures opacity:0 is painted before transitioning in,
      // whether the image is freshly loaded or already cached.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (imgRef.current?.complete) {
            setPatternLoaded(true);
          }
        });
      });
    }
  }, [className]);

  return (
    <StyledNav
      role="presentation"
      $variant={variant}
      className={'nav ' + className}
      onClick={onClick}
    >
      <img
        ref={imgRef}
        src="/media/mountain_pattern.png"
        alt=""
        aria-hidden="true"
        className={`patternImage${patternLoaded ? ' loaded' : ''}`}
        onLoad={() => setPatternLoaded(true)}
      />
      <span className="navItem">
        <Link to="/services">Services</Link>
      </span>
      <span className="navItem">
        <Link to="/portfolio">Portfolio</Link>
      </span>
      <span className="navItem">
        <Link to="/about">About</Link>
      </span>
      <span className="navItem">
        <Link to="/home#contact">Contact</Link>
      </span>
    </StyledNav>
  );
}

export default Nav;
