import { css } from "styled-components";
import ThemedSection from "../Sections/ThemedSection";
import Socials from "../Content/Socials";

const footerStyles = css`
  margin: 0;
  padding-bottom: 5px;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  .textContainer {
    width: 50%;
    text-align: center;
  }
  .socials {
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    gap: 15px;
    .socialIcon {
      width: 35px;
      height: 35px;
    }
  }
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
      sectionSize="small"
    >
      <div className="textContainer">
        <h3 className="sectionTitle">Get In Touch</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet nunc odio. Mauris nulla metus, convallis in.
        </p>
      </div>
      <h5>
        <a href="mailto:hlalljie@gmail.com">hlalljie@gmail.com</a>
      </h5>
      <Socials />
      <p className="copyright smallP">Copyright 2024</p>
    </ThemedSection>
  );
}

export default Footer;
