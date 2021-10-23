import { User } from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  addDoc,
  collection,
} from "firebase/firestore/lite";

import app from "./firebase";
import { ISiteForm } from "@/types/Forms";

const db = app && getFirestore(app);

export const createUser = async (data: User) => {
  try {
    await setDoc(
      doc(db, "users", data.uid),
      {
        uid: data.uid,
        email: data.email,
        name: data.displayName,
        provider: data.providerId,
        photoUrl: data.photoURL,
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const registerWebsite = async (site: ISiteForm) => {
  try {
    const docRef = await addDoc(collection(db, "sites"), {
      ...site,
    });
    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
