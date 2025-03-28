// External Imports
import { css } from 'styled-components';

// Internal Imports
// Layout
import ThemedSection from '@/Components/shared/layout/ThemedSection';

const footerStyles = css`
  position: relative;
  z-index: 100;
  margin: 0;
  padding-block: 5px;
  display: flex;
  min-height: 0;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  .copyright {
    margin: 0;
    line-height: inherit;
    text-align: center;
  }
`;

/**
 * Footer: Footer Section to be used on all pages
 * @param {object} props - The properties for the Footer component
 * @param {string} props.variant - The color scheme of the footer
 * @returns {JSX.Element}
 */
function Footer({ variant = 'dark' }) {
  return (
    <ThemedSection
      themeName={variant}
      additionalStyles={footerStyles}
      className="footer"
      sectionSize="tiny"
    >
      {(inView) => (
        <>
          <p className="copyright smallP">Copyright 2025</p>
        </>
      )}
    </ThemedSection>
  );
}

export default Footer;
