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
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Cookies from "js-cookie";

import app from "./firebase";
import { createUser } from "./db";

interface IAuth {
  signInWithGitHub: () => any;
  signout: () => any;
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
  const provider = new GithubAuthProvider();

  const signInWithGitHub = () => {
    const auth = getAuth();
    return signInWithPopup(auth, provider).then((response) => {
      setUser(response.user);
      createUser(response.user);
      Cookies.set("fast-feedback-auth", true, { expires: 7 });
      return response.user;
    });
  };

  const signout = () => {
    const auth = getAuth();

    return signOut(auth).then(() => {
      setUser(null);
      Cookies.remove("fast-feedback-auth");
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
    signout,
    user,
  };
}

const getFromQueryString = (key) => {
  return queryString.parse(window.location.search)[key];
};
