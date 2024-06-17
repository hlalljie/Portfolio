// src/Components/UI/CaseStudyTemplate.jsx
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import PortfolioItems from "../../data/PortfolioItems.jsx";

// Import Markdown files
const caseStudies = import.meta.glob("../../data/caseStudies/*.md", {
  query: "?raw",
  import: "default",
});

/**
 * CaseStudyTemplate: Template for rendering case studies from markdown along with title info
 * @returns {JSX.Element}
 */
const CaseStudyTemplate = () => {
  const { caseStudyId } = useParams();
  const location = useLocation();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState(location.state || {});

  useEffect(() => {
    const loadCaseStudy = async () => {
      try {
        if (!location.state) {
          // Fetch metadata from PortfolioItems if not passed via state
          const projectMeta = PortfolioItems.Projects[caseStudyId];
          setMeta(projectMeta || {});
        }

        const caseStudyPath = `../../data/caseStudies/${caseStudyId}.md`;
        const caseStudy = caseStudies[caseStudyPath];

        if (caseStudy) {
          const module = await caseStudy();
          setContent(module.default || module);
        } else {
          console.error("Case study not found:", caseStudyPath);
        }
      } catch (err) {
        console.error("Error loading case study:", err);
      }
    };

    loadCaseStudy();
  }, [caseStudyId, location.state]);

  return (
    <div>
      {meta.title && <h1>{meta.title}</h1>}
      {meta.date && <p>{meta.date}</p>}
      {meta.tags && <p>Tags: {meta.tags.join(", ")}</p>}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default CaseStudyTemplate;
