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

const servicesHeroStyles = css`
  ${({ theme }) => css`
    padding: ${theme.padding.largeSection};

    .heroContent {
      display: flex;
      align-items: center;
      justify-content: left;
      min-height: calc(100vh - 40px);

      .textContainer {
        width: 60%;
        animation: ${comeFromLeft} 2s, ${fadeIn} 2.5s ease-in-out forwards;

        > h1 {
          color: ${theme.colors.white};
          margin-bottom: 20px;
        }

        > p {
          color: ${theme.colors.grey};
        }
      }
    }

    ${tablet(css`
      padding: 55px 7%;

      .heroContent {
        min-height: 0;

        .textContainer {
          width: 100%;
        }
      }
    `)}
  `}
`;

/**
 * ServicesHero: Hero banner section for the Services page
 * @returns {JSX.Element}
 */
function ServicesHero() {
  const { pageData, dataLoading } = useContext(AppContext);

  if (dataLoading || !pageData) {
    return <div>Loading...</div>;
  }

  const sectionData = pageData['global']['services']['servicesHero'];

  return (
    <ThemedSection
      themeName="dark"
      additionalStyles={servicesHeroStyles}
      className="servicesHero"
    >
      {() => (
        <div className="heroContent">
          <div className="textContainer">
            <h1>{sectionData['headline']}</h1>
            <p className="largeP">{sectionData['paragraph']}</p>
          </div>
        </div>
      )}
    </ThemedSection>
  );
}

export default ServicesHero;
