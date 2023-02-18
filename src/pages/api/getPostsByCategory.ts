import type { NextApiRequest, NextApiResponse } from 'next';
import blogData from '@/data/blogData';
import { BlogPost } from "../../types/types";

const filterPostsByCategoryId = (id: number) => {
  return blogData.posts.filter((post) => post.categories.includes(id));
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost[]>
) {
  const id = Number(req.query.id); // Use req.query.id to get the requested category ID as a number
  const posts = filterPostsByCategoryId(id);
  res.status(200).json(posts);
}
