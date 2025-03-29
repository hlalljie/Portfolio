// External Imports
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Internal Imports
// Styles
import theme from '@/styles/theme';
import { tablet } from '@/styles/mediaQueries';

const colorThemes = {
  light: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
  },
  dark: {
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
  },
  // Default theme as a fallback
  default: {
    backgroundColor: theme.colors.white, // Default background color
    color: theme.colors.black, // Default color
  },
};

// Apply transient props with the $ prefix to avoid passing them to the DOM
const StyledSection = styled.section`
  width: 100%;
  box-sizing: border-box;

  ${({ $themeName, $backgroundOpacity }) => {
    const { backgroundColor, color } =
      colorThemes[$themeName] || colorThemes.default;
    return css`
      background-color: ${theme.withCorrectedOpacity(
        backgroundColor,
        $backgroundOpacity
      )};
      color: ${color};
    `;
  }}

  ${({ $width }) =>
    css`
      padding: ${theme.padding[$width + 'Section']};
      ${tablet(css`
        padding: ${theme.padding.fullWidthSection};
      `)}
    `}


  ${({ $additionalStyles }) => $additionalStyles}
`;
/**
 * ThemedSection: Creates a section allowing a choice of predefined color themes,
 * as well as some default section styles
 * @param {Object} props - The properties for the ThemedSection component.
 * @param {string} props.themeName - The name of the color theme to apply.
 * @param {string} props.additionalStyles - Additional styles to apply to the section.
 * @param {string} props.className - The optional className for the ThemedSection component.
 * @param {number} props.backgroundOpacity - The opacity of the background color.
 * @param {string} props.id - The optional id attribute for the ThemedSection component.
 * @param {string} props.width - The width of the section.
 * @param {React.ReactNode} props.children - The children of the ThemedSection component.
 * @returns {JSX.Element}
 */
const ThemedSection = ({
  themeName = 'default',
  additionalStyles,
  className = '',
  backgroundOpacity = 1,
  id = '',
  width = 'large',
  children,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <StyledSection
      $themeName={themeName}
      $additionalStyles={additionalStyles}
      $width={width}
      $backgroundOpacity={backgroundOpacity}
      className={className + ' ' + themeName + ' ' + width + 'WidthSection'}
      id={id}
      ref={ref}
    >
      {children(inView)}
    </StyledSection>
  );
};

export default ThemedSection;
