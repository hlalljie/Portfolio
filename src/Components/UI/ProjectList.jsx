import { styled, css } from 'styled-components';
import PortfolioItems from '../../data/PortfolioItems';
import TagList from './TagList.jsx';
import { breakpoints, tablet } from '../../styles/mediaQueries';

import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

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
  .linkContainer {
    svg {
      transform: scale(1.2);
      transform-origin: left center;
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
        <img
          src={
            data.image.path +
            (data.image.name
              ? data.image.name + '600w' + data.image.extension
              : '')
          }
          srcSet={
            data.image.name
              ? data.image.path +
                data.image.name +
                '600w' +
                data.image.extension +
                ' 600w, ' +
                data.image.path +
                data.image.name +
                '1200w' +
                data.image.extension +
                ' 1200w'
              : ''
          }
          sizes={'(max-width: ' + breakpoints.tablet + 'px) 86vw, 27vw'}
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
    </StyledProjectCard>
  );
}

export default ProjectList;
