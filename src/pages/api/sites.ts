import { NextApiRequest, NextApiResponse } from "next";
import { FirebaseError } from "@firebase/util";

import { ISiteData, ResponseData } from "@/types/Fetch";
import { getAllSites } from "@/lib/db-admin";

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<ResponseData<ISiteData | FirebaseError>>
) {
  const sites = await getAllSites();
  if (sites instanceof FirebaseError) {
    return res.status(500).json({ payload: sites });
  }
  return res.status(200).json({
    payload: {
      sites,
    },
  });
}
