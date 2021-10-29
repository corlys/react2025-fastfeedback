import { NextApiRequest, NextApiResponse } from "next";
import { FirebaseError } from "@firebase/util";

import { getUserFeedback } from "@/lib/db-admin";
import { IFeedbackData, ResponseData } from "@/types/Fetch";
import { adminAuth } from "@/lib/firebase-admin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<IFeedbackData | FirebaseError>>
) {
  const { token } = req.headers;
  const { uid } = await adminAuth.verifyIdToken(
    typeof token === "string" && token
  );
  const feedback = await getUserFeedback(uid);
  if (feedback instanceof FirebaseError) {
    return res.status(500).json({ payload: feedback });
  }
  return res.status(200).json({
    payload: {
      feedback,
    },
  });
}
