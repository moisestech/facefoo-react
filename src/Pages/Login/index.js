import "./login.css";
import { Button } from "@material-ui/core";

import { auth, provider } from "../../state/firebase";
import { actionTypes } from "../../state/reducer";
import { useStateValue } from "../../state/StateProvider";

export default function Login() {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      dispatchEvent({
        type: actionTypes.SET_USER,
        user: result.user,
      });
      console.log(result);
    })
    .catch((error) => {
      alert(error.message);
    });

  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://github.com/moisestech/facefoo-react/raw/master/public/Facefoo_logo.png"
          alt=""
        />
        <img src="" alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}
