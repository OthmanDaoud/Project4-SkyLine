import axios from "axios";
import { firebaseURL } from "../../../firebase/firebase-config";
export const getUserData = (userID) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${firebaseURL}/Users/${userID}.json`)
      .then((response) => {
        if (response) resolve(response.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
