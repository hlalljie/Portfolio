// External Imports
import { useContext } from 'react';
import { css } from 'styled-components';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Layouts
import ThemedSection from '@/Components/shared/layout/ThemedSection';
// Styles
import { tablet } from '@/styles/mediaQueries';
import { fadeIn, comeFromLeft } from '@/styles/animations';

const heroBannerStyles = css`
  ${({ theme }) => css`
    padding: ${theme.padding.largeSection};

    .bannerContent {
      display: flex;
      align-items: center;
      justify-content: left;
      min-height: calc(100vh - 40px);

      .textContainer {
        background-color: ${theme.colors.fog};
        width: 50%;
        box-shadow: 0px 0 120px 120px ${theme.colors.fog};
        animation: ${comeFromLeft} 2s, ${fadeIn} 2.5s ease-in-out forwards;
        padding: 10px 0;
        > h1 {
          color: ${theme.colors.dark};
        }
        .subHeadingWrapper {
          display: flex;
          justify-content: left;
          column-gap: 30px;
          > h3 {
            margin: 0 0 0 0;
            color: ${theme.colors.darkAccent};
          }
        }
      }
    }
    ${tablet(css`
      padding: 55px 7%;
      &.largeSection {
        min-height: 0;
      }

      .bannerContent {
        min-height: 0;
        .textContainer {
          width: 100%;
          background-color: ${theme.withOpacity(theme.colors.fog, 0.4)};
          box-shadow: 0px 0 120px 120px
            ${theme.withOpacity(theme.colors.fog, 0.4)};
          .subHeadingWrapper {
            text-align: center;
            column-gap: 15px;
            flex-wrap: wrap;

            .tree {
              display: none;
            }
          }
        }
      }
    `)}
  `}
`;

/**
 * HeroBanner: Home Hero Banner Section
 * @returns {JSX.Element}
 */
function HeroBanner() {
  const { pageData, dataLoading } = useContext(AppContext);

  if (dataLoading || !pageData) {
    return <div>Loading...</div>;
  }

  const sectionData = pageData['global']['homepage']['homeHeroBanner'];

  return (
    <ThemedSection themeName="light" additionalStyles={heroBannerStyles}>
      {(inView) => (
        <div className="bannerContent">
          <div className="textContainer">
            <h1>{sectionData['headline']}</h1>
            <div className="subHeadingWrapper">
              <h3>
                {' '}
                {sectionData['subHeadline'][0]}
                <span className="mobileOnly">,</span>
              </h3>
              <h3 className="tree">↟</h3>
              <h3>
                {sectionData['subHeadline'][1]}
                <span className="mobileOnly">,</span>
              </h3>
              <h3 className="tree">↟</h3>
              <h3>{sectionData['subHeadline'][2]}</h3>
            </div>
            <p className="largeP">{sectionData['paragraph']}</p>
          </div>
        </div>
      )}
    </ThemedSection>
  );
}

export default HeroBanner;
