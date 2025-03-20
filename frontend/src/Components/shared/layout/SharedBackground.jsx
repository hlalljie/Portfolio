// External Imports
import { useContext } from 'react';
import styled from 'styled-components';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Styles
import { adaptiveBackgroundImage } from '@/styles/adaptiveBackgroundImage';

/**
 * StyledSharedBackground: Styles the shared background for multiple sections
 * @param {Object} props - The properties for the StyledSharedBackground component.
 * @param {Object} props.$backgroundImageData - The data for the background image.
 * @param {boolean} props.$useStaticData - Whether to use static data.
 * @param {string} props.$imgPosition - The position of the background image.
 * @param {string} props.className - The className for the StyledSharedBackground component.
 * @returns {JSX.Element}
 */
const StyledSharedBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: ${({ $imgPosition }) => $imgPosition};
  section:not(.overlay) {
    background: transparent;
  }
  ${({ $backgroundImageData, $useStaticData }) =>
    adaptiveBackgroundImage($backgroundImageData, $useStaticData)}
`;
/**
 * SharedBackground: Creates a shared background behind multiple sections
 * @param {{children: React.ReactNode, backgroundImage: string}} param0
 * @returns {JSX.Element}
 */
function SharedBackground({
  children,
  backgroundImageData,
  imgPosition = 'top',
  className = '',
}) {
  const { useStaticData } = useContext(AppContext);

  return (
    <StyledSharedBackground
      $backgroundImageData={backgroundImageData}
      $useStaticData={useStaticData}
      $imgPosition={imgPosition}
      className={className}
    >
      <div className="overlay">{children}</div>
    </StyledSharedBackground>
  );
}

export default SharedBackground;
