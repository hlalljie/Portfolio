// External Imports
import { useEffect } from 'react';
import { styled, css, useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';

// Internal Imports
// Hooks
import usePayloadData from '@/hooks/usePayloadData';
// Layouts
import Header from '@/Components/shared/layout/Header';
// UI
import AdaptiveImage from '@/Components/shared/ui/AdaptiveImage';
import RichText from '@/Components/shared/ui/RichText';
// Styles
import { tablet } from '@/styles/mediaQueries';

const StyledProject = styled.div`
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
        object-fit: cover;
        border-radius: 10px;
        margin-block: 2vw;
      }
      p {
        white-space: pre-line;
      }
    }
    ${tablet(css`
      .portfolioContent .heroImage {
      }
    `)}
  `}
`;
/**
 * A Basic Case Study Layout including a summary and image
 * @returns {JSX.Element}
 */
const Project = () => {
  // Get url
  const { projectSlug } = useParams();
  const theme = useTheme();

  // Load page data
  const { loading, fetchData, pageData } = usePayloadData({
    type: 'collection',
    slug: 'projects',
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading || !pageData || pageData?.projects === undefined) {
    return <div>Loading...</div>;
  }

  // TODO : Add 404 link for invalid links
  const project = pageData.projects.find(
    (potentialProject) => potentialProject['slug'] === projectSlug
  );
  return (
    <StyledProject
      $bgcolor={
        Object.hasOwn(project, 'backgroundColor')
          ? project['backgroundColor']
          : theme.colors.black
      }
    >
      <Header variant={'light'} overlapTopSection={false} />
      <section className="portfolioContent">
        <AdaptiveImage
          className="heroImage"
          imageData={project['pageContent']['bannerImage']}
        />
        <h1>{project['title']}</h1>
        <ProjectContent project={project} />
      </section>
    </StyledProject>
  );
};

const ProjectContent = ({ project }) => {
  const content = project['pageContent']['content'];

  if (content === undefined || content === null) {
    return <p>{project['excerpt']}</p>;
  }

  return content.map((block, index) => {
    if (block['blockType'] === 'textBlock') {
      return <TextBlock key={index} blockContent={block['content']} />;
    }
    return null;
  });
};

const TextBlock = ({ blockContent }) => {
  return <RichText content={blockContent} />;
};

export default Project;
