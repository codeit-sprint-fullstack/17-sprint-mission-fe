function TagChips({ tags, onRemove }) {
  if (tags.length === 0) return null;

  return (
    <ul className="tag-chips">
      {tags.map((tag) => (
        <li key={tag} className="tag-chip">
          <span>#{tag}</span>
          <button
            type="button"
            className="tag-chip__remove"
            onClick={() => onRemove(tag)}
            aria-label={`${tag} 태그 삭제`}
          >
            <img src="/images/icons/ic_x.svg" alt="" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TagChips;
