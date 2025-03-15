// External Imports
import { styled, css } from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

// Internal Imports
// Display
import TagList from '@/Components/shared/display/TagList';
// UI
import AdaptiveImage from '@/Components/shared/ui/AdaptiveImage';
// Styles
import { tablet } from '@/styles/mediaQueries';
// Utils
import { slugify } from '@/utils/slugify';

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
 * @param {Object} props.projectData - The project data
 * @param {boolean} props.featured - Whether to filter by only featured projects
 * @param {number} props.cols - Number of columns for project grid
 * @param {number} props.gap - Gap between project cards
 * @param {string} props.variant - Color variant for project cards
 * @param {boolean} props.hideLinks - Whether to hide project links
 * @param {boolean} props.hideExcerpt - Whether to hide project excerpts
 * @returns {JSX.Element}
 */
const ProjectList = ({
  projectData,
  cols = 3,
  gap = 55,
  variant = 'light',
  hideLinks = false,
  hideExcerpt = false,
}) => {
  return (
    <StyledProjectList className="projectList" $cols={cols} $gap={gap}>
      {/* Show list of projects from data */}
      {projectData.map((project, index) => {
        const {
          title,
          thumbnail,
          company,
          roles,
          excerpt,
          technologies,
          url,
          github,
        } = project;
        return (
          <ProjectCard
            key={index}
            project={{
              title,
              thumbnail,
              company,
              roles,
              excerpt,
              technologies,
              url,
              github,
            }}
            variant={variant}
            hideLinks={hideLinks}
            hideExcerpt={hideExcerpt}
          />
        );
      })}
      {/* Add filler spaces after to push unfilled rows to the left */}
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
 * @param {Object} props.project - The project data
 * @param {string} props.variant - Color variant for project cards
 * @param {boolean} props.hideExcerpt - Whether to show the excerpt
 * @param {boolean} props.hideLinks - Whether to show the links
 * @returns {JSX.Element}
 */
const ProjectCard = ({
  project,
  variant = 'light',
  hideExcerpt = false,
  hideLinks = false,
}) => {
  let portfolioLink = `/portfolio/${slugify(project['title'])}`;
  return (
    <StyledProjectCard className="projectCard" $variant={variant}>
      <a className="imgContainer" href={portfolioLink}>
        <AdaptiveImage
          imageData={project['thumbnail']}
          sizes="(max-width: 768px) 86vw, 27vw"
        />
      </a>
      <div className="textContainer">
        <a href={portfolioLink}>
          <h3 className="projectTitle">{project['title']}</h3>
        </a>
        {!hideExcerpt && (
          <p className="projectExcerpt smallP">{project['excerpt']}</p>
        )}
      </div>
      <TagList
        tags={project['technologies']}
        className="technologies"
        color={variant === 'light' ? 'white' : 'black'}
        filled={variant === 'light' ? true : false}
      />
      {hideLinks === false && (
        <div className="linkContainer">
          {project['url'] && (
            <a
              href={project['url']}
              target="_blank"
              rel="noreferrer"
              aria-label="View Live Website"
            >
              <LaunchIcon aria-hidden="true" />
            </a>
          )}
          {project['github'] && (
            <a
              href={project['github']}
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
