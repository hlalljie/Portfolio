// SharedBackground.jsx
import styled from "styled-components";

const StyledSharedBackground = styled.div`
  width: 100%;
  background-image: url(${({ $backgroundImage600w }) => $backgroundImage600w});
  background-size: cover;
  background-position: ${({ $imgPosition }) => $imgPosition};
  section:not(.overlay) {
    background: transparent;
  }
  @media only screen and (min-width: 601px),
    only screen and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url(${({ $backgroundImage1200w }) =>
      $backgroundImage1200w});
  }
  @media only screen and (min-width: 1201px),
    only screen and (min-width: 601px) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url(${({ $backgroundImage2400w }) =>
      $backgroundImage2400w});
  }
`;
/**
 * SharedBackground: Creates a shared background behind multiple sections
 * @param {{children: React.ReactNode, backgroundImage: string}} param0
 * @returns {JSX.Element}
 */
function SharedBackground({
  children,
  imgName,
  imgExtension = ".jpg",
  imgPath = "./src/assets/",
  imgPosition = "top",
  className = "",
}) {
  return (
    <StyledSharedBackground
      $backgroundImage2400w={`${imgPath}${imgName}2400w${imgExtension}`}
      $backgroundImage1200w={`${imgPath}${imgName}1200w${imgExtension}`}
      $backgroundImage600w={`${imgPath}${imgName}600w${imgExtension}`}
      $imgPosition={imgPosition}
      className={className}
    >
      <div className="overlay">{children}</div>
    </StyledSharedBackground>
  );
}

export default SharedBackground;
