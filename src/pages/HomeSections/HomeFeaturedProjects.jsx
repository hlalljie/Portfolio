/* Libraries */
import { styled, css } from "styled-components";

/* Components */
import ThemedSection from "../../Components/Sections/ThemedSection";
import ProjectList from "../../Components/UI/ProjectList";

/* Styles */
import { mobile } from "../../styles/mediaQueries";
import { fadeIn } from "../../styles/animations";

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
  .projectCard {
    &:hover {
      background-color: ${(props) =>
        props.theme.withOpacity(props.theme.colors.black, 0.1)};
      box-shadow: 0px 0 80px 20px
        ${(props) => props.theme.withOpacity(props.theme.colors.black, 0.1)};
      .imgContainer {
        filter: grayscale(0%);
      }
      .technologies li {
        color: ${({ theme }) => theme.colors.darkAccent};
      }
    }
    .imgContainer {
      filter: grayscale(100%);
      transition: filter 0.3s ease-in;
    }
  }
  ${mobile(css`
    .projectCard {
      .imgContainer {
        filter: grayscale(0%);
      }
    }
  `)}
`;

const AnimatedHomeFeaturedProjects = styled.div`
  opacity: ${(props) => (props.$inView ? 1 : 0)};
  animation: ${(props) =>
    props.$inView
      ? css`
          ${fadeIn} 1s ease-in-out
        `
      : "none"};
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
      id="featured-projects"
    >
      {(inView) => (
        <AnimatedHomeFeaturedProjects $inView={inView}>
          <h2 className="sectionTitle">Featured Projects</h2>
          <ProjectList featured />
        </AnimatedHomeFeaturedProjects>
      )}
    </ThemedSection>
  );
}

export default HomeFeaturedProjects;
