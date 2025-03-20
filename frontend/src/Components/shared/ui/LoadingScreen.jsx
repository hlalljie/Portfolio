// External Imports
import { useEffect, useState } from 'react';
// Internal Imports
import Header from '../layout/Header';
/**
 * LoadingScreen - Consistent loading screen component
 * @param {number} timeToIndicator - Time to wait before showing loading indicator
 * @returns {JSX.Element}
 */
const LoadingScreen = ({ timeToIndicator = 1000 }) => {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIndicator(true);
    }, timeToIndicator);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <Header overlapTopSection={false} />
      {showIndicator && <h4>Loading...</h4>}
    </>
  );
};

export default LoadingScreen;
