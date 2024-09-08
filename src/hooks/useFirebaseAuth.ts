import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useUserAuth } from "../context/AuthContext";
// Import the auth instance from your Firebase config

interface AuthState {
  user: UserCredential | null;
  error: string | null;
  loading: boolean;
}

const useFirebaseAuth = () => {
  const { setUser } = useUserAuth();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    error: null,
    loading: false,
  });

  const handleLogin = (
    isLoggedIn: boolean,
    userName: string,
    uid: string,
    email: string
  ) => {
    setUser({
      isLoggedIn,
      userName,
      uid,
      email,
    });
  };

  // Login with email and password
  const login = async (email: string, password: string): Promise<void> => {
    setAuthState({ user: null, error: null, loading: true });
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAuthState({ user: userCredential, error: null, loading: false });
      if (userCredential.user.displayName && userCredential.user.email) {
        handleLogin(
          true,
          userCredential.user.displayName,
          userCredential.user.uid,
          userCredential.user.email
        );
      }
    } catch (error: any) {
      setAuthState({ user: null, error: error.message, loading: false });
    }
  };

  // Create user with email and password
  const signup = async (email: string, password: string): Promise<void> => {
    setAuthState({ user: null, error: null, loading: true });
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAuthState({ user: userCredential, error: null, loading: false });
      if (userCredential.user.displayName && userCredential.user.email) {
        handleLogin(
          true,
          userCredential.user.displayName,
          userCredential.user.uid,
          userCredential.user.email
        );
      }
    } catch (error: any) {
      setAuthState({ user: null, error: error.message, loading: false });
    }
  };

  // Login with Google
  const loginWithGoogle = async (): Promise<void> => {
    setAuthState({ user: null, error: null, loading: true });
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      setAuthState({ user: userCredential, error: null, loading: false });
      if (userCredential.user.displayName && userCredential.user.email) {
        handleLogin(
          true,
          userCredential.user.displayName,
          userCredential.user.uid,
          userCredential.user.email
        );
      }
    } catch (error: any) {
      setAuthState({ user: null, error: error.message, loading: false });
    }
  };

  return {
    user: authState.user,
    error: authState.error,
    loading: authState.loading,
    login,
    signup,
    loginWithGoogle,
  };
};

export default useFirebaseAuth;
