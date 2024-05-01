import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";

const homeContactStyles = css`
  padding: 50px;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .textContainer {
    width: 50%;
    text-align: center;
  }
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
      sectionSize="small"
    >
      <div className="textContainer">
        <h2 className="sectionTitle">Contact Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet nunc odio. Mauris nulla metus, convallis in.
        </p>
        <a href="mailto:hlalljie@gmail.com">hlalljie@gmail.com</a>
      </div>
    </ThemedSection>
  );
}

export default HomeContact;
