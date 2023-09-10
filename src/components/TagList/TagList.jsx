import "./TagList.scss"

/**
 * TagList component.
 * Displays a list of tags for a specific rental sheet.
 *
 * Props:
 * - sheet: the index of the rental sheet to display tags from.
 */

function TagList({ tags }) {
  return (
    <ul className="tag-list">
      {tags.map((tag, id) => (
        <li key={id} className="tag-list__item">
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default TagList
