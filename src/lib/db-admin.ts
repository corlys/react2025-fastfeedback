import { compareDesc, parseISO } from "date-fns";
import { FirebaseError } from "@firebase/util";

import { IFeedbackSkeleton, ISiteSkeleton } from "@/types/Fetch";
import firebaseAdmin from "./firebase-admin";

export const getAllFeedback = async (
  siteId: string
): Promise<IFeedbackSkeleton[] | FirebaseError> => {
  try {
    const feedRef = firebaseAdmin
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
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return error;
    }
  }
};

export const getAllSites = async (): Promise<
  ISiteSkeleton[] | FirebaseError
> => {
  try {
    const sitesRef = firebaseAdmin.collection("sites");
    const snapshot = await sitesRef.get();

    let sites: ISiteSkeleton[] = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    sites.sort((site1, site2) =>
      compareDesc(parseISO(site1.createdAt), parseISO(site2.createdAt))
    );

    return sites;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return error;
    }
  }
};
