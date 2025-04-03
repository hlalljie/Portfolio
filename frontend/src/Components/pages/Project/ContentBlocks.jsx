// Internal imports
// Components
import AdaptiveImage from '@/Components/shared/ui/AdaptiveImage';
import RichText from '@/Components/shared/ui/RichText';
// Utils
import { breakpoints } from '@/styles/mediaQueries';

/**
 * TextBlock - Renders rich text content from the Payload text block to a React component
 * @param {object} props - The props passed to the component
 * @param {object} props.block - The text block object containing rich text content
 * @returns {JSX.Element} The rendered rich text content
 */
export const TextBlock = ({ block }) => {
  return <RichText content={block['content']} className="textBlock block" />;
};

/**
 * ImageBlock - Renders an image from the Payload image block to a React component
 * @param {object} props - The props passed to the component
 * @param {object} props.block - The image block object containing image data
 * @returns {JSX.Element} The rendered image block
 */
export const ImageBlock = ({ block }) => {
  return (
    <div className="block imageBlock">
      <AdaptiveImage
        className="imageBlockImage"
        imageData={block['image']}
        sizes={`(max-width: ${breakpoints.tablet}px) 98vw, 74vw`}
      />
    </div>
  );
};
