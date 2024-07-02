import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";

export const useRegister = () => {
  const [isPeinding, setIsPending] = useState(false);

  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      setIsPending(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      setIsPending(false);
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      setIsPending(false);
    }
  };

  return { registerWithGoogle, isPeinding };
};
