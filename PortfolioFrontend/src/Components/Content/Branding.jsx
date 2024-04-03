// Branding.jsx
import styled from 'styled-components';

const StyledBranding = styled.div.attrs({ className: 'branding' })`
    font: ${props => props.theme.fonts.branding};
`;

function Branding() {
  return (
    <StyledBranding>
      <a>Hayden Lalljie</a>
    </StyledBranding>
  );
}

export default Branding;
