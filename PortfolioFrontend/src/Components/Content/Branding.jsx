// Branding.jsx
import styled from "styled-components";

const StyledBranding = styled.div.attrs({ className: "branding" })`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 300;
`;

/**
 * Branding: Hosts Branding mark or text content for the site.
 * branding can be resized and styled where it is being used
 * @returns {JSX.Element}
 */
function Branding() {
  return (
    <StyledBranding>
      <a>Hayden Lalljie</a>
    </StyledBranding>
  );
}

export default Branding;
