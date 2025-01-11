/* Libraries */
import { styled, css } from 'styled-components';
/* Components */
import ThemedSection from '../../Components/Sections/ThemedSection';
/* Styles */
import { breakpoints, tablet } from '../../styles/mediaQueries';
import { fadeIn } from '../../styles/animations';

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
              <h2 className="sectionTitle">About Me</h2>
              <p>
                I'm a software developer and educator with a passion for
                creating a positive impact through programming, education, and
                user-centric design. I have a Bachelor's in Computer Science
                from Sonoma State University, am a Certified Scrum Master, and
                have worked in a variety of different roles including
                management, design, education, and quality assurance. In my free
                time, I enjoy developing products, learning new skills, reading,
                playing video games, and spending time outdoors with family and
                friends.
              </p>
            </div>
          </div>
        </AnimatedHomeAbout>
      )}
    </ThemedSection>
  );
}

export default HomeAbout;
