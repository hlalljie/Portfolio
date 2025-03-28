// External imports
import { styled, css } from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

// Internal Imports
// Styles
import theme from '@/styles/theme';

const StyledLinkIcons = styled.div`
  ${({ $variant }) => css`
    svg {
      transform: scale(1.2);
      transform-origin: left center;
      path {
        fill: ${$variant === 'light' ? theme.colors.white : theme.colors.black};
      }
    }
  `}
`;

export const LinkIcons = ({
  url = null,
  github = null,
  itchio = null,
  variant = 'light',
}) => {
  return (
    <StyledLinkIcons className="linkContainer" $variant={variant}>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label="View Live Website"
        >
          <LaunchIcon aria-hidden="true" />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" aria-label="View Project Github">
          <GitHubIcon aria-hidden="true" />
        </a>
      )}
    </StyledLinkIcons>
  );
};
