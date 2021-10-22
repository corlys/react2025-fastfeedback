import app from "./firebase";
import { User } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore/lite";

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
