import { styled, css } from 'styled-components';

const StyledProject = styled.div`
  ${({ theme }) => css`
    .projectIntro {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 70px;

      .introText {
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

      .featuredImage {
        max-width: 100%;
        margin: 10px;
        box-shadow: 0px 0 80px 20px ${theme.withOpacity(theme.colors.fog, 0.1)};
      }
    }
  `}
`;

export default StyledProject;
