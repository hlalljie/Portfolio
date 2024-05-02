import styled from "styled-components";
import Socials from "../Content/Socials";

const StyledFooter = styled.footer`
  margin: 0;
  .socials {
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
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
    <StyledFooter>
      <Socials />
      <p className="copyright smallP">Copyright 2024</p>
    </StyledFooter>
  );
}

export default Footer;
