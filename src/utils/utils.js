export const convertCreatedAt = (data) => {
  const timeAndDateArr = data.split(/[T.]/);
  const time = timeAndDateArr[1];
  const date = timeAndDateArr[0];
  return `${time} ${date}`;
};
