// src/Components/UI/ProjectList.jsx
import { styled, css } from 'styled-components';
import { tablet } from '../../styles/mediaQueries';
import TagList from './TagList';
import PortfolioItems from '../../data/PortfolioItems';
import ResponsiveImage from './ResponsiveImage';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const StyledProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ $gap }) => $gap}px;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;

  /* Size all children */
  > * {
    width: ${({ $cols, $gap }) =>
      `calc((100% - ${$gap * ($cols - 1)}px) / ${$cols})`};
  }
  .projectFiller {
    height: 0px;
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
 * @param {string} props.variant - Color variant for project cards
 * @param {boolean} props.hideLinks - Whether to hide project links
 * @param {boolean} props.hideExcerpt - Whether to hide project excerpts
 * @returns {JSX.Element}
 */
const ProjectList = ({
  featured = false,
  cols = 3,
  gap = 55,
  variant = 'light',
  hideLinks = false,
  hideExcerpt = false,
}) => {
  const projects = featured
    ? PortfolioItems.Featured
    : Object.keys(PortfolioItems.Projects);

  return (
    <StyledProjectList className="projectList" $cols={cols} $gap={gap}>
      {/* Show list of projects from data */}
      {projects.map((projectId) => {
        const { excerpt, image, draft, ...projectData } =
          PortfolioItems.Projects[projectId];
        if (draft === true) return null;
        return (
          <ProjectCard
            key={projectId}
            data={{ ...projectData, image, excerpt }}
            projectId={projectId}
            variant={variant}
            hideLinks={hideLinks}
            hideExcerpt={hideExcerpt}
          />
        );
      })}
      {/* Add filler spaces after to push unfull rows to the left */}
      {[...Array(3)].map((id) => (
        <div className="projectFiller" key={id}></div>
      ))}
    </StyledProjectList>
  );
};

const StyledProjectCard = styled('div')`
  ${({ theme, $variant }) => css`
    text-decoration: none;
    color: ${$variant === 'light' ? theme.colors.white : theme.colors.black};
    display: block;

    .imgContainer {
      display: block;
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
        font-weight: 500;
      }
    }
    .linkContainer {
      svg {
        transform: scale(1.2);
        transform-origin: left center;
        path {
          fill: ${$variant === 'light'
            ? theme.colors.white
            : theme.colors.black};
        }
      }
    }
  `}
`;
/**
 * ProjectCard: Component to display an individual project card.
 * @param {Object} props
 * @param {Object} props.data - The project data
 * @param {string} props.projectId - The ID of the project
 * @param {string} props.variant - Color variant for project cards
 * @param {boolean} props.hideExcerpt - Whether to show the excerpt
 * @param {boolean} props.hideLinks - Whether to show the links
 * @returns {JSX.Element}
 */
const ProjectCard = ({
  data,
  variant = 'light',
  hideExcerpt = false,
  hideLinks = false,
  projectId,
}) => {
  let caseStudyLink = `/case-studies/${projectId}`;
  return (
    <StyledProjectCard className="projectCard" $variant={variant}>
      <a className="imgContainer" href={caseStudyLink}>
        <ResponsiveImage
          imageData={data.image}
          sizes="(max-width: 768px) 86vw, 27vw"
        />
      </a>
      <div className="textContainer">
        <a href={caseStudyLink}>
          <h3 className="projectTitle">{data.title}</h3>
        </a>
        {!hideExcerpt && (
          <p className="projectExcerpt smallP">{data.excerpt}</p>
        )}
      </div>
      <TagList
        tags={data.technologies}
        className="technologies"
        color={variant === 'light' ? 'white' : 'black'}
        filled={variant === 'light' ? true : false}
      />
      {hideLinks === false && (
        <div className="linkContainer">
          {data.url && (
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              aria-label="View Live Website"
            >
              <LaunchIcon aria-hidden="true" />
            </a>
          )}
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              aria-label="View Project Github"
            >
              <GitHubIcon aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </StyledProjectCard>
  );
};

export default ProjectList;
