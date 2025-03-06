// External Imports
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Internal Imports
// Data
import PortfolioItems from '@/data/PortfolioItems';

// Import Markdown files
const caseStudies = import.meta.glob('@/data/PortfolioItems/*.md', {
  query: '?raw',
  import: 'default',
});

/**
 * CaseStudyTemplate: Template for rendering case studies from markdown along with title info.
 * @returns {JSX.Element}
 */
const CaseStudyTemplate = () => {
  const { caseStudyId } = useParams();
  const location = useLocation();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState(location.state || {});

  useEffect(() => {
    /**
     * loadCaseStudy: Loads case study from markdown file
     */
    const loadCaseStudy = async () => {
      try {
        if (!location.state) {
          // Fetch metadata from PortfolioItems if not passed via state
          /* eslint-disable no-unused-vars */
          const { _excerpt, _image, ...projectMeta } =
            PortfolioItems.Projects[caseStudyId];
          /* eslint-enable no-unused-vars */
          setMeta(projectMeta || {});
        }

        const caseStudyPath = `../../data/caseStudies/${caseStudyId}.md`;
        console.log('Looking for:', caseStudyPath);
        const caseStudy = caseStudies[caseStudyPath];

        if (caseStudy) {
          const module = await caseStudy();
          console.log('Module:', module);
          setContent(module.default || module);
        } else {
          console.error('Case study not found:', caseStudyPath);
        }
      } catch (err) {
        console.error('Error loading case study:', err);
      }
    };

    loadCaseStudy();
  }, [caseStudyId, location.state]);

  return (
    <div>
      {meta.title && <h1>{meta.title}</h1>}
      {meta.company && <p>Company: {meta.company}</p>}
      {meta.url && (
        <p>
          URL:{' '}
          <a href={meta.url} target="_blank" rel="noopener noreferrer">
            {meta.url}
          </a>
        </p>
      )}
      {meta.roles && <p>Roles: {meta.roles.join(', ')}</p>}
      {meta.years && <p>Years: {meta.years}</p>}
      {meta.technologies && <p>Technologies: {meta.technologies.join(', ')}</p>}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default CaseStudyTemplate;
