import { NextApiRequest, NextApiResponse } from "next";
import { FirebaseError } from "@firebase/util";

import { getAllFeedback } from "@/lib/db-admin";
import { IFeedbackData, ResponseData } from "@/types/Fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<IFeedbackData | FirebaseError>>
) {
  const siteId = typeof req.query.siteId === "string" && req.query.siteId;
  const feedback = await getAllFeedback(siteId);
  if (feedback instanceof FirebaseError) {
    return res.status(500).json({ payload: feedback });
  }
  return res.status(200).json({
    payload: {
      feedback,
    },
  });
}
