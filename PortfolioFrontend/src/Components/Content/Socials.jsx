import styled from "styled-components";
import GithubIcon from "../../assets/GitHubLogo.svg?react";
import LinkedInIcon from "../../assets/LinkedInLogo.svg?react";
import TwitterXLogo from "../../assets/TwitterXLogo.svg?react";

const StyledSocials = styled.div.attrs({ className: "socials" })`
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fonts.heading};
  display: flex;
  gap: 10px;
  a {
    display: block;
    margin: 0;
    min-height: 0;
  }
  .socialIcon path {
    fill: ${(props) => props.theme.colors.white};
  }
  .socialIcon polygon {
    fill: ${(props) => props.theme.colors.white};
  }
`;

/**
 * Socials: A component that renders a list of social media links as icons.
 * @returns {JSX.Element}
 */
function Socials() {
  return (
    <StyledSocials>
      <a href="https://github.com/hlalljie" target="_blank">
        <GithubIcon className="socialIcon" />
      </a>
      <a href="https://www.linkedin.com/in/hayden-lalljie/" target="_blank">
        <LinkedInIcon className="socialIcon" />
      </a>
      <a href="https://twitter.com/haydondo" target="_blank">
        <TwitterXLogo className="socialIcon" />
      </a>
    </StyledSocials>
  );
}

export default Socials;
