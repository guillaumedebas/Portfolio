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
    <span className="tag-list">
      {tags.map((tag, id) => (
        <span key={id} className="tag-list__item">
          {tag}
        </span>
      ))}
    </span>
  )
}

export default TagList
