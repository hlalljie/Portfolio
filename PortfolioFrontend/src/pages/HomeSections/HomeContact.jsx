import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";

const homeContactStyles = css`
  padding: ${(props) => props.theme.padding.largeSection};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  .imgContainer {
    box-sizing: border-box;
    width: 40%;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .textContainer {
    width: 50%;
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
    ></ThemedSection>
  );
}

export default HomeContact;
