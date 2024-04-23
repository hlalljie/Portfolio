import ThemedSection from "../../Components/Sections/ThemedSection";
import { css, styled } from "styled-components";
import PortfolioItems from "../../data/PortfolioItems";

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
  const project = PortfolioItems.Projects[PortfolioItems.Featured[0]];

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

const StyledProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  width: 100%;

  .projectCard {
    width: calc((100% - 80px) / 3);
  }
`;

function ProjectList({ featured = false }) {
  return (
    <StyledProjectList>
      {featured
        ? PortfolioItems.Featured.map((project) => (
            <ProjectCard
              key={project}
              title={PortfolioItems.Projects[project].title}
              excerpt={PortfolioItems.Projects[project].excerpt}
              image={PortfolioItems.Projects[project].image}
            />
          ))
        : Object.keys(PortfolioItems.Projects).map((project) => (
            <ProjectCard
              key={project}
              title={PortfolioItems.Projects[project].title}
              excerpt={PortfolioItems.Projects[project].excerpt}
              image={PortfolioItems.Projects[project].image}
            />
          ))}
    </StyledProjectList>
  );
}

const StyledProjectCard = styled.div`
  .imgContainer {
    width: 100%;
    border-radius: 10px;
    padding-top: 80%;
    position: relative; /* Allows absolute positioning for children */
    img {
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; /* Ensures the image covers the area without distortion */
      object-position: top;
    }
  }
`;

function ProjectCard({ title, excerpt, image }) {
  return (
    <StyledProjectCard className="projectCard">
      <div className="imgContainer">
        <img src={image} alt="" />
      </div>
      <div className="textContainer">
        <h3 className="projectTitle">{title}</h3>
        <p className="projectExcerpt smallP">{excerpt}</p>
      </div>
    </StyledProjectCard>
  );
}

export default HomeFeaturedProjects;
