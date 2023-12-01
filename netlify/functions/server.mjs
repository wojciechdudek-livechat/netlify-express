import { round } from "mathjs";

export default async (req, context) => {
  return new Response(`Hello, world! ${round(e, 3)}`);
};
