import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import queryString from "query-string";
import {
  getAuth,
  User,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import app from "./firebase";
import { createUser } from "./db";

interface IAuth {
  signInWithGitHub: () => Promise<User>;
  signInWithGoogle: () => Promise<User>;
  signout: () => Promise<void>;
  user: User;
}

const AuthContext = createContext<IAuth | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const initializeFirebase = app || "";
  if (initializeFirebase !== "") {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
  }
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const signInWithGitHub = () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider).then((response) => {
      setUser(response.user);
      createUser(response.user);
      Cookies.set("fast-feedback-auth", true, { expires: 1 });
      router.push("/dashboard");
      return response.user;
    });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth, provider).then((response) => {
      setUser(response.user);
      createUser(response.user);
      Cookies.set("fast-feedback-auth", true, { expires: 1 });
      router.push("/dashboard");
      return response.user;
    });
  };

  const signout = () => {
    const auth = getAuth();
    return signOut(auth).then(() => {
      setUser(null);
      Cookies.remove("fast-feedback-auth");
      router.push("/");
    });
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });

    return () => unsubscribe();
  }, []);

  return {
    signInWithGitHub,
    signInWithGoogle,
    signout,
    user,
  };
}

const getFromQueryString = (key) => {
  return queryString.parse(window.location.search)[key];
};
