import { css } from "styled-components";

// Define breakpoints as needed
const breakpoints = {
  mobile: 520, // px
  tablet: 768, // px
  desktop: 1024, // px
  largeDesktop: 1440, // px
};

/**
 * mobile: helper function to create consistent media query for mobile
 * @param {*} styles
 * @returns {string}
 */
export const mobile = (styles) => css`
  @media (max-width: ${breakpoints.mobile}px) {
    ${styles}
  }
`;

/**
 * tablet: helper function to create consistent media query for tablet
 * @param {*} styles
 * @returns {string}
 */
export const tablet = (styles) => css`
  @media (max-width: ${breakpoints.tablet}px) {
    ${styles}
  }
`;

/**
 * desktop: helper function to create consistent media query for desktop
 * @param {*} styles
 * @returns {string}
 */
export const desktop = (styles) => css`
  @media (max-width: ${breakpoints.desktop}px) {
    ${styles}
  }
`;

/**
 * largeDesktop: helper function to create consistent media query for large desktop
 * @param {*} styles
 * @returns {string}
 */
export const largeDesktop = (styles) => css`
  @media (max-width: ${breakpoints.largeDesktop}px) {
    ${styles}
  }
`;