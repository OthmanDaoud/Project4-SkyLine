import { getCurrentDate } from "./getCurrentDate";
import { setUserData } from "./setUserData";
export const checkExpiration = async (user) => {
  let date = parseDate(getCurrentDate());
  let expirationDate = 0;
  for (let i = 0; i < user.copouns.length; i++) {
    expirationDate = parseDate(user.copouns[i]);
    if (date > expirationDate) user.copouns[i].isExpired = true;
  }
  await setUserData(user);
};

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day); // month is 0-based in JavaScript Date
};
