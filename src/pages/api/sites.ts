import { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/firebase-admin";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const sitesRef = db.collection("sites");
  const snapshot = await sitesRef.get();

  if (snapshot.empty) {
    return res.status(400).json({ sites: [] });
  }

  let sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return res.status(200).json({ sites });
}
