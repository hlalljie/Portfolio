// Branding.jsx
import styled from 'styled-components';

const StyledBranding = styled.div.attrs({ className: 'branding' })`
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 300;
`;

function Branding() {
  return (
    <StyledBranding>
      <a>Hayden Lalljie</a>
    </StyledBranding>
  );
}

export default Branding;
