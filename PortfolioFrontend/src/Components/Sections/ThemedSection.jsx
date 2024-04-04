// PortfolioFrontend/src/Components/Sections/ThemedSection.jsx
import React from 'react';
import styled, { css } from 'styled-components';
import {theme} from '../../Theme';

// Define your themes
const colorThemes = {
  light: {
    backgroundColor: theme.colors.white,
    color: theme.colors.dark,
  },
  dark: {
    backgroundColor: theme.colors.dark,
    color: theme.colors.white,
  },
  default: colorThemes.light,
  // Add more themes as needed
};

// Define a styled component for the section
const StyledSection = styled.section`
  padding: 20px;
  border: 1px solid #ccc;

  /* Define the default theme */
  ${({ colorTheme }) => css`
    background-color: ${colorTheme.backgroundColor};
    color: ${colorTheme.color};
  `}
`;

const ThemedSection = ({ themeName = 'default', children }) => {
  // Check if the provided themeName exists, otherwise fallback to the default theme
  const sectionTheme = colorThemes[themeName] || colorThemes.default;

  return <StyledSection colorTheme={sectionTheme}>{children}</StyledSection>;
};

export default ThemedSection;
