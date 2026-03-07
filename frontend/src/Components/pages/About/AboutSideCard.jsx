// Internal Imports
import SideCard from './SideCard';

/**
 * AboutSideCard: Reversed placeholder card section for the About page
 * @returns {JSX.Element}
 */
function AboutSideCard() {
  return (
    <SideCard
      imageData={null}
      reversed={true}
      themeName="light"
      className="aboutSideCard"
    >
      <h2 className="sectionTitle">Building with purpose, shipping with care</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
      </p>
    </SideCard>
  );
}

export default AboutSideCard;
