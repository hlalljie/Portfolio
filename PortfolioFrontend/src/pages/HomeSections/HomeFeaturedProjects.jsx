import ThemedSection from "../../Components/Sections/ThemedSection";
import { css } from "styled-components";
import ProjectList from "../../Components/UI/ProjectList";

const homeFeaturedProjectsStyles = css`
  padding: ${({ theme }) => theme.padding.largeSection};
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.withOpacity(theme.colors.fog, 0.2)} 5%,

    ${({ theme }) => theme.withOpacity(theme.colors.black, 0.8)} 40%,
    ${({ theme }) => theme.withOpacity(theme.colors.black, 1)} 90%
  );
  .sectionTitle {
    width: fit-content;
    color: ${({ theme }) => theme.colors.black};
    padding-bottom: 20px;
    background-color: ${(props) => props.theme.colors.fog};
    box-shadow: 0px 0 120px 120px ${(props) => props.theme.colors.fog};
  }
`;

/**
 * Home Featured Projects: Home Featured Projects Section
 * @returns {JSX.Element}
 */
function HomeFeaturedProjects() {
  return (
    <ThemedSection
      themeName="dark"
      additionalStyles={homeFeaturedProjectsStyles}
      className="overlay"
    >
      <h2 className="sectionTitle">Featured Projects</h2>
      <ProjectList featured />
    </ThemedSection>
  );
}

export default HomeFeaturedProjects;
