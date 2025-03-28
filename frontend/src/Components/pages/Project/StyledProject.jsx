// External Imports
import { styled, css } from 'styled-components';

// Internal Imports
// Utils
import { formatImageURL } from '@/utils/formatImageURL';
// Styles
import { tablet, mobile } from '@/styles/mediaQueries';

const StyledProject = styled.div`
  ${({ theme, $backgroundPattern, $staticContext }) => css`
    background-image: ${Object.hasOwn($backgroundPattern, 'svg')
      ? `url( ${formatImageURL(
          $backgroundPattern['svg']['url'],
          $staticContext,
          'patterns'
        )})`
      : 'none'};
    background-size: ${$backgroundPattern['size'] + '%'};
    .projectIntro {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 70px;
      overflow: hidden;
      padding-bottom: 70px;

      .introText {
        overflow: visible;

        h1 {
          margin-bottom: 25px;
        }
        hr {
          margin-bottom: 5px;
        }
        .subInfo {
          display: flex;
          justify-content: space-between;
          opacity: 0.8;
          margin-bottom: 45px;
          > * {
            margin-top: 5px;
          }
        }

        .otherInfo {
          list-style: none;
          padding-left: 0;
          margin-left: 0;
          margin-bottom: 50px;
          li {
            margin-bottom: 20px;
            .infoTitle {
              margin-block: 0;
              line-height: 1.7rem;
            }
            .infoContent {
              margin-block: 0;
              line-height: 1.5rem;
            }
          }
        }
        p {
          font-size: 1.4rem;
        }
      }
      .featuredImageContainer {
        box-sizing: border-box;
        min-height: 0;
        align-self: start;
        contain: size;
        padding: 20px;
        .featuredImage {
          max-width: 100%;
          height: 100%;
          box-shadow: 0px 0 80px 20px
            ${theme.withOpacity(theme.colors.fog, 0.1)};
        }
      }
    }
    .projectContent {
      padding-block: 50px;
      position: relative;
      z-index: 2;
      box-shadow: 0 0 50px 70px ${theme.colors.white};
    }

    /* Media Queries */
    // Tablet
    ${tablet(css`
      .projectIntro {
        display: flex;
        flex-direction: column;
        padding-bottom: 0;
        .featuredImageContainer {
          contain: none;
          height: 100vw;
          padding: 0 10vw;
          width: 100%;
          .featuredImage {
            width: 100%;
            max-height: 100%;
            object-fit: cover;
            object-position: top;
          }
        }
        .projectContent {
          transform: translateZ(0);
        }
      }
    `)}

    // Mobile
    ${mobile(css`
      .projectIntro {
        .featuredImageContainer {
          padding: 0px;
        }
      }
      .projectContent {
        transform: translateZ(0);
      }
    `)}
  `}
`;

export default StyledProject;
