// External Imports
import styled from 'styled-components';

// Assets
import GithubIcon from '@/assets/GitHubLogo.svg?react';
import LinkedInIcon from '@/assets/LinkedInLogo.svg?react';
import TwitterXLogo from '@/assets/TwitterXLogo.svg?react';

const StyledSocials = styled.div.attrs({ className: 'socials' })`
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fonts.heading};
  display: flex;
  gap: ${(props) => props.$gap};
  height: fit-content;
`;

const StyledSocialLink = styled.a`
  flex-shrink: 0;
  display: block;
  margin: 0;
  min-height: 0;
  line-height: 0;
  .socialIcon {
    height: ${(props) => props.$size};
    width: ${(props) => props.$size};
    path {
      fill: ${(props) =>
        props.$variant === 'light'
          ? props.theme.colors.white
          : props.theme.colors.black};
    }
    polygon {
      fill: ${(props) =>
        props.$variant === 'light'
          ? props.theme.colors.white
          : props.theme.colors.black};
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
 * @param {Object} props - The properties for the socials component.
 * @param {string} props.variant - The color variant for the socials (light or dark).
 * @param {string} props.size - The size of the social icons (height and width which are the same).
 * @param {string} props.gap - The gap between the social icons.
 * @returns {JSX.Element}
 */
function Socials({ variant = 'light', size = '35px', gap = '10px' }) {
  if (variant !== 'light' && variant !== 'dark') {
    variant = 'light';
  }
  return (
    <StyledSocials $gap={gap}>
      <StyledSocialLink
        href="https://github.com/hlalljie"
        target="_blank"
        $variant={variant}
        $hoverColor="#8241F9"
        $size={size}
      >
        <GithubIcon className="socialIcon" aria-labelledby="GithubIconLabel" />
        <span id="GithubIconLabel" hidden>
          Visit my GitHub page
        </span>
      </StyledSocialLink>
      <StyledSocialLink
        href="https://www.linkedin.com/in/hayden-lalljie/"
        target="_blank"
        $variant={variant}
        $hoverColor="#0b65c2"
        $size={size}
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
        $variant={variant}
        $hoverColor="black"
        $size={size}
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
