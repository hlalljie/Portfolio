// SharedBackground.jsx
import styled from "styled-components";


const StyledSharedBackground = styled.div`
    background-image: url(${({ $backgroundImage }) => $backgroundImage});
    background-size: cover;
    section{
        background: transparent !important;
    }
`
/**
 * SharedBackground: Creates a shared background behind multiple sections
 * @param {{children: React.ReactNode, backgroundImage: string}} param0 
 * @returns {JSX.Element}
 */
function SharedBackground({ children, backgroundImage }) {
  return (
    <StyledSharedBackground $backgroundImage={backgroundImage}>
      {children}
    </StyledSharedBackground>
  );
}

export default SharedBackground;