import { useState, useEffect } from 'react';

/**
 *
 * @param {Object} props
 * @param {Object} props.imageData - The data for the image to render multiple versions
 * @param {string} props.className - The className for the image
 * @param {string} props.sizes - The sizes attribute for the image defaults to 100vw
 * @returns {JSX.Element}
 */
const ResponsiveImage = ({ imageData, className = '', sizes = '100vw' }) => {
  const [srcLookup, setSrcLookup] = useState(null);

  useEffect(() => {
    generateSources(imageData).then((result) => {
      setSrcLookup(result);
      console.log('Source set:', result);
    });
  }, [imageData]);

  return (
    srcLookup && (
      <img
        src={srcLookup.src}
        srcSet={srcLookup.srcSet}
        sizes={sizes}
        alt={imageData.alt}
        loading="lazy"
        className={'responsiveImage ' + className}
      />
    )
  );
};

/**
 * Creates a set of sources for the image
 * @param {Object} imageData data for the image object
 * @returns {Object} Object containing srcSet and src strings
 */
const generateSources = async (imageData) => {
  const srcSizes = ['600w', '1200w', '1920w', '2400w'];
  const srcLookup = {
    srcSet: '',
    src: null,
  };
  for (const size of srcSizes) {
    let imageName = `${imageData.path}${imageData.name}${size}${imageData.extension}`;
    console.log(`About to check: ${imageName}`);
    const imageExists = await checkImageUrl(imageName);
    console.log(`After check: ${imageName} exists: ${imageExists}`); // Debug log

    // if image exists, add it's string to the set of sources
    if (imageExists) {
      // set src to the first source
      if (srcLookup.src === null) {
        srcLookup.src = imageName;
      } else {
        srcLookup.srcSet += ', ';
      }
      srcLookup.srcSet += `${imageName} ${size}`;
    }
  }
  return srcLookup;
};

/**
 * Finds out if an image URL is valid
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL is valid
 */
const checkImageUrl = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      cache: 'no-store',
      headers: {
        Accept: 'image/*', // Tell Vite this is an image request
        'Cache-Control': 'no-store', // Bypass Vite's dev caching
      },
    });

    console.log(`Checking ${url}: ${response.status}`);
    return response.status === 200;
  } catch (error) {
    console.log(`Error checking ${url}:`, error); // Debug log

    return false;
  }
};

export default ResponsiveImage;
