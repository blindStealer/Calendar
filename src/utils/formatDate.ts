export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  console.log(`${year}.${month}.${day}`);
  return `${year}.${month}.${day}`;
};
