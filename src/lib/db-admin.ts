import { compareDesc, parseISO } from "date-fns";

import { IFeedbackSkeleton, ISiteSkeleton } from "@/types/Fetch";
import { firestore } from "./firebase-admin";

export const getAllFeedback = async (
  siteId: string
): Promise<IFeedbackSkeleton[]> => {
  try {
    const feedRef = firestore
      .collection("feedback")
      .where("siteId", "==", siteId);

    const snapshot = await feedRef.get();

    let feedback: IFeedbackSkeleton[] = [];

    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });

    feedback.sort((feedback1, feedback2) =>
      compareDesc(parseISO(feedback1.createdAt), parseISO(feedback2.createdAt))
    );
    return feedback;
  } catch (error) {
    // if (error instanceof FirebaseError) {
    //   return error;
    // }
    return Promise.reject(new Error(error));
  }
};

export const getAllSites = async (): Promise<ISiteSkeleton[]> => {
  try {
    const sitesRef = firestore.collection("sites");
    const snapshot = await sitesRef.get();

    let sites: ISiteSkeleton[] = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    sites.sort((site1, site2) =>
      compareDesc(parseISO(site1.createdAt), parseISO(site2.createdAt))
    );

    return sites;
  } catch (error) {
    // if (error instanceof FirebaseError) {
    //   return error;
    // }
    return Promise.reject(new Error(error));
  }
};

export const getUserSites = async (
  userId: string
): Promise<ISiteSkeleton[]> => {
  try {
    const sitesRef = firestore
      .collection("sites")
      .where("authorId", "==", userId);
    const snapshot = await sitesRef.get();

    let sites: ISiteSkeleton[] = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    sites.sort((site1, site2) =>
      compareDesc(parseISO(site1.createdAt), parseISO(site2.createdAt))
    );

    return sites;
  } catch (error) {
    // if (error instanceof FirebaseError) {
    //   return error;
    // }
    return Promise.reject(new Error(error));
  }
};

export const getUserFeedback = async (
  userId: string
): Promise<IFeedbackSkeleton[]> => {
  try {
    const feedRef = firestore
      .collection("feedback")
      .where("authorId", "==", userId);
    const snapshot = await feedRef.get();

    let feedback: IFeedbackSkeleton[] = [];

    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });

    feedback.sort((site1, site2) =>
      compareDesc(parseISO(site1.createdAt), parseISO(site2.createdAt))
    );

    return feedback;
  } catch (error) {
    // if (error instanceof FirebaseError) {
    //   return error;
    // }
    return Promise.reject(new Error(error));
  }
};
