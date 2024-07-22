export const getCurrentDate = ({
  dayAdd = 0,
  monthAdd = 0,
  yearAdd = 0,
} = {}) => {
  const date = new Date();

  date.setDate(date.getDate() + dayAdd);
  date.setMonth(date.getMonth() + monthAdd);
  date.setFullYear(date.getFullYear() + yearAdd);

  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns 0-based month
  const year = date.getFullYear();

  const currentDate = `${day}/${month}/${year}`;

  return currentDate;
};
