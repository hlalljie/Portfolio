// External Imports
import { useContext } from 'react';
import { css, styled } from 'styled-components';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Layouts
import ThemedSection from '@/Components/shared/layout/ThemedSection';
import Socials from '@/Components/shared/ui/Socials';
// Styles
import { mobile } from '@/styles/mediaQueries';
import { fadeIn } from '@/styles/animations';

const homeContactStyles = css`
  .contactContainer {
    padding: 50px;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .textContainer {
      width: 50%;
      text-align: center;
    }
    .socials {
      justify-content: center;
      align-items: center;
      margin: 15px;
      gap: 15px;
      .socialIcon {
        width: 35px;
        height: 35px;
      }
    }
  }
  ${mobile(css`
    .contactContainer {
      height: fit-content;
      .textContainer {
        width: 100%;
      }
    }
  `)}
`;

const AnimatedHomeContact = styled.div`
  opacity: ${(props) => (props.$inView ? 1 : 0)};
  animation: ${(props) =>
    props.$inView
      ? css`
          ${fadeIn} 1s ease-in-out forwards
        `
      : 'none'};
`;

/**
 * Home Experience: Home Experience Section
 * @returns {JSX.Element}
 */
function HomeContact() {
  // Get context data
  const { pageData, dataLoading } = useContext(AppContext);

  if (dataLoading || !pageData) {
    return <div>Loading...</div>;
  }

  const sectionData = pageData['homeContact'];

  return (
    <ThemedSection
      themeName="dark"
      additionalStyles={homeContactStyles}
      className="homeContact"
      id="contact"
      sectionSize="small"
    >
      {(inView) => (
        <AnimatedHomeContact $inView={inView}>
          <div className="contactContainer">
            <div className="textContainer">
              <h2 className="sectionTitle">{sectionData['title']}</h2>
              <p>{sectionData['paragraph']}</p>
              <a href={'mailto:' + sectionData['email']}>
                {sectionData['email']}
              </a>
              <Socials />
            </div>
          </div>
        </AnimatedHomeContact>
      )}
    </ThemedSection>
  );
}

export default HomeContact;
