// External Imports
import { styled, css, useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';

// Internal Imports
// Layouts
import Header from '@/Components/shared/layout/Header';
// UI
import ResponsiveImage from '@/Components/shared/ui/ResponsiveImage.jsx';
// Data
import PortfolioItems from '@/data/PortfolioItems';
// Styles
import { tablet } from '@/styles/mediaQueries';

const StyledProjectBasic = styled.div`
  ${({ theme }) => css`
    background-color: ${({ $bgcolor }) => $bgcolor};
    color: ${theme.colors.white};
    min-height: 100vh;
    height: fit-content;
    .portfolioContent {
      padding-block: 1vw;
      padding-inline: ${theme.padding.largeSection};
      .heroImage {
        width: 100%;
        aspect-ratio: 16/7;
        object-fit: cover;
        object-position: ${({ $position }) => $position};
        border-radius: 10px;
        margin-block: 2vw;
      }
      p {
        white-space: pre-line;
      }
    }
    ${tablet(css`
      .portfolioContent .heroImage {
        aspect-ratio: 16/9;
      }
    `)}
  `}
`;
/**
 * A Basic Case Study Layout including a summary and image
 * @returns {JSX.Element}
 */
const ProjectBasic = () => {
  const { projectId } = useParams();
  const theme = useTheme();

  // TODO : Add 404 link for invalid links
  const project = PortfolioItems.Projects[projectId];

  return (
    <StyledProjectBasic
      $bgcolor={
        Object.hasOwn(project, 'backgroundColor')
          ? project.backgroundColor
          : theme.colors.black
      }
      $position={project.image.position || 'center center'}
    >
      <Header variant={'light'} overlapTopSection={false} />
      <section className="portfolioContent">
        <ResponsiveImage className="heroImage" imageData={project.image} />
        <h1>{project.title}</h1>
        <p>{project.summary || project.excerpt}</p>
      </section>
    </StyledProjectBasic>
  );
};

export default ProjectBasic;
