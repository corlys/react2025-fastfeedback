import { NextApiRequest, NextApiResponse } from "next";

import { adminAuth } from "@/lib/firebase-admin";
import { ISiteData, ResponseData } from "@/types/Fetch";
import { getUserSites } from "@/lib/db-admin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData<ISiteData>>
) {
  try {
    const { token } = req.headers;
    const { uid } = await adminAuth.verifyIdToken(
      typeof token === "string" && token
    );
    const sites = await getUserSites(uid);
    return res.status(200).json({
      payload: {
        sites,
      },
    });
  } catch (error) {
    console.log(error);
    return Promise.reject(new Error("token invalid"));
  }
}
