// External Imports
import { useContext } from 'react';

// Internal Imports
// Context
import { AppContext } from '@/context/AppContext';
// Components
import SideCard from './SideCard';

/**
 * AboutHero: Top portrait card for the About page — mirrors HomeAbout layout
 * @returns {JSX.Element}
 */
function AboutHero() {
  const { pageData, dataLoading } = useContext(AppContext);

  if (dataLoading || !pageData) {
    return <div>Loading...</div>;
  }

  const sectionData = pageData['global']['homepage']['homeAbout'];

  return (
    <SideCard
      imageData={sectionData['portraitImage']}
      themeName="light"
      id="about"
      className="aboutHero"
    >
      <h2 className="sectionTitle">{sectionData['title']}</h2>
      <p>{sectionData['paragraph']}</p>
    </SideCard>
  );
}

export default AboutHero;
