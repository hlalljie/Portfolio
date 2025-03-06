// External Imports
import { useContext } from 'react';
import { styled, css } from 'styled-components';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Layouts
import ThemedSection from '@/Components/shared/layout/ThemedSection';
// Styles
import { breakpoints, tablet } from '@/styles/mediaQueries';
import { fadeIn } from '@/styles/animations';

const homeAboutStyles = css`
  .aboutContent {
    padding: ${(props) => props.theme.padding.largeSection};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    .imgContainer {
      box-sizing: border-box;
      position: relative;
      width: 40%;
      padding-top: 40%;
      height: 0%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-radius: 10px;
        opacity: 1;
        z-index: 0; /* Ensures this image is below */
        filter: grayscale(10%);
      }
    }
    .textContainer {
      width: 50%;
    }
  }
  ${tablet(css`
    .aboutContent {
      flex-direction: column;
      .imgContainer {
        width: 100%;
        padding-top: 0;
        padding-bottom: 20px;

        img {
          position: relative;
          filter: grayscale(10%);
        }
      }
      .textContainer {
        width: 100%;
      }
    }
  `)}
`;

const AnimatedHomeAbout = styled.div`
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
function HomeAbout() {
  // Get context data
  const { pageData, dataLoading } = useContext(AppContext);

  if (dataLoading || !pageData) {
    return <div>Loading...</div>;
  }

  const sectionData = pageData['homeAbout'];
  return (
    <ThemedSection
      themeName="dark"
      additionalStyles={homeAboutStyles}
      className="homeAbout"
      id="about"
    >
      {(inView) => (
        <AnimatedHomeAbout $inView={inView}>
          <div className="aboutContent">
            <div className="imgContainer">
              <img
                src="/images/Portrait600w.jpg"
                srcSet="/images/Portrait600w.jpg 600w, /images/Portrait1200w.jpg 1200w"
                sizes={'(max-width: ' + breakpoints.tablet + 'px) 86vw, 43vw'}
                alt="Portrait of Hayden Lalljie"
                loading="lazy"
              />
            </div>
            <div className="textContainer">
              <h2 className="sectionTitle">{sectionData['title']}</h2>
              <p>{sectionData['paragraph']}</p>
            </div>
          </div>
        </AnimatedHomeAbout>
      )}
    </ThemedSection>
  );
}

export default HomeAbout;
