// External Imports
import styled from 'styled-components';

// Internal Imports
import Header from '@/Components/shared/layout/Header';

const StyledErrorPage = styled.div`
  .errorPageContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    h1 {
      font-size: 10rem;
      font-weight: 300;
    }
  }
`;

/**
 *  ErrorPage: An Error/404 Page
 * @returns {JSX.Element}
 */
function ErrorPage() {
  return (
    <StyledErrorPage>
      <Header />
      <section className="errorPageContent">
        <h1>404</h1>
        <p>Page Not Found</p>
      </section>
    </StyledErrorPage>
  );
}

export default ErrorPage;
