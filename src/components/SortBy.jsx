import { useState } from "react";

export const SortBy = () => {
  const [sortBy, setSortBy] = useState("Date");

  const onChange = (event) => {
    setSortBy(event.target.value);
  };

  console.log(sortBy);

  return (
    <>
      <label htmlFor="reviewSorter">Sort by:</label>
      <select
        id="reviewSorter"
        onChange={onChange}
        name="selectedSortOption"
        defaultValue="Date"
      >
        <option value="Date">Date</option>
        <option value="CommentCount">Comment Count</option>
        <option value="Votes">Votes</option>
      </select>
    </>
  );
};
