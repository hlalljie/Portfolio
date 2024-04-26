import { styled } from "styled-components";

const StyledTagList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: right;
  column-gap: 10px;
  padding: 0;
  flex-wrap: wrap;
  li {
    font-size: 1.1rem;
    padding: 0 10px;
    margin: 5px;
    border: 2px solid ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.black};
    border-radius: 5px;
    line-height: 2rem;
  }
`;

/**
 * TagList: A styled list component that takes a list of tags and renders them as consitently styled list items.
 * @param {Object} props - The properties for the tagList component.
 * @param {string[]} props.tags - The tags to be displayed.
 * @param {string} props.className - The className for the tagList component.
 * @returns {JSX.Element}
 */
function TagList({ tags, className }) {
  return (
    <StyledTagList className={className}>
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </StyledTagList>
  );
}

export default TagList;
