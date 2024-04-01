// Branding.jsx
import styled from 'styled-components';

const StyledBranding = styled.div.attrs({ className: 'branding' })`
    font-family: ${props => props.theme.fonts.branding};
`;

function Branding() {
  return (
    <StyledBranding>
      <a>My Name</a>
    </StyledBranding>
  );
}

export default Branding;
