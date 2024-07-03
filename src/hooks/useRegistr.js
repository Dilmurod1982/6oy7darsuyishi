import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-hot-toast";

export const useRegister = () => {
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useGlobalContext();
  const registerWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      setIsPending(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch({ type: "LOG_IN", payload: user });
      toast.success(`Велкам ${user.displayName}`);
      setIsPending(false);
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      setIsPending(false);
    }
  };

  const registerEmailAndPassword = async (
    email,
    password,
    displayName,
    photoURL
  ) => {
    try {
      const register = createUserWithEmailAndPassword(auth, email, password);
      setIsPending(true);
      const user = (await register).user;
      await updateProfile(auth.currentUser, {
        photoURL,
        displayName,
      });

      dispatch({ type: "LOG_IN", payload: user });
      toast.success(`Велкам ${user.displayName}`);
      setIsPending(false);
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
      setIsPending(false);
    }
  };

  return { registerWithGoogle, isPending, registerEmailAndPassword };
};
