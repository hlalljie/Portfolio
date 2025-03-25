// External Imports
import { useMemo } from 'react';
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
import LoadingScreen from '@/Components/shared/ui/LoadingScreen';
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
      padding-inline: ${theme.padding.mediumSection};
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

  // Memoize the options object
  const hookOptions = useMemo(
    () => ({
      type: 'collection',
      id: 'projects',
      resources: [{ type: 'collection', slug: 'projects' }],
    }),
    []
  );

  // Load page data
  const { loading, pageData } = usePayloadData(hookOptions);

  if (
    loading ||
    !pageData ||
    pageData?.collection?.projects?.docs === undefined
  ) {
    console.log('Loading project, data:', pageData);
    return <LoadingScreen />;
  }

  // TODO : Add 404 link for invalid links
  const project = pageData.collection.projects.docs.find(
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
      <ProjectIntro project={project} />
      <ProjectContent content={project['pageContent']['content']} />
    </StyledProject>
  );
};

const ProjectIntro = ({ project }) => {
  return (
    <section className="projectIntro">
      {/* Title */}
      <div className="introText">
        {project['fullTitle'] ? (
          <h1>{project['fullTitle']}</h1>
        ) : (
          <h1>{project['title']}</h1>
        )}
        <hr />
        {/* Type and year info Below line */}
        <div className="subInfo">
          <p>
            {project['type'] === 'Personal'
              ? 'Personal Project'
              : 'Professional Portfolio'}
          </p>
          <p>{project['year']}</p>
        </div>
        {/* Other info */}
        <ul className="otherInfo">
          <InfoItem title="Role" content={project['roles']} />
          {project['company'] && (
            <InfoItem title="At" content={project['company']} />
          )}
          <InfoItem title="Technologies" content={project['technologies']} />
        </ul>
        {/* Intro summary*/}
        {project['pageContent']['intro'] ? (
          <RichText content={project['pageContent']['intro']} />
        ) : (
          <p>{project['excerpt']}</p>
        )}
      </div>
      <div className="featuredImageContainer">
        {project['pageContent']['featuredImage'] && (
          <AdaptiveImage
            className="featuredImage"
            imageData={project['pageContent']['featuredImage']}
          />
        )}
      </div>
    </section>
  );
};

const InfoItem = ({ title, content }) => {
  return (
    <li>
      <h4>{title}</h4>
      <p>{Array.isArray(content) ? content.join(' - ') : content}</p>
    </li>
  );
};

/**
 * Project Content - Renders the project blocks or an excerpt if the project has no block content
 * @param {object} props - The props passed to the component
 * @param {object} props.content - The individual project content
 * @returns {JSX.Element} The rendered project content
 */
const ProjectContent = ({ content }) => {
  if (!content || content.length === 0) {
    return <></>;
  }
  // Render block content
  return (
    <section className="projectContent">
      {content.map((block, index) => {
        if (block['blockType'] === 'textBlock') {
          return <TextBlock key={index} block={block} />;
        }
        return null;
      })}
    </section>
  );
};

/**
 * TextBlock - Renders rich text content from the Payload text block to a React component
 * @param {object} props - The props passed to the component
 * @param {object} props.block - The text block object containing rich text content
 * @returns {JSX.Element} The rendered rich text content
 */
const TextBlock = ({ block }) => {
  return <RichText content={block['content']} />;
};

export default Project;
