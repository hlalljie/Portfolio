// src/components/UI/CaseStudyTemplate.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

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
  const [content, setContent] = useState("");

  useEffect(() => {
    /**
     * loadCaseStudy: Loads case study from markdown file
     */
    const loadCaseStudy = async () => {
      try {
        const caseStudyPath = `../../data/caseStudies/${caseStudyId}.md`;
        console.log("Looking for:", caseStudyPath);
        const caseStudy = caseStudies[caseStudyPath];
        if (caseStudy) {
          const module = await caseStudy();
          console.log("Module:", module);
          setContent(module.default || module);
        } else {
          console.error("Case study not found:", caseStudyPath);
        }
      } catch (err) {
        console.error("Error loading case study:", err);
      }
    };

    loadCaseStudy();
  }, [caseStudyId]);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default CaseStudyTemplate;
