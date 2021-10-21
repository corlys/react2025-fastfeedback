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
import app from "./firebase";

interface Auth extends User {
  userId: string | null;
  signInWithGitHub: () => any;
  signout: () => any;
}

const AuthContext = createContext<Auth | null>(null);

export function ProvideAuth({ children }: { children: ReactNode }) {
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
      return response.user;
    });
  };

  const signout = () => {
    const auth = getAuth();
    return signOut(auth).then(() => {
      setUser(null);
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
    userId: user && user.uid,
    signInWithGitHub,
    signout,
    ...user,
  };
}

const getFromQueryString = (key) => {
  return queryString.parse(window.location.search)[key];
};
