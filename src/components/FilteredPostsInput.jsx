const FilteredPostsInput = ({ input, setInput }) => {
  return (
    <input
      id="filter-input"
      placeholder="Search for a Post by Title"
      type="text"
      value={input}
      onChange={(event) => setInput(event.target.value)}
    />
  );
};

export default FilteredPostsInput;
