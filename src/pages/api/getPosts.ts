import type { NextApiRequest, NextApiResponse } from 'next'
import blogData from "@/data/blogData";
import { BlogData } from "../../types/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogData>
) {
  res.status(200).json(blogData);
}
