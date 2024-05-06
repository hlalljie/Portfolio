import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";
import Socials from "../../Components/Content/Socials";
import { mobile } from "../../styles/mediaQueries";

const homeContactStyles = css`
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
  ${mobile(css`
    height: fit-content;
    .textContainer {
      width: 100%;
    }
  `)}
`;

/**
 * Home Experience: Home Experience Section
 * @returns {JSX.Element}
 */
function HomeContact() {
  return (
    <ThemedSection
      themeName="dark"
      additionalStyles={homeContactStyles}
      className="homeContact"
      id="contact"
      sectionSize="small"
    >
      <div className="textContainer">
        <h2 className="sectionTitle">Contact Me</h2>
        <p>
          I'm always on the lookout for new projects, opportunities and
          connections. Feel free to reach out anytime.
        </p>
        <a href="mailto:hlalljie@gmail.com">hlalljie@gmail.com</a>
        <Socials />
      </div>
    </ThemedSection>
  );
}

export default HomeContact;
