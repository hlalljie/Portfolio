// SharedBackground.jsx
import styled from "styled-components";

const StyledSharedBackground = styled.div`
  width: 100%;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: ${({ $imgPosition }) => $imgPosition};
  section:not(.overlay) {
    background: transparent;
  }
`;
/**
 * SharedBackground: Creates a shared background behind multiple sections
 * @param {{children: React.ReactNode, backgroundImage: string}} param0
 * @returns {JSX.Element}
 */
function SharedBackground({
  children,
  backgroundImage,
  imgPosition = "top",
  className = "",
}) {
  return (
    <StyledSharedBackground
      $backgroundImage={backgroundImage}
      $imgPosition={imgPosition}
      className={className}
    >
      <div className="overlay">{children}</div>
    </StyledSharedBackground>
  );
}

export default SharedBackground;
