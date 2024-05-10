// Branding.jsx
import styled from "styled-components";
// import LogoIcon from "../../assets/hl_logo.svg?react";

const StyledBranding = styled.div.attrs({ className: "branding" })`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: 300;
  a {
    display: flex;
    align-items: center;
  }
  /* .logoIcon {
    margin-right: 10px;
    transform: scale(1);
  } */
`;

/**
 * Branding: Hosts Branding mark or text content for the site.
 * branding can be resized and styled where it is being used
 * @returns {JSX.Element}
 */
function Branding() {
  return (
    <StyledBranding>
      <a>
        {/* <LogoIcon className="logoIcon" scale={0.5} /> */}
        Hayden Lalljie
      </a>
    </StyledBranding>
  );
}

export default Branding;
