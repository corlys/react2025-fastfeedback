import { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/firebase-admin";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const sitesRef = db.collection("sites");
  const snapshot = await sitesRef.get();

  if (snapshot.empty) {
    console.log("No matching documents.");
    return res.status(400);
  }

  let sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json(sites);
}
