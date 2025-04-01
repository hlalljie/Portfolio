// External Imports
import { useMemo, useContext } from 'react';
import { useTheme } from 'styled-components';
import { useParams } from 'react-router-dom';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Hooks
import usePayloadData from '@/hooks/usePayloadData';
// Layouts
import Header from '@/Components/shared/layout/Header';
import Footer from '@/Components/shared/layout/Footer';
import ThemedSection from '@/Components/shared/layout/ThemedSection';
// UI
import AdaptiveImage from '@/Components/shared/ui/AdaptiveImage';
import RichText from '@/Components/shared/ui/RichText';
import LoadingScreen from '@/Components/shared/ui/LoadingScreen';
// Styles
import StyledProject from './StyledProject';
import { LinkIcons } from '@/Components/shared/ui/LinkIcons';
import { breakpoints } from '@/styles/mediaQueries';

/**
 * A Basic Case Study Layout including a summary and image
 * @returns {JSX.Element}
 */
const Project = () => {
  // Get static context
  const { staticContext } = useContext(AppContext);

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

  // Show loading screen while data is loading
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

  // Background opacity
  const backgroundOpacity = project['pageContent']['backgroundPattern']['svg']
    ? project['pageContent']['backgroundPattern']['backgroundOpacity']
    : 1;

  const hasContent =
    project['pageContent']['content'] &&
    project['pageContent']['content'].length > 0;
  return (
    <StyledProject
      $bgcolor={
        Object.hasOwn(project, 'backgroundColor')
          ? project['backgroundColor']
          : theme.colors.black
      }
      $backgroundPattern={project['pageContent']['backgroundPattern']}
      $staticContext={staticContext}
    >
      <Header variant="light" overlapTopSection={true} animate={false} />
      <ProjectIntro project={project} backgroundOpacity={backgroundOpacity} />
      {hasContent && (
        <ProjectContent
          content={project['pageContent']['content']}
          backgroundOpacity={backgroundOpacity}
        />
      )}
      <Footer variant={hasContent ? 'light' : 'dark'} />
    </StyledProject>
  );
};

/**
 * Project Intro - Intro section with project title, info, summary and featured image
 * @param {object} props - The props passed to the component
 * @param {object} props.project - The project data
 * @param {number} props.backgroundOpacity - The opacity of the background (pattern shows through)
 * @returns {JSX.Element} The rendered project intro
 */
const ProjectIntro = ({ project, backgroundOpacity = 1 }) => {
  return (
    <ThemedSection
      className="projectIntro"
      themeName="dark"
      width="medium"
      backgroundOpacity={backgroundOpacity}
    >
      {(inView) => (
        <>
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
              <h7>
                {project['type'] === 'personal'
                  ? 'Personal Project'
                  : 'Professional Portfolio'}
              </h7>
              <h7>{project['year']}</h7>
            </div>
            {/* Other info */}
            <ul className="otherInfo">
              <InfoItem title="Roles" content={project['roles']} />
              {project['company'] && (
                <InfoItem title="At" content={project['company']} />
              )}
              <InfoItem
                title="Technologies"
                content={project['technologies']}
              />
            </ul>
            {/* Intro summary*/}
            {project['pageContent']['intro'] ? (
              <RichText content={project['pageContent']['intro']} />
            ) : (
              <p>{project['excerpt']}</p>
            )}
            {/* Links */}
            <LinkIcons
              url={project.url || null}
              github={project.github || null}
              itchio={project.itchio || null}
            />
          </div>
          <div className="featuredImageContainer">
            {project['pageContent']['featuredImage'] && (
              <AdaptiveImage
                className="featuredImage"
                imageData={project['pageContent']['featuredImage']}
                sizes={`(max-width: ${breakpoints.tablet}px) 80vw, (max-width: ${breakpoints.mobile}px) 99vw, 33vw`}
              />
            )}
          </div>
        </>
      )}
    </ThemedSection>
  );
};

/**
 * Info Item - Renders an info item with title and content
 * @param {object} props - The props passed to the component
 * @param {string} props.title - The title of the info item
 * @param {string | string[]} props.content - The content of the info item
 * @returns {JSX.Element} The rendered info item
 */
const InfoItem = ({ title, content }) => {
  return (
    <li>
      <h5 className="infoTitle">{title}</h5>
      <h6 className="infoContent">
        {Array.isArray(content) ? content.join(' - ') : content}
      </h6>
    </li>
  );
};

/**
 * Project Content - Renders the project blocks or an excerpt if the project has no block content
 * @param {object} props - The props passed to the component
 * @param {object} props.content - The individual project content
 * @param {number} props.backgroundOpacity - The opacity of the background (pattern shows through)
 * @returns {JSX.Element} The rendered project content
 */
const ProjectContent = ({ content, backgroundOpacity = 1 }) => {
  if (!content || content.length === 0) {
    return (
      <ThemedSection
        className="projectContent"
        themeName="light"
        width="medium"
        backgroundOpacity={backgroundOpacity}
      >
        {(inView) => <></>}
      </ThemedSection>
    );
  }
  // Render block content
  return (
    <ThemedSection
      className="projectContent"
      themeName="light"
      width="medium"
      backgroundOpacity={backgroundOpacity}
    >
      {(inView) => (
        <>
          {content.map((block, index) => {
            if (block['blockType'] === 'textBlock') {
              return <TextBlock key={index} block={block} />;
            }
            return null;
          })}
        </>
      )}
    </ThemedSection>
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
