import { SITE_URL } from "$lib/constants.js";
import { json } from "@sveltejs/kit";

export const GET = async ({ params: { category }, fetch, setHeaders }) => {
  let data = [];
  try {
    const res = await fetch(`/browse/${category}/index.json`);
    data = await res.json();
  } catch (error) {
    console.error("info", error);
  }
  setHeaders({
    "Access-Control-Allow-Origin": SITE_URL,
    "cache-control": "max-age=31104000",
  });

  return json(data);
};
