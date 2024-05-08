import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";
import { mobile } from "../../styles/mediaQueries";

const homeAboutStyles = css`
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
  ${mobile(css`
    flex-direction: column;
    .imgContainer {
      width: 100%;

      img {
        position: relative;
        filter: grayscale(10%);
      }
    }
    .textContainer {
      width: 100%;
    }
  `)}
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
      <div className="imgContainer">
        <img src="./src/assets/Portrait1200w.jpg" alt="" />
      </div>
      <div className="textContainer">
        <h2 className="sectionTitle">About Me</h2>
        <p>
          I'm a software developer and educator with a passion for creating a
          positive impact through programming, education, user-centric design. I
          have a Bachelor's in Computer Science from Sonoma State University am
          a Certified Scrum Master, and have worked in a variety of different
          roles including management, design, education, quality assurance. In
          my free time I enjoy developing products, learning new skills,
          reading, playing video games, and spending time outdoors with family
          and friends.
        </p>
      </div>
    </ThemedSection>
  );
}

export default HomeAbout;
