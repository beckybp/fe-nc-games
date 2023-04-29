export const OrderBy = (setOrderBy) => {
  const onChange = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <>
      <label htmlFor="reviewOrder">Order by:</label>
      <select
        id="reviewOrder"
        onChange={onChange}
        name="selectedOrder"
        defaultValue="Desc"
      >
        <option value="Desc">Descending</option>
        <option value="Asc">Ascending</option>
      </select>
    </>
  );
};
