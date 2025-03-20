// External Imports
import { styled, css } from 'styled-components';

const StyledTagList = styled.ul`
  ${({ theme, $color, $filled }) => css`
    display: flex;
    list-style: none;
    column-gap: 10px;
    padding: 0;
    flex-wrap: wrap;
    gap: 7px;
    li {
      font-size: 1.1rem;
      padding: 0 10px;
      ${$filled
        ? css`
            background-color: ${theme.colors[$color]};
            color: ${theme.getColorInverse($color)};
          `
        : css`
            background-color: transparent;
            color: ${theme.colors[$color]};
            border: 2px solid ${theme.colors[$color]};
          `}
      border-radius: 5px;
      line-height: 2rem;
    }
  `}
`;

/**
 * TagList: A styled list component that takes a list of tags and renders them as consitently styled list items.
 * @param {Object} props - The properties for the tagList component.
 * @param {string[]} props.tags - The tags to be displayed.
 * @param {string} props.className - The className for the tagList component.
 * @param {string} props.color - The color for the tagList (based on theme colors).
 * @param {boolean} props.filled - Whether the tags should be filled(true) or outlined(false)
 * @returns {JSX.Element}
 */
function TagList({
  tags = [],
  className = '',
  color = 'white',
  filled = 'false',
}) {
  return (
    <StyledTagList className={className} $color={color} $filled={filled}>
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </StyledTagList>
  );
}

export default TagList;
