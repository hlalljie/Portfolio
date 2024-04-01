// Branding.jsx
import styled from 'styled-components';

const StyledBranding = styled.div.attrs({ className: 'branding' })`
  /* Basic styles for Branding (optional) */
`;

function Branding() {
  return (
    <StyledBranding>
      <a>My Name</a>
    </StyledBranding>
  );
}

export default Branding;
