import blogData from "@/data/blogData";
import { BlogData } from "../../types/types";
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogData>
) {
  res.status(200).json(blogData);
}
