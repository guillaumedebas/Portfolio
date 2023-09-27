import "./TagList.scss"

/**
 * TagList component for displaying a list of tags for a specific rental sheet.
 *
 * @param {Array} tags - An array of tags to display in the list.
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
