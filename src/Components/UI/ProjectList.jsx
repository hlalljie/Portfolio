// src/Components/UI/ProjectList.jsx
import { Link } from "react-router-dom";
import PortfolioItems from "../../data/PortfolioItems";
import { styled, css } from "styled-components";
import { tablet } from "../../styles/mediaQueries";
import TagList from "./TagList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

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
  ${tablet(css`
    .projectCard {
      width: 100%;
    }
  `)}
`;

/**
 * ProjectList: Component to display a list of project cards.
 * @param {Object} props
 * @param {boolean} props.featured - Whether to filter by only featured projects
 * @param {number} props.cols - Number of columns for project grid
 * @param {number} props.gap - Gap between project cards
 * @returns {JSX.Element}
 */
const ProjectList = ({ featured = false, cols = 3, gap = 55 }) => {
  const projects = featured
    ? PortfolioItems.Featured
    : Object.keys(PortfolioItems.Projects);

  return (
    <StyledProjectList $cols={cols} $gap={gap}>
      {projects.map((projectId) => {
        const { excerpt, image, ...projectData } =
          PortfolioItems.Projects[projectId];
        return (
          <ProjectCard
            key={projectId}
            data={{ ...projectData, image, excerpt }}
            projectId={projectId}
          />
        );
      })}
    </StyledProjectList>
  );
};

const StyledProjectCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  .imgContainer {
    width: 100%;
    border-radius: 10px;
    padding-top: 80%;
    position: relative;
    img {
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
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
      background-color: ${(props) => props.theme.colors.white};
      font-weight: 500;
    }
  }
  .linkContainer {
    svg {
      transform: scale(1.2);
      transform-origin: left center;
    }
  }
`;

/**
 * ProjectCard: Component to display an individual project card.
 * @param {Object} props
 * @param {Object} props.data - The project data
 * @param {string} props.projectId - The ID of the project
 * @returns {JSX.Element}
 */
const ProjectCard = ({ data, projectId }) => (
  <StyledProjectCard
    to={{
      pathname: `/caseStudies/${projectId}`,
      state: { ...data },
    }}
    className="projectCard"
  >
    <div className="imgContainer">
      <img
        src={`${data.image.path}${data.image.name}600w${data.image.extension}`}
        srcSet={`${data.image.path}${data.image.name}600w${data.image.extension} 600w, ${data.image.path}${data.image.name}1200w${data.image.extension} 1200w`}
        sizes="(max-width: 768px) 86vw, 27vw"
        alt={data.image.alt}
        loading="lazy"
      />
    </div>
    <div className="textContainer">
      <h3 className="projectTitle">{data.title}</h3>
      <p className="projectExcerpt smallP">{data.excerpt}</p>
    </div>
    <TagList tags={data.technologies} className="technologies" />
    <div className="linkContainer">
      {data.url && (
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <LaunchIcon />
        </a>
      )}
      {data.github && (
        <a
          href={data.github}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <GitHubIcon />
        </a>
      )}
    </div>
  </StyledProjectCard>
);

export default ProjectList;
