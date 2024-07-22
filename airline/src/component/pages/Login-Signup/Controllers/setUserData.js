import axios from "axios";
import { firebaseURL } from "../../../firebase/firebase-config";
export const setUserData = (user) => {
  return new Promise((resolve, reject) => {
    axios
      .put(firebaseURL + "/Users/" + user.userID + ".json", user)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
