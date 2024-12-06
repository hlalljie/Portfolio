/**
 *
 * @param {Object} props
 * @param {Object} props.imageData - The data for the image to render multiple versions
 * @param {string} props.className - The className for the image
 * @returns {JSX.Element}
 */
const ResponsiveImage = ({ imageData, className = '' }) => {
  return (
    <img
      src={`${imageData.path}${imageData.name}600w${imageData.extension}`}
      srcSet={`${imageData.path}${imageData.name}600w${imageData.extension} 600w, ${imageData.path}${imageData.name}1200w${imageData.extension} 1200w`}
      sizes="(max-width: 768px) 86vw, 27vw"
      alt={imageData.alt}
      loading="lazy"
      className={'responsiveImage ' + className}
    />
  );
};

export default ResponsiveImage;
