import { styled } from "styled-components";
import PortfolioItems from "../../data/PortfolioItems";

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

/**
 *
 * @param {Object} props
 * @param {boolean} props.featured
 * @returns {JSX.Element}
 */
function ProjectList({ featured = false }) {
  return (
    <StyledProjectList>
      {featured
        ? PortfolioItems.Featured.map((project) => (
            <ProjectCard
              key={project}
              data={PortfolioItems.Projects[project]}
            />
          ))
        : Object.keys(PortfolioItems.Projects).map((project) => (
            <ProjectCard key={project} data={project} />
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

/**
 *
 * @param {Object} props
 * @param {string} props.data
 * @returns {JSX.Element}
 */
function ProjectCard({ data }) {
  return (
    <StyledProjectCard className="projectCard">
      <div className="imgContainer">
        <img src={data.image} alt="" />
      </div>
      <div className="textContainer">
        <h3 className="projectTitle">{data.title}</h3>
        <p className="projectExcerpt smallP">{data.excerpt}</p>
      </div>
    </StyledProjectCard>
  );
}

export default ProjectList;
