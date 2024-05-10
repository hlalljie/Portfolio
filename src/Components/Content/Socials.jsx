import styled from "styled-components";
import GithubIcon from "../../assets/GitHubLogo.svg?react";
import LinkedInIcon from "../../assets/LinkedInLogo.svg?react";
import TwitterXLogo from "../../assets/TwitterXLogo.svg?react";

const StyledSocials = styled.div.attrs({ className: "socials" })`
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fonts.heading};
  display: flex;
  gap: 10px;
`;

const StyledSocialLink = styled.a`
  display: block;
  margin: 0;
  min-height: 0;
  .socialIcon {
    path {
      fill: ${(props) => props.theme.colors.white};
    }
    polygon {
      fill: ${(props) => props.theme.colors.white};
    }
  }
  .socialIcon:hover {
    path {
      fill: ${(props) => props.$hoverColor};
    }
    polygon {
      fill: ${(props) => props.$hoverColor};
    }
  }
`;

/**
 * Socials: A component that renders a list of social media links as icons.
 * @returns {JSX.Element}
 */
function Socials() {
  return (
    <StyledSocials>
      <StyledSocialLink
        href="https://github.com/hlalljie"
        target="_blank"
        $hoverColor="#8241F9"
      >
        <GithubIcon className="socialIcon" aria-labelledby="GithubIconLabel" />
        <span id="GithubIconLabel" hidden>
          Visit my GitHub page
        </span>
      </StyledSocialLink>
      <StyledSocialLink
        href="https://www.linkedin.com/in/hayden-lalljie/"
        target="_blank"
        $hoverColor="
        #0b65c2"
      >
        <LinkedInIcon
          className="socialIcon"
          aria-labelledby="LinkedInIconLabel"
        />
        <span id="LinkedInIconLabel" hidden>
          Visit my LinkedIn page
        </span>
      </StyledSocialLink>
      <StyledSocialLink
        href="https://twitter.com/haydondo"
        target="_blank"
        $hoverColor="black"
      >
        <TwitterXLogo
          className="socialIcon"
          aria-labelledby="TwitterIconLabel"
        />
        <span id="TwitterIconLabel" hidden>
          Visit my Twitter page
        </span>
      </StyledSocialLink>
    </StyledSocials>
  );
}

export default Socials;
