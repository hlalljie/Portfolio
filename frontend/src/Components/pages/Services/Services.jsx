// External Imports
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

// Internal Imports
// Hooks
import usePayloadData from '@/hooks/usePayloadData';
// Layouts
import Header from '@/Components/shared/layout/Header';
import SharedBackground from '@/Components/shared/layout/SharedBackground';
import Footer from '@/Components/shared/layout/Footer';
// Sections
import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';
import ServicesContact from './ServicesContact';
// UI
import LoadingScreen from '@/Components/shared/ui/LoadingScreen';

const StyledServices = styled.div`
  width: 100%;

  .topBackground {
    filter: grayscale(40%);
    .overlay {
      background: linear-gradient(
        to bottom,
        rgba(30, 30, 30, 0.4) 0%,
        rgba(30, 30, 30, 0.55) 20%,
        rgba(30, 30, 30, 0.72) 45%,
        rgba(30, 30, 30, 0.90) 65%,
        rgba(30, 30, 30, 1) 80%,
        rgba(30, 30, 30, 1) 100%
      );
    }
  }

  .bottomBackground {
    filter: grayscale(40%);
    .overlay {
      background: linear-gradient(
        to bottom,
        rgba(30, 30, 30, 1) 0%,
        rgba(30, 30, 30, 0.75) 40%,
        rgba(30, 30, 30, 0.4) 75%,
        transparent 95%
      );
    }
  }
`;

/**
 * Services: Services Page
 * @returns {JSX.Element}
 */
function Services() {
  const id = 'services';

  const hookOptions = useMemo(
    () => ({
      type: 'global',
      id: id,
      resources: [
        {
          type: 'global',
          slug: id,
        },
      ],
    }),
    []
  );

  const { loading, pageData } = usePayloadData(hookOptions);

  if (
    loading ||
    !pageData ||
    pageData?.global === undefined ||
    pageData?.global[id] === undefined
  ) {
    return <LoadingScreen />;
  }

  const servicesData = pageData['global'][id];

  return (
    <StyledServices>
      <Helmet>
        <title>Services | Hayden Lalljie</title>
        <meta
          name="description"
          content="Technical services offered by Hayden Lalljie including AI & machine learning solutions, software development, technical training, and website design & development."
        />
        <meta property="og:title" content="Services | Hayden Lalljie" />
        <meta
          property="og:description"
          content="Technical services offered by Hayden Lalljie including AI & machine learning solutions, software development, technical training, and website design & development."
        />
        <meta property="og:url" content="https://haydenlalljie.com/services" />
      </Helmet>
      <SharedBackground
        backgroundImageData={servicesData['sharedImages']['heroImage']}
        className="topBackground"
      >
        <Header variant="light" transparent />
        <ServicesHero />
        <ServicesList />
      </SharedBackground>

      <SharedBackground
        backgroundImageData={servicesData['sharedImages']['bottomImage']}
        imgPosition="0% 60%"
        className="bottomBackground"
      >
        <ServicesContact />
        <Footer />
      </SharedBackground>
    </StyledServices>
  );
}

export default Services;
