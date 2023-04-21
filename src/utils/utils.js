export const convertCreatedAt = (data) => {
  const timeAndDateArr = data.split(/[T.]/);
  const time = timeAndDateArr[1];
  const date = timeAndDateArr[0];
  return `${time} ${date}`;
};

export const convertCategories = (str) => {
  return str
    .split("-")
    .map(function (category) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    })
    .join(" ");
};
