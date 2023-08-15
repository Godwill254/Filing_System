import * as types from "../actionTypes/authActionTypes";
import fire from "../../config/firebase";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const auth = getAuth();

const loginUser = (user) => {
  return {
    type: types.SIGN_IN,
    payload: user,
  };
};

const logOutUser = () => {
  return {
    type: types.SIGN_OUT,
  };
};

export const signInUser = (email, password, setSuccess) => (dispatch) => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(
        loginUser({
          uid: user.user.uid,
          email: user.user.email,
          displayName: user.user.displayName,
        })
      );
      setSuccess(true);
    })
    .catch((error) => {
      toast.error("Invalid Email or Password");
    });
};

export const signUpUser = (name, email, password, setSuccess) => (dispatch) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      fire
        .auth()
        .currentUser.updateProfile({
          displayName: name,
        })
        .then(() => {
          const currentUser = fire.auth().currentUser;
          dispatch(
            loginUser({
              uid: currentUser.uid,
              name: currentUser.displayName,
              email: currentUser.email,
            })
          );
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use");
      }
      if (error.code === "auth/invalid/email") {
        toast.error("Invalid email");
      }
      if (error.code === "auth/weak-password") {
        toast.error("Weak Password");
      }
    });
};

export const signOutUser = () => (dispatch) => {
  fire
    .auth()
    .signOut()
    .then(() => {
      dispatch(logOutUser());
    });
};

export const checkIsLoggedIn = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        loginUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
    }
  });
};
