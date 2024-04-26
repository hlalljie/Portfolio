import { styled } from "styled-components";
import PortfolioItems from "../../data/PortfolioItems";
import TagList from "./TagList.jsx";

const StyledProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ $gap }) => $gap}px;
  justify-content: center;
  width: 100%;

  .projectCard {
    width: ${({ $cols, $gap }) =>
      `calc((100% - ${$gap * ($cols - 1)}px) / ${$cols})`};
  }
`;

/**
 *
 * @param {Object} props
 * @param {boolean} props.featured - Whether to filter by only featured projects
 * @param {number} props.cols - Number of columns for project grid
 * @param {number} props.gap - Gap between project cards
 * @returns {JSX.Element}
 */
function ProjectList({ featured = false, cols = 3, gap = 55 }) {
  return (
    <StyledProjectList $cols={cols} $gap={gap}>
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
  &:hover {
    .imgContainer {
      filter: grayscale(0%);
    }
  }
  .imgContainer {
    filter: grayscale(100%);
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
  .textContainer {
    h3 {
      margin-bottom: 0;
    }
  }
  .technologies {
    li {
      /* color: ${(props) => props.theme.colors.white};
      border-color: ${(props) => props.theme.colors.white}; */
      background-color: ${(props) => props.theme.colors.white};
      font-weight: 500;
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
      <TagList tags={data.technologies} className="technologies" />
    </StyledProjectCard>
  );
}

export default ProjectList;
