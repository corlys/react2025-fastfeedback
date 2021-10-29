import { User } from "firebase/auth";
import {
  getFirestore,
  setDoc,
  doc,
  addDoc,
  collection,
  deleteDoc,
} from "firebase/firestore/lite";

import app from "./firebase";
import { ISiteFirebase } from "@/types/Forms";
import { IFeedbackSkeleton } from "@/types/Fetch";

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
    return { error };
  }
};

export const registerWebsite = async (site: ISiteFirebase) => {
  try {
    const docRef = await addDoc(collection(db, "sites"), {
      ...site,
    });
    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
    return { error };
  }
};

export const createFeedback = async (feedback: IFeedbackSkeleton) => {
  try {
    const feedRef = await addDoc(collection(db, "feedback"), {
      ...feedback,
    });
    return feedRef;
  } catch (error) {
    return { error };
  }
};

export const deleteFeedback = async (id: string) => {
  try {
    await deleteDoc(doc(db, "feedback", id));
  } catch (error) {}
};
