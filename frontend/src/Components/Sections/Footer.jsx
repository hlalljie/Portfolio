import { css } from "styled-components";
import ThemedSection from "../Sections/ThemedSection";
import Socials from "../Content/Socials";

const footerStyles = css`
  margin: 0;
  margin-top: 40px;
  padding-bottom: 5px;
  display: flex;
  min-height: 0;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  .copyright {
    margin: 0;
    line-height: inherit;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }
`;

/**
 * Footer: Footer Section to be used on all pages
 * @returns {JSX.Element}
 */
function Footer() {
  return (
    <ThemedSection
      themeName="dark"
      additionalStyles={footerStyles}
      className="footer"
      sectionSize="tiny"
    >
      {(inView) => (
        <>
          <p className="copyright smallP">Copyright 2024</p>
        </>
      )}
    </ThemedSection>
  );
}

export default Footer;
