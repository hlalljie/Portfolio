import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";
import ExperienceSelector from "../../Components/UI/ExperienceSelector";

const homeExperienceStyles = css`
  padding: ${(props) => props.theme.padding.largeSection};
  .sectionTitle {
    //text-align: center;
  }
`;

/**
 * Home Experience: Home Experience Section
 * @returns {JSX.Element}
 */
function HomeExperience() {
  return (
    <ThemedSection themeName="light" additionalStyles={homeExperienceStyles}>
      <h2 className="sectionTitle">Experience</h2>
      <ExperienceSelector />
    </ThemedSection>
  );
}

export default HomeExperience;
