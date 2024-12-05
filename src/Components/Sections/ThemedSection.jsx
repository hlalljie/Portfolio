import styled, { css } from 'styled-components';
import theme from '../../Theme';
import { useInView } from 'react-intersection-observer';

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

  ${({ $themeName }) => {
    const { backgroundColor, color } =
      colorThemes[$themeName] || colorThemes.default;
    return css`
      background-color: ${backgroundColor};
      color: ${color};
    `;
  }}

  ${({ $additionalStyles }) => $additionalStyles}
`;
/**
 * ThemedSection: Creates a section allowing a choice of predefined color themes,
 * as well as some default section styles
 * @param {{themeName: string, additionalStyles: object, children: React.ReactNode}} param0
 * @returns {JSX.Element}
 */
const ThemedSection = ({
  themeName = 'default',
  additionalStyles,
  className = '',
  id = '',
  sectionSize = 'large',
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
      className={className + ' ' + themeName + ' ' + sectionSize + 'Section'}
      id={id}
      ref={ref}
    >
      {children(inView)}
    </StyledSection>
  );
};

export default ThemedSection;
