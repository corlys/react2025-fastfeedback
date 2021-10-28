import { User } from "@firebase/auth";
const fetcher = async (url: string, user: User) => {
  const token = await user.getIdToken();
  const res = await fetch(url, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      token,
    }),
    credentials: "same-origin",
  });
  return res.json();
};

export default fetcher;
