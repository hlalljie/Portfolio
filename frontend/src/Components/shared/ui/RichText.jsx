import React from 'react';

/**
 * RichText: Renders rich text content from Payload to a React component
 * @param {object} props - The props passed to the component
 * @param {object} props.content - The rich text content to be rendered
 * @param {string} props.className - The className for the rich text container
 * @returns {JSX.Element} - The rendered rich text content
 */
const RichText = ({ content, className = '' }) => {
  if (!content) return null;
  return (
    <div className={`rich-text ${className}`}>{serializeLexical(content)}</div>
  );
};

/**
 * serializeLexical: Serializes Lexical content to a React component
 * @param {object} content - The content to be serialized
 * @returns {JSX.Element} - The serialized content
 */
const serializeLexical = (content) => {
  if (!content || !content.root) return null;

  /**
   * renderNode: Renders a single node of the Lexical content
   * @param {object} node
   * @returns {JSX.Element} - The rendered node
   */
  const renderNode = (node) => {
    if (!node) return null;

    // Handle text nodes - in Lexical, these have the 'text' property
    if (node.type === 'text') {
      // Get the text content
      let textContent = node.text || '';

      // Apply text-level formatting
      if (node.format === 1 || node.bold) {
        textContent = <strong>{textContent}</strong>;
      } else if (node.format === 2 || node.italic) {
        textContent = <em>{textContent}</em>;
      } else if (node.format === 4 || node.underline) {
        textContent = <u>{textContent}</u>;
      }

      return textContent;
    }

    // Render children recursively
    const children = node.children?.map((child, i) => (
      <React.Fragment key={i}>{renderNode(child)}</React.Fragment>
    ));

    /**
     * applyFormatting: Apply formatting to container elements (paragraphs, headings)
     * @param {JSX.Element} element - The element to apply formatting to
     * @returns {JSX.Element} - The formatted element
     */
    const applyFormatting = (element) => {
      // Handle block-level formatting like alignment
      if (node.format === 'center') {
        return <center>{element}</center>;
      }
      return element;
    };

    // Map node types to HTML elements
    switch (node.type) {
      case 'root':
        return <>{children}</>;
      case 'paragraph':
        return applyFormatting(<p>{children}</p>);
      case 'heading': {
        // Handle different heading levels
        const level = node.tag || 'h2'; // Default to h2 if tag is missing
        let headingElement;

        switch (level) {
          case 'h1':
            headingElement = <h1>{children}</h1>;
            break;
          case 'h2':
            headingElement = <h2>{children}</h2>;
            break;
          case 'h3':
            headingElement = <h3>{children}</h3>;
            break;
          case 'h4':
            headingElement = <h4>{children}</h4>;
            break;
          case 'h5':
            headingElement = <h5>{children}</h5>;
            break;
          default:
            headingElement = <h6>{children}</h6>;
        }

        return applyFormatting(headingElement);
      }
      case 'list':
        return node.listType === 'bullet' ? (
          <ul>{children}</ul>
        ) : (
          <ol>{children}</ol>
        );
      case 'listitem':
        return <li>{children}</li>;
      case 'link':
        return (
          <a
            href={node.url}
            target={node.newTab ? '_blank' : '_self'}
            rel="noreferrer"
          >
            {children}
          </a>
        );
      default:
        return <>{children}</>;
    }
  };

  return renderNode(content.root);
};

export default RichText;
