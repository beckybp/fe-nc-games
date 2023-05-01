import { useSearchParams } from "react-router-dom";

export const OrderBy = ({ setOrderBy }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (event) => {
    setOrderBy(event.target.value);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", event.target.value);
    setSearchParams(newParams);
  };

  return (
    <>
      <label htmlFor="reviewOrder">Order by:</label>
      <select
        id="reviewOrder"
        onChange={onChange}
        name="selectedOrder"
        defaultValue="desc"
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </>
  );
};
