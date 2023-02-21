import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { BlogPost } from "../../types/types";

const filterPostsBySearchQuery = async (query: string) => {
  try {
    const endpointUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getPosts`;
    const response = await axios.get(endpointUrl);
    const blogData = response.data;
    return blogData.posts.filter((post: BlogPost) => post.title.toLowerCase().includes(query.toLowerCase()));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPost[]>
) {
  const query = String(req.query.query);
  const posts = await filterPostsBySearchQuery(query);
  res.status(200).json(posts);
}
