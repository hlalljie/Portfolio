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
      filter: grayscale(100%);
    }

    &:hover img {
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
        <img src="./src/assets/PortraitColor.jpg" alt="" />
      </div>
      <div className="textContainer">
        <h2 className="sectionTitle">About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet nunc odio. Mauris nulla metus, convallis in nisi et, sagittis
          imperdiet ipsum. Nullam vel lectus sit amet elit hendrerit
          sollicitudin at vestibulum sapien. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Nulla a pharetra risus. Aenean laoreet neque nunc, at venenatis velit
          consectetur vel. Suspendisse non blandit orci.
        </p>
      </div>
    </ThemedSection>
  );
}

export default HomeAbout;
