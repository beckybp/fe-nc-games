import { useSearchParams } from "react-router-dom";

export const SortBy = ({ setSortBy }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (event) => {
    setSortBy(event.target.value);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", event.target.value);
    setSearchParams(newParams);
  };

  return (
    <>
      <label htmlFor="reviewSorter">Sort by:</label>
      <select
        id="reviewSorter"
        onChange={onChange}
        name="selectedSortOption"
        defaultValue="created_at"
      >
        <option value="created_at">Date</option>
        <option value="owner">User</option>
        <option value="votes">Votes</option>
      </select>
    </>
  );
};
