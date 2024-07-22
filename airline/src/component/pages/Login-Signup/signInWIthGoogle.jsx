import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { toast } from "react-toastify";

import { User } from "../../../models/user";

import googleLogo from "./assets/google.png";
import { setUserData } from "./Controllers/setUserData";
import { Copoun } from "../../../models/copoun";
import { getCurrentDate } from "./Controllers/getCurrentDate";

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const currentUser = result.user;

      if (currentUser) {
        const copoun = new Copoun({
          copounID: 0,
          description: "Welcoming copoun",
          discountPercentage: "20%",
          expiration: getCurrentDate({ monthAdd: 1 }),
          isExpired: false,
          isUsed: false,
        });
        const user = new User({
          userID: currentUser.uid,
          email: currentUser.email,
          fullName: currentUser.displayName,
          tickets: [],
          phoneNumber: currentUser.phoneNumber,
          copouns: [copoun],
        });
        let response = await setUserData(user);
        if (response) {
          toast.success("User logged in Successfully", {
            position: "top-center",
          });
        }
      }
    });
  }

  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={googleLogo} width={"60%"} />
      </div>
    </div>
  );
}
export default SignInwithGoogle;
