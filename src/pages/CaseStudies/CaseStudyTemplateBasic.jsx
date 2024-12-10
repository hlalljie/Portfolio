import { styled, css, useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';
import { tablet } from '@/styles/mediaQueries';
import PortfolioItems from '../../data/PortfolioItems.jsx';
import Header from '@/Components/Sections/Header';
import ResponsiveImage from '@/Components/UI/ResponsiveImage.jsx';

const StyledCaseStudyTemplateBasic = styled.div`
  ${({ theme }) => css`
    background-color: ${({ $bgcolor }) => $bgcolor};
    color: ${theme.colors.white};
    min-height: 100vh;
    height: fit-content;
    .caseStudyContent {
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
      .caseStudyContent .heroImage {
        aspect-ratio: 16/9;
      }
    `)}
  `}
`;
/**
 * A Basic Case Study Layout including a summary and image
 * @returns {JSX.Element}
 */
const CaseStudyTemplateBasic = () => {
  const { caseStudyId } = useParams();
  const theme = useTheme();

  // TODO : Add 404 link for invalid links
  const project = PortfolioItems.Projects[caseStudyId];

  return (
    <StyledCaseStudyTemplateBasic
      $bgcolor={
        Object.hasOwn(project, 'backgroundColor')
          ? project.backgroundColor
          : theme.colors.black
      }
      $position={project.image.position || 'center center'}
    >
      <Header variant={'light'} overlapTopSection={false} />
      <section className="caseStudyContent">
        <ResponsiveImage className="heroImage" imageData={project.image} />
        <h1>{project.title}</h1>
        <p>{project.summary || project.excerpt}</p>
      </section>
    </StyledCaseStudyTemplateBasic>
  );
};

export default CaseStudyTemplateBasic;
